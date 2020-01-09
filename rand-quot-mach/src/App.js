import React from "react";
import ReactFCCtest from "react-fcctest";
import "./App.css";

const quotes = [
  {
    text: (
      <div className="quoteText">
        <p>
          The aim of philosophy, abstractly formulated, is to understand how
          things in the broadest possible sense of the term hang together in the
          broadest possible sense of the term.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Wilfrid Sellars</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          ...these linguistic objects are subject to rules and
          principles--[they] are fraught with 'ought'...
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Wilfrid Sellars</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          It is clear from the above analysis, therefore, that classical
          sense-datum theories ... are confronted by an inconsistent triad made
          up of the following three propositions:
        </p>
        <p className="indent">
          A. X senses red sense content s entails x non-inferentially knows that
          s is red.
        </p>
        <p className="indent">
          B. The ability to sense sense contents is unacquired.
        </p>
        <p className="indent">
          C. The ability to know facts of the form <em>x is Φ</em> is acquired.
        </p>
        <p>
          A and B together entail not-C; B and C entail not-A; A and C entail
          not-B.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Wilfrid Sellars</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          Thus the conceptual framework of persons is not something that needs
          to be <em>reconciled with</em> the scientific image, but rather
          something to be <em>joined</em> to it. Thus, to complete the
          scientific image we need to enrich it <em>not</em> with more ways of
          saying what is the case, but with the language of community and
          individual intentions.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Wilfrid Sellars</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          Thoughts without content are empty, intuitions without concepts are
          blind.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Immanuel Kant</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          All the interests of my reason, speculative as well as practical,
          combine in the three following questions:
        </p>
        <p className="indent">1. What can I know?</p>
        <p className="indent">2. What ought I to do?</p>
        <p className="indent">3. What may I hope?</p>
      </div>
    ),
    author: (
      <div>
        <p>-- Immanuel Kant</p>
      </div>
    ),
    note: (
      <div>
        <p>
          (note: Kant later added a fourth question, meant to summarize the
          previous three: "4. What is the human?")
        </p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          So act that you use humanity, whether in your own person or in the
          person of any other, always at the same time as an end, never merely
          as a means.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Immanuel Kant</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          We have no power of Introspection, but all knowledge of the internal
          world is derived by hypothetical reasoning from our knowledge of
          external facts.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Charles Sanders Peirce</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          We have no power of Intuition, but every cognition is determined
          logically by previous cognitions.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Charles Sanders Peirce</p>
      </div>
    ),
    note: ""
  },
  {
    text: (
      <div className="quoteText">
        <p>We have no power of thinking without signs.</p>
      </div>
    ),
    author: (
      <div>
        <p>-- Charles Sanders Peirce</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>We have no conception of the absolutely incognizable.</p>
      </div>
    ),
    author: (
      <div>
        <p>-- Charles Sanders Peirce</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          The real, then, is that which, sooner or later, information and
          reasoning would finally result in, and which is therefore independent
          of the vagaries of me and you. Thus, the very origin of the conception
          of reality shows that this conception essentially involves the notion
          of a COMMUNITY, without definite limits, and capable of an indefinite
          increase of knowledge.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Charles Sanders Peirce</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          ...the word or sign which man [sic] uses <em>is</em> the man himself
          [sic].... Thus my language is the sum total of myself; for the man
          [sic] is the thought.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Charles Sanders Peirce</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>What can be said at all can be said clearly.</p>
      </div>
    ),
    author: (
      <div>
        <p>-- Ludwig Wittgenstein</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>Whereof one cannot speak thereof one must be silent.</p>
      </div>
    ),
    author: (
      <div>
        <p>-- Ludwig Wittgenstein</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          I am, therefore, of the opinion that the problems [of philosophy] have
          in essentials been finally solved. And if I am not mistaken in this,
          then the value of this work ... consists in the fact that it shows how
          little has been done when these problems have been solved.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Ludwig Wittgenstein</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          "So you are saying that human agreement decides what is true and what
          is false?" -- What is true or false is what human beings <em>say</em>;
          and it is in their <em>language</em> that human beings agree. This is
          agreement not in opinions, but rather in form of life.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Ludwig Wittgenstein</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          In what sense are my sensations <em>private</em>? -- Well, only I can
          know whether I am really in pain; another person can only surmise it.
          -- In one way this is false, and in another nonsense.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Ludwig Wittgenstein</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          So in the end when one is doing philosophy one gets to the point where
          one would like just to emit an inarticulate sound.
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Ludwig Wittgenstein</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  },
  {
    text: (
      <div className="quoteText">
        <p>
          My propositions are elucidatory in this way: he who understands me
          finally recognizes them as senseless, when he has climbed out through
          them, on them, over them. (He must so to speak throw away the ladder,
          after he has climbed up on it.)
        </p>
      </div>
    ),
    author: (
      <div>
        <p>-- Ludwig Wittgenstein</p>
      </div>
    ),
    note: (
      <div>
        <p></p>
      </div>
    )
  }
];

class Quotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteNum: Math.floor(Math.random() * quotes.length)
    };
    this.update = this.update.bind(this);
  }

  update() {
    let nextQuot = Math.floor(Math.random() * quotes.length);

    if (nextQuot !== this.state.quoteNum) this.setState({ quoteNum: nextQuot });
    else if (nextQuot === quotes.length - 1)
      this.setState({ quoteNum: nextQuot - 1 });
    else this.setState({ quoteNum: nextQuot + 1 });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{quotes[this.state.quoteNum].text}</div>
        <br />
        <div id="author">{quotes[this.state.quoteNum].author}</div>
        <br />
        <div id="note">{quotes[this.state.quoteNum].note}</div>
        <div id="buttonDiv">
          <button type="button">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
              <i className="fab fa-twitter-square"></i>
            </a>
          </button>
          <span id="buttonSpan" />
          <button id="new-quote" type="button" onClick={this.update}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div id="App">
      <ReactFCCtest />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <Quotation />
    </div>
  );
}

export default App;
