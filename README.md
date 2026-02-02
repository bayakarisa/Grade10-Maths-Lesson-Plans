# Grade 10 Mathematics - Lesson Plans

A website for Grade 10 Mathematics lesson plans with Share, Download PDF, Print, and Full Book PDF export.

## Run the website

```bash
npm run dev
```

Then open http://localhost:5173/

## How to add new lesson plans

1. **Create a new lesson component** in `src/lessons/` (e.g. `MyNewLesson.jsx`)
   - Copy `ClassifyingRealNumbers.jsx` as a template
   - Replace the content with your lesson plan content

2. **Register the lesson** in `src/data/lessons.js`:
   ```js
   import MyNewLesson from '../lessons/MyNewLesson'

   export const lessons = [
     // ... existing lessons
     {
       id: 'my-new-lesson',
       title: 'My New Lesson Title',
       strand: 'Numbers and Algebra',
       subStrand: 'Algebra',
       duration: '45 minutes',
       component: MyNewLesson,
     },
   ]
   ```

3. The new lesson will appear on the home page and in the Full Book PDF.

## Features

- **Home page** – Lists all lesson plans
- **Individual lesson pages** – Share, Download PDF, Print
- **Download Full Book (PDF)** – Exports all lessons as one PDF book (from home page)
