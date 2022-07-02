import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material';

export const ColorToggleButton = () => {
  const [alignment, setAlignment] = React.useState('recommend');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="warning"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{ maxWidth: 400, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '25px'}}
    >
      <StyledToggler value="all">All</StyledToggler>
      <StyledToggler value="popular">Popular</StyledToggler>
      <StyledToggler value="recommend" varia>Recommend</StyledToggler>
      <StyledToggler value="nearest">Nearest</StyledToggler>
    </ToggleButtonGroup>
  );
}


const StyledToggler = styled(ToggleButton)({
    border: 0,
})