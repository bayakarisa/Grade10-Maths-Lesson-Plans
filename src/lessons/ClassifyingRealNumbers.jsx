/**
 * Lesson: Classifying Real Numbers
 * Add more lesson components by copying this file and adapting the content.
 */
function ClassifyingRealNumbers() {
  return (
    <>
      {/* Lesson Overview */}
      <section className="lesson-overview">
        <h2>Lesson Overview</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <div className="label">Strand</div>
            <div className="value">Numbers and Algebra</div>
          </div>
          <div className="overview-item">
            <div className="label">Sub-Strand</div>
            <div className="value">Real Numbers</div>
          </div>
          <div className="overview-item">
            <div className="label">Grade Level</div>
            <div className="value">Grade 10</div>
          </div>
          <div className="overview-item">
            <div className="label">Total Duration</div>
            <div className="value">40 minutes</div>
          </div>
        </div>
        <div className="learning-outcome">
          <h3>Learning Outcome</h3>
          <p>By the end of the lesson, the learner should be able to classify whole numbers as odd, even, prime, and composite in different situations.</p>
        </div>
        <div className="inquiry-question">
          <h3>Key Inquiry Question</h3>
          <p>How do we use real numbers in day-to-day activities?</p>
        </div>
      </section>

      {/* Part 1: Problem-Solving and Discovery */}
      <section className="part-section">
        <div className="part-header">
          <h2>Part 1: Problem-Solving and Discovery</h2>
          <span className="duration">15 minutes</span>
        </div>
        <p className="part-description">This phase is designed to activate prior knowledge and encourage student-led discovery through a collaborative, hands-on activity.</p>

        <ol className="activity-list">
          <li>Working in groups, write numbers from 1 to 100.</li>
          <li>Recall: What is an odd number? What is an even number?</li>
          <li>Sort the numbers you wrote down into odd or even.</li>
          <li>What patterns do you notice between even and odd numbers?</li>
          <li>Identify prime and composite numbers from the list of even and odd numbers you have.</li>
          <li>Discuss how a number is classified.</li>
          <li>Identify prime numbers that are even.</li>
          <li>Brainstorm a real-life example where you can find odd, even, prime, and composite numbers.</li>
          <li>Describe why classifying numbers in real-life could be useful.</li>
          <li>Share your work with your fellow learners.</li>
        </ol>

        <div className="teacher-notes">
          <div className="teacher-note">
            <h4>Observe and Listen:</h4>
            <p>Pay close attention to how students define odd, even, prime, and composite numbers. Note any misconceptions or interesting patterns they identify.</p>
          </div>
          <div className="teacher-note ask">
            <h4>Ask Guiding Questions:</h4>
            <p>Instead of giving answers, ask questions like: How did you decide if a number was prime? I see you found a pattern when you add two odd numbers; can you test that with a few more examples?</p>
          </div>
          <div className="teacher-note bridge">
            <h4>Bridge to Formal Instruction:</h4>
            <p>As groups present their findings, write key student discoveries, definitions, and patterns on the board. This creates a student-generated foundation for the formal instruction to follow.</p>
          </div>
        </div>
      </section>

      {/* Part 2: Structured Instruction */}
      <section className="part-section">
        <div className="part-header">
          <h2>Part 2: Structured Instruction</h2>
          <span className="duration">10 minutes</span>
        </div>
        <p className="part-description">This phase connects the students' discoveries from the Anchor Task to formal mathematical concepts, definitions, and properties.</p>

        <div className="definition-box">
          <h4>Definitions:</h4>
          <ul>
            <li><strong>Odd numbers</strong> are numbers that when divided by 2, you get a remainder.</li>
            <li><strong>Even numbers</strong> are numbers that are divisible by 2.</li>
          </ul>
        </div>

        <div className="properties-box">
          <h4>Properties:</h4>
          <ul>
            <li>The sum or difference of two even numbers is even. (Example: 6 + 4 = 10 and 6 − 2 = 4.)</li>
            <li>The sum or difference of two odd numbers is even. (Example: 7 + 3 = 10 and 11 − 9 = 2.)</li>
            <li>The sum or difference of an even and an odd number is always odd. (Example: 8 + 5 = 13 and 8 − 5 = 3.)</li>
            <li>When two odd integers are multiplied, the result is always an odd number. (Example: 3 × 3 = 9.)</li>
            <li>When two even integers are multiplied, the result is an even number. (Example: 12 × 12 = 144.)</li>
            <li>An even number multiplied by an odd number equals an even number. (Example: 12 × 3 = 36.)</li>
          </ul>
        </div>

        <div className="note-box">
          <p><strong>Note:</strong> We can only talk about even and odd numbers if they are integers (i.e., elements of ℤ).</p>
        </div>

        <div className="how-to-box">
          <h4>How to Identify Even or Odd Integers:</h4>
          <ul>
            <li>A number is <strong>even</strong> if it ends with one of the digits: 0, 2, 4, 6, 8.</li>
            <li>A number is <strong>odd</strong> if it ends with one of the digits: 1, 3, 5, 7, 9.</li>
          </ul>
          <p style={{ marginTop: '10px', fontStyle: 'italic' }}>This method works only for integers (whole numbers, including zero and negatives).</p>
        </div>

        <div className="scaffolding-box">
          <h4>Scaffolding and Addressing Misconceptions:</h4>
          <p>If students struggled to differentiate between prime and composite numbers, provide a mini-lesson on factors and multiples. If students misidentified 1 as a prime number, explicitly clarify that a prime number has exactly two distinct factors (1 and itself), and since 1 only has one factor, it is not prime.</p>
        </div>
      </section>

      {/* Part 3: Practice and Application */}
      <section className="part-section">
        <div className="part-header">
          <h2>Part 3: Practice and Application</h2>
          <span className="duration">15 minutes</span>
        </div>
        <p className="part-description">This phase allows students to apply their understanding through a mix of procedural practice and problem-solving, both individually and collaboratively.</p>

        <div className="exercise">
          <h4>Classify the following numbers as even or odd:</h4>
          <div className="exercise-grid">
            <div className="exercise-item">
              <span className="number">a) 1107</span>
              <span className="answer odd">Odd</span>
            </div>
            <div className="exercise-item">
              <span className="number">b) 2028</span>
              <span className="answer">Even</span>
            </div>
            <div className="exercise-item">
              <span className="number">c) 3333</span>
              <span className="answer odd">Odd</span>
            </div>
            <div className="exercise-item">
              <span className="number">d) 5052</span>
              <span className="answer">Even</span>
            </div>
            <div className="exercise-item">
              <span className="number">e) 1800</span>
              <span className="answer">Even</span>
            </div>
            <div className="exercise-item">
              <span className="number">f) 1349</span>
              <span className="answer odd">Odd</span>
            </div>
          </div>
        </div>

        <div className="word-problem">
          <h4>Word Problem:</h4>
          <p className="problem-text">Kirui has 35 cows on his farm and wants to group them into 2 pens. Will each pen have an equal number of cows? Explain using properties of even and odd numbers.</p>
          <div className="solution">
            <h5>Solution:</h5>
            <p>First, we identify whether 35 is even or odd. Since the last digit is 5, this makes 35 an odd number. Since an odd number cannot be divided evenly into two equal groups, the cows can only be divided into two groups: one with 18 cows and the other with 17 cows. Therefore, the cows cannot be shared evenly across all pens.</p>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="assessment-section">
        <h2>Assessment (Formative)</h2>
        <p style={{ marginBottom: '20px' }}>Assessment will be ongoing throughout the lesson to gauge student understanding and inform instruction.</p>

        <div className="assessment-item">
          <h4>Anchor Task:</h4>
          <p>Use observation checklists while circulating to note student participation, understanding of concepts, and ability to collaborate.</p>
        </div>

        <div className="assessment-item">
          <h4>Structured Instruction:</h4>
          <p>Use targeted questioning to check for understanding of the formal definitions and properties.</p>
        </div>

        <div className="assessment-item">
          <h4>Practice and Application:</h4>
          <p>Review students' independent work and listen to group discussions on the word problem to assess their ability to apply the concepts.</p>
        </div>

        <h3 style={{ marginTop: '25px', marginBottom: '15px', color: '#1a237e' }}>Homework / Extended Practice:</h3>
        <ol className="homework-list">
          <li>Classify the following numbers as even or odd: a) 1008, b) 1521, c) 2117, d) 625, e) 1314, f) 1703, g) 9272, h) 22801</li>
          <li>List all the numbers between 8102 and 8130 and identify odd and even numbers from the range.</li>
          <li>Find the sum of the first 20 numbers and determine if the result is odd or even.</li>
          <li>A grade 10 class has 52 students and their class teacher wanted to group them in pairs. Will each group have an equal number of students? Explain using odd or even properties.</li>
        </ol>
      </section>

      {/* Differentiation Strategies */}
      <section className="differentiation-section">
        <h2>Differentiation Strategies</h2>
        <ul className="differentiation-list">
          <li>Focus on the identification criterion (last digit) before moving to the properties of operations.</li>
          <li>Work in a teacher-led small group during the guided practice to reinforce concepts.</li>
          <li>Provide a 1-100 chart to help with number identification during the Anchor Task.</li>
        </ul>

        <div className="extension-box">
          <h4>Extension Problem:</h4>
          <p>Mutula has 35 hats and wants to arrange them in equal rows for display. In how many different ways can he arrange the hats in equal rows?</p>
          <div className="expected-answer">
            <h5>Expected Answer:</h5>
            <p>This prompts students to think about factors. Since 35 is a composite number with factors 1, 5, 7, and 35, Mutula can arrange the hats in 5 rows of 7 or 7 rows of 5. This reinforces the connection between odd/even classification and the deeper properties of prime/composite numbers.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClassifyingRealNumbers
