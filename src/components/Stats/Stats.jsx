export const Stats = () => {
  return <section className="px-32 py-8 bg-lightPink font-semibold flex justify-evenly gap-24">
    <div className="flex flex-col items-center">
      <span className="text-3xl">90%</span>
      <span className="text-2xl font-medium text-center">
        of all orders are produced locally
      </span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-3xl">90%</span>
      <span className="text-2xl font-medium text-center">
        of orders arrive within 5 days of ordering
      </span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-3xl">140+</span>
      <span className="text-2xl font-medium text-center">
        print providers across 32 countries
      </span>
    </div>
  </section>
}