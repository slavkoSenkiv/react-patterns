import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item" id="experience">
            <Accordion.Title className="accordion-item-title" id="experience">We got 20y of exp</Accordion.Title>
            <Accordion.Content id="experience" className="accordion-item-content">
              <article>
                <p>You can't go wrong with us</p>
                <p>
                  We are planning hightly personalizated trips for individuals
                  for more than 20 years
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item" id="local-guides">
            <Accordion.Title className="accordion-item-title" id="local-guides">We work with local guides</Accordion.Title>
            <Accordion.Content className="accordion-item-content" id="local-guides">
              <article>
                <p>We are not doing this alone from our office</p>
                <p>
                  Instead we are working with local guides to endure safty and
                  relax.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
