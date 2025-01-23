import { useRouter } from 'next/navigation';

export const useActivityNavigation = () => {
  const router = useRouter();

  const navigateToActivity = (ActivityId: number) => {
    router.push(`/activities/${ActivityId}`);
  };

  return navigateToActivity;
};
