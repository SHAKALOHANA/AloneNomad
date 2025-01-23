import React, { useId, forwardRef } from 'react';
import {
  baseInput,
  inputVariants,
  fileInputHidden,
  uploadLabelVariants,
  passwordInputWrapper,
} from './CustomInput.css';
import type { CustomInputMode } from '@/types/CustomInput';
import { placeholderMap, typeMap } from '@/types/CustomInput';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mode?: CustomInputMode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ mode = 'nickname', placeholder, type, className, ...props }, ref) => {
    const uniqueId = useId();
    const internalId = `custom-input-${uniqueId}`;
    const finalId = props.id ?? internalId;

    const variantClass = inputVariants[mode];

    const combinedClassName = [baseInput, variantClass, className]
      .filter(Boolean)
      .join(' ');

    // ─────────────────────────────────────────
    // password 모드 (비밀번호 표시/숨기기 토글 사용을 위해 부모에 relative 적용 )
    // ─────────────────────────────────────────

    if (
      mode === 'password' ||
      mode === 'passwordConfirm' ||
      mode === 'myPassword' ||
      mode === 'myPasswordConfirm'
    ) {
      return (
        <div>
          <div className={passwordInputWrapper}>
            <input
              ref={ref}
              className={combinedClassName}
              type={type ?? typeMap[mode]}
              placeholder={placeholder ?? placeholderMap[mode]}
              {...props}
            />
          </div>
        </div>
      );
    }

    // ─────────────────────────────────────────
    // image / profile 모드 (파일 업로드)
    // ─────────────────────────────────────────

    if (mode === 'image' || mode === 'profile') {
      const labelClassName =
        mode === 'image'
          ? uploadLabelVariants.image
          : uploadLabelVariants.profile;

      return (
        <>
          <input
            ref={ref}
            id={finalId}
            className={fileInputHidden}
            type={type ?? typeMap[mode]}
            accept="image/*"
            {...props}
          />
          <label htmlFor={finalId} className={labelClassName}></label>
        </>
      );
    }

    // ─────────────────────────────────────────
    // 기본 모드
    // ─────────────────────────────────────────

    return (
      <input
        ref={ref}
        className={combinedClassName}
        placeholder={placeholder ?? placeholderMap[mode]}
        type={type ?? typeMap[mode]}
        {...props}
      />
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
