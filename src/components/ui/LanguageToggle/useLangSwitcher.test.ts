import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useRouter, usePathname } from 'next/navigation';
import { useLangSwitcher } from './useLangSwitcher'; // Adjust path if needed

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
}));

describe('useLangSwitcher', () => {
  const mockPush = vi.fn();

beforeEach(() => {
  vi.mocked(useRouter).mockReturnValue({
    push: mockPush,
  } as unknown as ReturnType<typeof useRouter>);
});

  describe('currentLang', () => {
    it('extracts the current language from a nested pathname', () => {
      vi.mocked(usePathname).mockReturnValue('/fr/about');
      const { result } = renderHook(() => useLangSwitcher());
      
      expect(result.current.currentLang).toBe('fr');
    });

    it('fallbacks to "en" if pathname is root', () => {
      vi.mocked(usePathname).mockReturnValue('/');
      const { result } = renderHook(() => useLangSwitcher());
      
      expect(result.current.currentLang).toBe('en');
    });
  });

  describe('switchLang', () => {
    it('switches language and preserve the rest of the path', () => {
      vi.mocked(usePathname).mockReturnValue('/en/contact');
      const { result } = renderHook(() => useLangSwitcher());
      
      result.current.switchLang('fr');
      
      expect(mockPush).toHaveBeenCalledWith('/fr/contact');
    });

    it('removes trailing slashes when switching language', () => {
      vi.mocked(usePathname).mockReturnValue('/en/about/');
      const { result } = renderHook(() => useLangSwitcher());
      
      result.current.switchLang('fr');
      
      expect(mockPush).toHaveBeenCalledWith('/fr/about');
    });

    it('handles switching from a root path with trailing slash', () => {
      vi.mocked(usePathname).mockReturnValue('/en/');
      const { result } = renderHook(() => useLangSwitcher());
      
      result.current.switchLang('fr');
      
      expect(mockPush).toHaveBeenCalledWith('/fr');
    });
  });

  describe('localePath', () => {
    it('generates a localized path correctly', () => {
      vi.mocked(usePathname).mockReturnValue('/en');
      const { result } = renderHook(() => useLangSwitcher());
      
      expect(result.current.localePath('/services')).toBe('/en/services');
    });

    it('adds a leading slash if missing in the provided path', () => {
      vi.mocked(usePathname).mockReturnValue('/en');
      const { result } = renderHook(() => useLangSwitcher());
      
      expect(result.current.localePath('services')).toBe('/en/services');
    });

    it('handles root path ("/") without adding a trailing slash', () => {
      vi.mocked(usePathname).mockReturnValue('/fr');
      const { result } = renderHook(() => useLangSwitcher());
      
      expect(result.current.localePath('/')).toBe('/fr');
    });
    
    it('handles empty string path as root', () => {
      vi.mocked(usePathname).mockReturnValue('/fr');
      const { result } = renderHook(() => useLangSwitcher());
      
      expect(result.current.localePath('')).toBe('/fr');
    });
  });
});