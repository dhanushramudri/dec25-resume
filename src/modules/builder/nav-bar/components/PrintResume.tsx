import { useEffect } from 'react';

import { MenuItem } from '@mui/material';
import { StyledButton } from '../atoms';

export const PrintResume: React.FC<{ isMenuButton?: boolean }> = ({ isMenuButton }) => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Single Page Resume Builder';
    });
  }, []);

  if (isMenuButton) {
    return <MenuItem onClick={globalThis?.print}>Download as PDF</MenuItem>;
  }

  return (
    <StyledButton onClick={globalThis?.print} variant="outlined">
      Download as PDF
    </StyledButton>
  );
};