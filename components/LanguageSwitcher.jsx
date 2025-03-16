import { useRouter } from 'next/router';

function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (e) => {
    const newLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={switchLanguage} className="p-2 rounded">
      <option value="en">🇺🇸 English</option>
      <option value="pt">🇧🇷 Português</option>
    </select>
  );
}

export default LanguageSwitcher;
