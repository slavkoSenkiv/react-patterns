import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem className="accordion-item" title="We got 20y of exp">
            <article>
              <p>You can't go wrong with us</p>
              <p>
                We are planning hightly personalizated trips for individuals for
                more than 20 years
              </p>
            </article>
          </AccordionItem>
          <AccordionItem className="accordion-item" title="We work with local guides">
            <article>
              <p>We are not doing this alone from our office</p>
              <p>
                Instead we are working with local guides to endure safty and relax.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
