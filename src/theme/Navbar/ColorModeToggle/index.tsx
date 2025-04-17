import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import { type ReactNode } from 'react';
import { TbMoon, TbSun } from 'react-icons/tb';
import { Button } from '@site/src/components/ui/button';

export default function NavbarColorModeToggle(): ReactNode {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const {colorMode, setColorMode} = useColorMode();

  if (disabled) {
    return null;
  }

  return (
    <Button  size="icon" onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
    {
      colorMode === 'dark' ? (
        <TbSun className="w-4 h-4" />
      ) : (
        <TbMoon className="w-4 h-4" />
      )
    }   
    </Button>
  );
}
