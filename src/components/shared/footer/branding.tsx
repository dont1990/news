const FooterBranding = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex items-center gap-x-4">
        <p className="text-xl text-primary">نیوزهاب</p>
        <p className="text-sm text-muted-foreground">
          منبع معتبر اخبار از سال ۲۰۲۴
        </p>
      </div>

      <p className="text-sm text-muted-foreground text-center md:text-right">
        © 2024 NewsHub. تمامی حقوق محفوظ است.
      </p>
    </div>
  );
};

export default FooterBranding;
