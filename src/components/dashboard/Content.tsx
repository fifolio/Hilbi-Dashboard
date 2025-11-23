import LastActiveUsersSection from './lastActiveUsersSection/LastActiveUsersSection'
import Cards from './statsSection/cards/Cards'
import structure from './statsSection/cards/structure'

export default function Content() {

  return (
    <div className="tw:space-y-4">
      <section className="tw:md:flex tw:w-full tw:md:space-x-4 tw:space-y-4 tw:md:space-y-0">
        {structure.map((structure, index) => (
          <Cards key={index} cardStructure={structure} />
        ))}
      </section>
      <main>
        <LastActiveUsersSection />
      </main>
    </div>
  )
}
