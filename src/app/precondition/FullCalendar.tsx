'use client';

import React, { useEffect, useState, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import ReservationModal from './ReservationModal';
import {
  pendingEvent,
  completedEvent,
  confirmedEvent,
  dayGridDay,
  dayNumberText,
} from './FullCalendar.css';
import { instance } from '../../app/api/instance';

interface CalendarProps {
  selectedId: string;
}

const Calendar: React.FC<CalendarProps> = ({ selectedId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<
    { title: string; date: string; classNames?: string[]; scheduleId: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const fetchEvents = useCallback(async () => {
    if (!selectedId) return;

    try {
      const url = `/my-activities/${selectedId}/reservation-dashboard?year=${currentYear}&month=${String(
        currentMonth
      ).padStart(2, '0')}`;

      console.log('API 호출 URL:', url);

      const response = await instance.get(url);
      const data = response.data;

      console.log('API 응답 데이터:', data);

      if (!Array.isArray(data)) {
        console.error('Invalid data format:', data);
        return;
      }

      const apiEvents = data.flatMap((entry) => {
        const { date, reservations } = entry;
        const eventsForDate = [];

        if (reservations.pending > 0) {
          eventsForDate.push({
            title: `예약 ${reservations.pending}`,
            date,
            classNames: ['pending'],
            scheduleId: entry.scheduleId,
          });
        }

        if (reservations.completed > 0) {
          eventsForDate.push({
            title: `완료 ${reservations.completed}`,
            date,
            classNames: ['completed'],
            scheduleId: entry.scheduleId,
          });
        }

        if (reservations.confirmed > 0) {
          eventsForDate.push({
            title: `승인 ${reservations.confirmed}`,
            date,
            classNames: ['confirmed'],
            scheduleId: entry.scheduleId,
          });
        }

        return eventsForDate;
      });

      setEvents(apiEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }, [selectedId, currentYear, currentMonth]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDateClick = (info: { dateStr: string }) => {
    setSelectedDate(info.dateStr);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  const calendarHeight = 'auto';

  return (
    <div style={{ position: 'relative' }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
        locale={koLocale}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        dayHeaderFormat={{ weekday: 'short' }}
        dayCellContent={(arg) => (
          <div className={dayGridDay}>
            <span className={dayNumberText}>
              {arg.dayNumberText.replace('일', '')}
            </span>
          </div>
        )}
        height={calendarHeight}
        eventContent={(eventInfo) => {
          let eventStyle = '';

          if (eventInfo.event.classNames.includes('pending')) {
            eventStyle = pendingEvent;
          } else if (eventInfo.event.classNames.includes('completed')) {
            eventStyle = completedEvent;
          } else if (eventInfo.event.classNames.includes('confirmed')) {
            eventStyle = confirmedEvent;
          }

          return (
            <div className={eventStyle}>
              <span>{eventInfo.event.title}</span>
            </div>
          );
        }}
      />
      <ReservationModal
        isOpen={isOpen}
        date={selectedDate ?? ''}
        onClose={handleCloseModal}
        selectedActivityId={selectedId}
      />
    </div>
  );
};

export default Calendar;
