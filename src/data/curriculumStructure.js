/**
 * Grade 10 Mathematics - Curriculum Structure
 * Hierarchical lesson plan structure for the site
 */

export const curriculumStructure = [
  // ========================================
  // 1. NUMBERS AND ALGEBRA
  // ========================================
  {
    code: '1',
    title: 'Numbers and Algebra',
    children: [
      // 1.1 Real Numbers
      {
        code: '1.1',
        title: 'Real Numbers',
        children: [
          {
            code: '1.1.1',
            title: 'Classifying whole numbers as odd, even, prime and composite',
            lessonId: 'classifying-whole-numbers',
            children: [
              { title: 'Even and Odd Numbers' },
              { title: 'Prime and Composite Numbers' },
            ],
          },
          {
            code: '1.1.2',
            title: 'Classifying real numbers as rational and irrational',
            lessonId: 'classifying-rational-irrational',
            children: [
              { title: 'Rational Numbers' },
              { title: 'Irrational Numbers' },
            ],
          },
          {
            code: '1.1.3',
            title: 'Finding reciprocals of real numbers using division',
            lessonId: 'reciprocals-division',
          },
          {
            code: '1.1.4',
            title: 'Finding reciprocals of real numbers using mathematical tables and calculators',
            lessonId: 'reciprocals-tables-calculators',
            children: [
              {
                code: '1.1.4.1',
                title: 'Finding reciprocals of numbers using mathematical tables',
              },
              {
                code: '1.1.4.2',
                title: 'Finding reciprocals using a calculator',
              },
            ],
          },
          {
            code: '1.1.5',
            title: 'Using reciprocals of real numbers in mathematical computations',
            lessonId: 'using-reciprocals',
          },
        ],
      },
      // 1.2 Indices and Logarithms
      {
        code: '1.2',
        title: 'Indices and Logarithms',
        children: [
          {
            code: '1.2.1',
            title: 'Indices',
            lessonId: 'indices',
            children: [
              {
                code: '1.2.1.3',
                title: 'Zero and Negative Indices',
              },
              {
                code: '1.2.1.4',
                title: 'Applications of Indices in Real-Life Situations',
              },
            ],
          },
          {
            code: '1.2.2',
            title: 'Logarithms',
            children: [
              {
                code: '1.2.2.1',
                title: 'Logarithms Notation',
                lessonId: 'logarithms-notation',
              },
              {
                code: '1.2.2.2',
                title: 'Using Logarithms with Standard Form',
                lessonId: 'logarithms-standard-form',
              },
              {
                code: '1.2.2.3',
                title: 'Determining Common Logarithms Using Mathematical Tables and Calculators',
                lessonId: 'logarithms-tables-calculators',
                children: [
                  { title: 'Using Logarithm Tables' },
                ],
              },
              {
                code: '1.2.2.4',
                title: 'Antilogarithms',
                lessonId: 'antilogarithms',
                children: [
                  { title: 'Finding Antilogarithms Using Tables' },
                  { title: 'Finding Antilogarithms Using Calculator' },
                ],
              },
              {
                code: '1.2.2.5',
                title: 'Multiplying and Dividing Logarithms',
                lessonId: 'logarithms-multiply-divide',
              },
              {
                code: '1.2.2.6',
                title: 'Applying Logarithms to Powers and Roots',
                lessonId: 'logarithms-powers-roots',
              },
            ],
          },
        ],
      },
    ],
  },

  // ========================================
  // 2. MEASUREMENTS AND GEOMETRY
  // ========================================
  {
    code: '2',
    title: 'Measurements and Geometry',
    children: [
      // 2.1 Similarity and Enlargement
      {
        code: '2.1',
        title: 'Similarity and Enlargement',
        children: [
          {
            code: '2.1.1',
            title: 'Similarity',
            lessonId: 'similarity',
          },
          {
            code: '2.1.2',
            title: 'Enlargement',
            lessonId: 'enlargement',
          },
          {
            code: '2.1.3',
            title: 'Scale Factors',
            children: [
              {
                code: '2.1.3.1',
                title: 'Area Scale Factor',
                lessonId: 'scale-factors-area',
              },
              {
                code: '2.1.3.2',
                title: 'Volume Scale Factor',
                lessonId: 'scale-factors-volume',
              },
              {
                code: '2.1.3.3',
                title: 'Further Exercise',
                lessonId: 'scale-factors-exercise',
              },
            ],
          },
        ],
      },
      // 2.2 Reflection and Congruence
      {
        code: '2.2',
        title: 'Reflection and Congruence',
        children: [
          {
            code: '2.2.5',
            title: "Determining the Equation of a Mirror Line (Line of Reflection) Given an Object and its Image",
            lessonId: 'equation-mirror-line',
          },
          {
            code: '2.2.6',
            title: 'Congruence',
            lessonId: 'congruence',
          },
          {
            code: '2.2.7',
            title: 'Congruence Tests for Triangles',
            lessonId: 'congruence-tests-triangles',
          },
        ],
      },
      // 2.3 Rotation
      {
        code: '2.3',
        title: 'Rotation',
        children: [
          {
            code: '2.3.1',
            title: 'Properties of Rotation',
            lessonId: 'properties-rotation',
          },
          {
            code: '2.3.2',
            title: 'Rotation on Different Planes',
            lessonId: 'rotation-different-planes',
            children: [
              {
                code: '2.3.2.1',
                title: 'Rotation in the Cartesian Plane',
                lessonId: 'rotation-cartesian-plane',
              },
            ],
          },
          {
            code: '2.3.3',
            title: 'Rotational Symmetry',
            lessonId: 'rotational-symmetry',
            children: [
              {
                code: '2.3.3.1',
                title: 'Determining the Order of Rotational Symmetry of Plane Figures',
                lessonId: 'rotational-symmetry-order',
              },
              {
                code: '2.3.3.2',
                title: 'Determining the Axis of Rotation and Order of Rotational Symmetry in Solids',
                lessonId: 'rotational-symmetry-solids',
              },
            ],
          },
          {
            code: '2.3.4',
            title: 'Rotation and Congruence',
            lessonId: 'rotation-congruence',
          },
        ],
      },
      // 2.4 Trigonometry 1
      {
        code: '2.4',
        title: 'Trigonometry 1',
        children: [
          {
            code: '2.4.1',
            title: 'Trigonometric Ratios of Acute Angles',
            lessonId: 'trig-ratios-acute',
            children: [
              {
                code: '2.4.1.1',
                title: 'Tangent of an Acute Angle',
                lessonId: 'tangent-acute-angle',
              },
              {
                code: '2.4.1.2',
                title: 'Sine and Cosine of an Acute Angle',
                lessonId: 'sine-cosine-acute-angle',
              },
            ],
          },
          {
            code: '2.4.2',
            title: "Sines and Cosines of Complementary Angles",
            lessonId: 'sines-cosines-complimentary',
          },
          {
            code: '2.4.3',
            title: 'Trigonometric Ratios of Special Angles (30°, 45°, 60°)',
            lessonId: 'trig-ratios-special-angles',
            children: [
              {
                code: '2.4.3.1',
                title: 'Tangent, Sine, and Cosine of 45°',
                lessonId: 'trig-ratios-45',
              },
              {
                code: '2.4.3.2',
                title: 'Tangent, Sine, and Cosine of 30° and 60°',
                lessonId: 'trig-ratios-30-60',
              },
            ],
          },
          {
            code: '2.4.4',
            title: 'Determining Trigonometric Ratios Using a Calculator',
            lessonId: 'trig-ratios-calculator',
          },
          {
            code: '2.4.5',
            title: 'Application of Trigonometric Ratios',
            lessonId: 'application-trig-ratios',
            children: [
              {
                code: '2.4.5.1',
                title: 'Trigonometric Ratios for Angles of Elevation and Depression',
                lessonId: 'trig-elevation-depression',
              },
            ],
          },
        ],
      },
      // 2.5 Area of Polygons
      {
        code: '2.5',
        title: 'Area of Polygons',
        children: [
          {
            code: '2.5.1',
            title: 'Area of Triangles',
            lessonId: 'area-triangles',
            children: [
              {
                code: '2.5.1.1',
                title: 'Area of a Triangle using Base and Height',
                lessonId: 'area-triangle-base-height',
              },
              {
                code: '2.5.1.2',
                title: "Area of a Triangle using Heron's Formula",
                lessonId: 'area-triangle-heron',
              },
              {
                code: '2.5.1.3',
                title: 'Area of a Triangle given Two Sides and an Included Angle',
                lessonId: 'area-triangle-sides-angle',
              },
            ],
          },
          {
            code: '2.5.2',
            title: 'Area of Quadrilaterals',
            lessonId: 'area-quadrilaterals',
            children: [
              {
                code: '2.5.2.1',
                title: 'Area of a Parallelogram',
                lessonId: 'area-parallelogram',
              },
              {
                code: '2.5.2.2',
                title: 'Area of a Rhombus',
                lessonId: 'area-rhombus',
              },
              {
                code: '2.5.2.3',
                title: 'Area of a Trapezium',
                lessonId: 'area-trapezium',
              },
              {
                code: '2.5.2.4',
                title: 'Area of a Kite',
                lessonId: 'area-kite',
              },
            ],
          },
          {
            code: '2.5.3',
            title: 'Area of Regular Polygons',
            lessonId: 'area-regular-polygons',
            children: [
              {
                code: '2.5.3.1',
                title: 'Area of a Heptagon',
                lessonId: 'area-heptagon',
              },
              {
                code: '2.5.3.2',
                title: 'Area of an Octagon',
                lessonId: 'area-octagon',
              },
              {
                code: '2.5.3.3',
                title: 'Area of a Nonagon',
                lessonId: 'area-nonagon',
              },
              {
                code: '2.5.3.4',
                title: 'Area of a Decagon',
                lessonId: 'area-decagon',
              },
            ],
          },
          {
            code: '2.5.4',
            title: 'Area of Irregular Polygons',
            lessonId: 'area-irregular-polygons',
            children: [
              {
                code: '2.5.4.1',
                title: 'Dividing Irregular Polygons into Triangles, Rectangles, and Trapeziums',
                lessonId: 'area-irregular-dividing',
              },
              {
                code: '2.5.4.2',
                title: 'Calculating Total Area by Summing Smaller Shapes',
                lessonId: 'area-irregular-summing',
              },
              {
                code: '2.5.4.3',
                title: 'Applications and Exercises',
                lessonId: 'area-irregular-applications',
              },
            ],
          },
        ],
      },
      // 2.6 Area of a Part of a Circle
      {
        code: '2.6',
        title: 'Area of a Part of a Circle',
        children: [
          {
            code: '2.6.1',
            title: 'Area of an Annulus',
            lessonId: 'area-annulus',
          },
          {
            code: '2.6.2',
            title: 'Area of a Sector of a Circle',
            lessonId: 'area-sector',
          },
          {
            code: '2.6.3',
            title: 'Area of an Annular Sector',
            lessonId: 'area-annular-sector',
          },
          {
            code: '2.6.4',
            title: 'Area of a Segment of a Circle',
            lessonId: 'area-segment',
          },
          {
            code: '2.6.5',
            title: 'Area of Common Region between two Intersecting Circles',
            lessonId: 'area-intersecting-circles',
          },
        ],
      },
      // 2.7 Surface Area and Volume of Solids
      {
        code: '2.7',
        title: 'Surface Area and Volume of Solids',
        children: [
          { code: '2.7.1', title: 'Surface Area of Prisms', lessonId: 'surface-area-prisms' },
          { code: '2.7.2', title: 'Surface area of a Cuboid', lessonId: 'surface-area-cuboid' },
          { code: '2.7.3', title: 'Surface Area of a Pyramid', lessonId: 'surface-area-pyramid' },
          { code: '2.7.4', title: 'Surface Area of a Sphere', lessonId: 'surface-area-sphere' },
          { code: '2.7.5', title: 'Surface Area of a Triangular Prism', lessonId: 'surface-area-triangular-prism' },
          { code: '2.7.6', title: 'Surface area of a Cone', lessonId: 'surface-area-cone' },
          { code: '2.7.7', title: 'Surface Area of Composite solids', lessonId: 'surface-area-composite' },
          { code: '2.7.8', title: 'Surface area of a Frustum', lessonId: 'surface-area-frustum' },
          { code: '2.7.9', title: 'Volume of Solids', lessonId: 'volume-solids' },
          { code: '2.7.10', title: 'Volume of a Cuboid', lessonId: 'volume-cuboid' },
          { code: '2.7.11', title: 'Volume of a Triangular Prism', lessonId: 'volume-triangular-prism' },
          { code: '2.7.12', title: 'Volume of a Pyramid', lessonId: 'volume-pyramid' },
          { code: '2.7.13', title: 'Volume of a Cylinder', lessonId: 'volume-cylinder' },
          { code: '2.7.14', title: 'Volume of a Sphere', lessonId: 'volume-sphere' },
          { code: '2.7.15', title: 'Volume of a Cone', lessonId: 'volume-cone' },
          { code: '2.7.16', title: 'Volume of a Frustum', lessonId: 'volume-frustum' },
          { code: '2.7.17', title: 'Volume of Composite solids', lessonId: 'volume-composite' },
        ],
      },
      // 2.8 Vectors I
      {
        code: '2.8',
        title: 'Vectors I',
        children: [
          { code: '2.8.1', title: 'Vector and Scalar Quantities', lessonId: 'vector-scalar-quantities' },
          { code: '2.8.3', title: 'Equivalent Vectors', lessonId: 'equivalent-vectors' },
          { code: '2.8.4', title: 'Addition of Vectors', lessonId: 'addition-vectors' },
          { code: '2.8.5', title: 'Multiplication of Vectors by a Scalar', lessonId: 'multiplication-vectors-scalar' },
          { code: '2.8.6', title: 'Column Vectors', lessonId: 'column-vectors' },
          { code: '2.8.7', title: 'Position Vectors', lessonId: 'position-vectors' },
          { code: '2.8.8', title: 'Magnitude of a Vector', lessonId: 'magnitude-vector' },
          { code: '2.8.9', title: 'Midpoint of a Vector', lessonId: 'midpoint-vector' },
          { code: '2.8.10', title: 'Translation Vector', lessonId: 'translation-vector' },
        ],
      },
      // 2.9 Linear Motion
      {
        code: '2.9',
        title: 'Linear Motion',
        children: [
          { code: '2.9.1', title: 'Speed', lessonId: 'speed' },
          { code: '2.9.2', title: 'Velocity and Acceleration in Different Situations', lessonId: 'velocity-acceleration' },
          { code: '2.9.3', title: 'Displacement Time Graph of Different Situations', lessonId: 'displacement-time-graph' },
          { code: '2.9.4', title: 'Interpretation of Displacement Time Graph', lessonId: 'interpretation-displacement-graph' },
          { code: '2.9.5', title: 'Velocity Time Graph', lessonId: 'velocity-time-graph' },
          {
            code: '2.9.6',
            title: 'Relative Speed',
            lessonId: 'relative-speed',
            children: [
              {
                code: '2.9.6.1',
                title: 'When Objects Move in the Same Direction',
                lessonId: 'relative-speed-same-direction',
              },
              {
                code: '2.9.6.2',
                title: 'When Objects Move Toward Each Other (Opposite Directions)',
                lessonId: 'relative-speed-opposite-directions',
              },
            ],
          },
        ],
      },
    ],
  },

  // ========================================
  // 3. STATISTICS AND PROBABILITY
  // ========================================
  {
    code: '3',
    title: 'Statistics and Probability',
    children: [
      // 3.1 Statistics 1
      {
        code: '3.1',
        title: 'Statistics 1',
        children: [
          {
            code: '3.1.1',
            title: 'Collection of Data',
            lessonId: 'collection-data',
            children: [
              { code: '3.1.1.1', title: 'Sources of Data', lessonId: 'sources-of-data' },
              { code: '3.1.1.2', title: 'Methods of Data Collection', lessonId: 'methods-data-collection' },
            ],
          },
          {
            code: '3.1.2',
            title: 'Representing Data using a Frequency Distribution Table',
            lessonId: 'frequency-distribution-table',
          },
          {
            code: '3.1.3',
            title: 'Measures of Central Tendency',
            lessonId: 'measures-central-tendency',
            children: [
              { code: '3.1.3.1', title: 'Ungrouped Data for Measures of Central Tendency', lessonId: 'measures-central-tendency-ungrouped' },
              { code: '3.1.3.2', title: 'Grouped Data for Measures of Central Tendency', lessonId: 'measures-central-tendency-grouped' },
            ],
          },
          {
            code: '3.1.4',
            title: 'Representation of Data',
            lessonId: 'representation-data',
            children: [
              { code: '3.1.4.1', title: 'Drawing Histograms and Frequency Polygons of Data', lessonId: 'histograms-frequency-polygons' },
            ],
          },
          {
            code: '3.1.5',
            title: 'Interpretation of data',
            lessonId: 'interpretation-data',
            children: [
              { code: '3.1.5.1', title: 'Interpreting Histograms and Frequency Polygons of Data', lessonId: 'interpreting-histograms-frequency-polygons' },
            ],
          },
        ],
      },
      // 3.2 Probability 1
      {
        code: '3.2',
        title: 'Probability 1',
        children: [
          {
            code: '3.2.1',
            title: 'Introduction to Probability',
            lessonId: 'intro-probability',
          },
          {
            code: '3.2.2',
            title: 'Probability Experiment and Sample Space',
            lessonId: 'probability-experiment-sample-space',
          },
          {
            code: '3.2.3',
            title: 'Probability of Simple Events',
            lessonId: 'probability-simple-events',
          },
          {
            code: '3.2.4',
            title: 'Mutually Exclusive and Independent Events',
            lessonId: 'mutually-exclusive-independent',
            children: [
              { code: '3.2.4.1', title: 'Mutually Exclusive', lessonId: 'mutually-exclusive' },
              { code: '3.2.4.2', title: 'Independent Events', lessonId: 'independent-events' },
            ],
          },
          {
            code: '3.2.5',
            title: 'Law of Probability',
            lessonId: 'law-probability',
            children: [
              { code: '3.2.5.1', title: 'Addition Law of Probability', lessonId: 'addition-law-probability' },
              { code: '3.2.5.2', title: 'Multiplication Rule', lessonId: 'multiplication-rule' },
            ],
          },
          {
            code: '3.2.6',
            title: 'Tree Diagrams and Independent Events',
            lessonId: 'tree-diagrams-independent',
          },
        ],
      },
    ],
  },
]
