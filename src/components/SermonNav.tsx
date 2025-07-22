function SermonNav() {
  return (
    <div className="flex flex-row items-center gap-8 p-8">
      <a
        href="/"
        className="text-text-secondary text-md underline hover:no-underline"
      >
        ← Back to Home
      </a>
      <h2 className="text-text-primary text-4xl font-bold">Sermons</h2>
    </div>
  );
}

export default SermonNav;
