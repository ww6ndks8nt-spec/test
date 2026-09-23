/* Independently authored STEP adaptations. Editorial time estimates; not trial timings. */
const STEP_PAPER1_PAPERS = [
  {
    "id": "steppractice01p1v2",
    "title": "STEP practice · Year 01 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "To estimate \\(E=\\sum_{r=1}^{\\infty}r^{-2}\\), retain the terms r=1,2,3 exactly and replace the remaining tail by \\(\\int_{7/2}^{\\infty}x^{-2}\\,dx\\). The integral means the limit of the integral with upper bound M as M tends to infinity. What estimate results?",
        "opts": [
          "59/36",
          "61/36",
          "427/252",
          "415/252",
          "49/36"
        ],
        "correct": 3,
        "sol": "<p>The retained terms add to 1+1/4+1/9=49/36. An antiderivative of x⁻² is −x⁻¹, so the tail estimate is 2/7. Adding gives (343+72)/252=415/252. The starting integration bound is 7/2, not 3 or 4.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper II, question 8(i). Catalogue: Supply.</a></p>",
        "topic": "Integration / Sequences and Series",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.0,
        "selectionId": "S154",
        "stepSource": {
          "year": 2016,
          "paper": "II",
          "part": "8(i)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf"
        },
        "sourceGroup": "2016-2-8",
        "templateFamily": "convergence-estimate"
      },
      {
        "n": 2,
        "stem": "Let t&gt;0, P=(2t,t²), A=(0,−t²), and O=(0,0). A region is bounded by OA, the straight segment AP and the arc y=x²/4 from O to P. What is its area?",
        "opts": [
          "\\(2t^3\\)",
          "\\(t^3\\)",
          "\\(t^3/3\\)",
          "\\(4t^3/3\\)",
          "\\(2t^3/3\\)"
        ],
        "correct": 4,
        "sol": "<p>The line AP is y=tx−t². The vertical difference between the parabola and line is x²/4−tx+t²=(x−2t)²/4, nonnegative. Integrating from 0 to 2t gives [x³/12−tx²/2+t²x]₀²ᵗ=2t³/3. Integrating just the portion above the x-axis would miss part of the region.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper I, question 4, area. Catalogue: Supply.</a></p>",
        "topic": "Integration / Geometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S163",
        "stepSource": {
          "year": 2015,
          "paper": "I",
          "part": "4, area",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf"
        },
        "sourceGroup": "2015-1-4",
        "templateFamily": "2015-1-4"
      },
      {
        "n": 3,
        "stem": "For real t define \\(c=(1-t^2)/(1+t^2)\\), \\(s=2t/(1+t^2)\\). You may use (c+s)²+(s−c)²=2 whenever c²+s²=1. Starting with t=1/3, which point on x²+y²=2 is obtained as (c+s,s−c)?",
        "opts": [
          "(7/5,−1/5)",
          "(1/5,7/5)",
          "(5/7,−5)",
          "(7/10,−1/10)",
          "(4/5,3/5)"
        ],
        "correct": 0,
        "sol": "<p>At t=1/3, c=(8/9)/(10/9)=4/5 and s=(2/3)/(10/9)=3/5. They satisfy c²+s²=1. Therefore (c+s,s−c)=(7/5,−1/5), whose squared coordinates sum to (49+1)/25=2. Both coordinates are rational and non-integral.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper III, question 5(i)(b). Catalogue: Direct.</a></p>",
        "topic": "Coordinate geometry / General algebra",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S227",
        "stepSource": {
          "year": 2012,
          "paper": "III",
          "part": "5(i)(b)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf"
        },
        "sourceGroup": "2012-3-5",
        "templateFamily": "2012-3-5"
      },
      {
        "n": 4,
        "stem": "A container has n tablets of each of three types, with n≥1. Three tablets are selected uniformly without replacement. What is the probability of selecting one of each type?",
        "opts": [
          "\\(n^2/[(3n-1)(3n-2)]\\)",
          "\\(2n^2/[(3n-1)(3n-2)]\\)",
          "\\(n/[(3n-1)(3n-2)]\\)",
          "\\(2/9\\)",
          "\\(6n^3/(3n)^3\\)"
        ],
        "correct": 1,
        "sol": "<p>After any first tablet, the second is a different type with probability 2n/(3n−1). Given this, the third must be the remaining type, probability n/(3n−2). Multiplying gives 2n²/[(3n−1)(3n−2)]. Sampling without replacement prevents use of independent 1/3 probabilities.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 12(ii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.0,
        "selectionId": "S204",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "12(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-12",
        "templateFamily": "2013-1-12"
      },
      {
        "n": 5,
        "stem": "Four people A,B,C,D stand in cyclic order. Starting at A, a parcel independently moves one place clockwise with probability 1/4, anticlockwise with probability 1/4, or stays put with probability 1/2 at each signal. You may use that after each positive number n of signals, the probabilities of being at B and D are both 1/4. What is the probability it is at A after n≥1 signals?",
        "opts": [
          "\\(1/2+2^{-n-1}\\)",
          "\\(1/4+(3/4)^n\\)",
          "\\(1/4+2^{-n}\\)",
          "\\(1/4+2^{-n-1}\\)",
          "\\(2^{-n}\\)"
        ],
        "correct": 3,
        "sol": "<p>Let Aₙ be the required probability. For n≥1, Aₙ₊₁=Aₙ/2+(1/4)(1/4)+(1/4)(1/4)=Aₙ/2+1/8. Thus Aₙ₊₁−1/4=(Aₙ−1/4)/2. Since A₁=1/2, the differences form a geometric sequence with first term 1/4 and ratio 1/2, giving Aₙ=1/4+2⁻ⁿ⁻¹.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 13(ii). Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics / Sequences and Series",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S124",
        "stepSource": {
          "year": 2018,
          "paper": "II",
          "part": "13(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"
        },
        "sourceGroup": "2018-2-13",
        "templateFamily": "2018-2-13"
      },
      {
        "n": 6,
        "stem": "How many distinct solutions does \\(4\\cos x\\cos2x\\cos3x=1\\) have in \\(0\\le x\\le\\pi\\)? You may use \\(2\\cos A\\cos B=\\cos(A+B)+\\cos(A-B)\\).",
        "opts": [
          "6",
          "8",
          "4",
          "5",
          "7"
        ],
        "correct": 0,
        "sol": "<p>Twice applying the supplied identity gives the left side as 1+cos2x+cos4x+cos6x. Therefore cos4x(2cos2x+1)=0. The first factor gives π/8,3π/8,5π/8,7π/8; the second gives π/3,2π/3. These are six different values, with neither endpoint a solution.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 1(i). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S074",
        "stepSource": {
          "year": 2021,
          "paper": "II",
          "part": "1(i)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"
        },
        "sourceGroup": "2021-2-1",
        "templateFamily": "2021-2-1"
      },
      {
        "n": 7,
        "stem": "For positive integer n, a polynomial is defined by \\[P(x)=1+\\sum_{r=0}^n\\binom{2n+1}{2r}x^{2n+1-2r}(x^2-1)^r.\\] What is the coefficient of x²ⁿ⁺¹?",
        "opts": [
          "\\(2^{2n+1}\\)",
          "\\(1\\)",
          "\\(2^n\\)",
          "\\((2n+1)2^{2n-1}\\)",
          "\\(2^{2n}-1\\)",
          "\\(2^{2n}\\)"
        ],
        "correct": 5,
        "sol": "<p>Each summand contributes its binomial coefficient to the leading term. Their sum is the sum of the even-indexed coefficients in (1+t)^(2n+1). Adding the evaluations at t=1 and t=-1 gives twice this sum: 2^(2n+1)+0. Hence the desired coefficient is 2^(2n). The separate constant 1 does not affect it.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 4(ii). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S053",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "4(ii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-4",
        "templateFamily": "2023-3-4"
      },
      {
        "n": 8,
        "stem": "The continuous function f(x)=eˣ(2x²−5x+2) has derivative eˣ(2x+2)(x−3/2). Its stationary values are f(−1)=9/e and f(3/2)=−e³ᐟ². Also f(x) tends to 0 from above as x tends to −∞ and tends to +∞ as x tends to +∞. How many distinct solutions does f(x)=k have when (i) k=0 and (ii) 0&lt;k&lt;9/e?",
        "opts": [
          "1 and 3",
          "2 and 2",
          "1 and 2",
          "2 and 3",
          "3 and 3"
        ],
        "correct": 3,
        "sol": "<p>The supplied derivative is positive on (−∞,−1), negative on (−1,3/2), and positive on (3/2,∞). For k=0 only the second and third intervals intersect the level, giving two roots (indeed 1/2 and 2). For 0&lt;k&lt;9/e all three intervals meet the level exactly once. The limiting value at −∞ is not an extra zero.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper I, question 1(i), root count. Catalogue: Supply.</a></p>",
        "topic": "Graphs",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S161",
        "stepSource": {
          "year": 2015,
          "paper": "I",
          "part": "1(i), root count",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf"
        },
        "sourceGroup": "2015-1-1",
        "templateFamily": "2015-1-1"
      },
      {
        "n": 9,
        "stem": "A polynomial P has degree N≥1, with P(1)=…=P(N)=1 and P(N+1)=2. What is P(N+2)+P(N+3)?",
        "opts": [
          "\\((N^2+5N+8)/2\\)",
          "\\((N^2+5N+4)/2\\)",
          "\\(2N+5\\)",
          "\\((N^2+3N+4)/2\\)",
          "\\((N+2)(N+3)/2\\)"
        ],
        "correct": 0,
        "sol": "<p>By the factor theorem P(x)−1=c(x−1)…(x−N). At x=N+1 the product is N!, so c=1/N!. Hence P(N+2)=1+(N+1)=N+2 and P(N+3)=1+(N+2)(N+1)/2. Adding yields (N²+5N+8)/2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S114",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-5",
        "templateFamily": "2018-1-5"
      },
      {
        "n": 10,
        "stem": "A drawer contains n pairs of socks, each pair a different colour. A set of 2k individual socks is chosen uniformly from all such sets, where 2k≤n. For 0≤r≤k, what is the probability that exactly r complete pairs occur among the chosen socks?",
        "opts": [
          "\\(\\dfrac{\\binom nr\\binom{n}{2k-2r}2^{2k-2r}}{\\binom{2n}{2k}}\\)",
          "\\(\\dfrac{\\binom nr\\binom{n-r}{2k-r}2^{2k-r}}{\\binom{2n}{2k}}\\)",
          "\\(\\dfrac{\\binom kr2^{2k-2r}}{\\binom{2n}{2k}}\\)",
          "\\(\\dfrac{\\binom nr\\binom{n-r}{2k-2r}}{\\binom{2n}{2k}}\\)",
          "\\(\\dfrac{\\binom nr\\binom{n-r}{2k-2r}2^{2k-2r}}{\\binom{2n}{2k}}\\)"
        ],
        "correct": 4,
        "sol": "<p>Choose the r colours appearing as complete pairs in C(n,r) ways. The remaining 2k−2r socks must have different colours, chosen from the n−r unused colours, giving C(n−r,2k−2r). For each such colour either individual sock may be selected, giving 2^(2k−2r) choices. Divide by the C(2n,2k) equally likely selections of individual socks. No selection is counted twice because its paired colours and singleton colours are uniquely determined.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 12(i) or (ii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S059",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "12(i) or (ii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-12",
        "templateFamily": "2023-3-12"
      },
      {
        "n": 11,
        "stem": "Let ⌊t⌋ denote the greatest integer not exceeding t. For −π≤x≤π, which set is exactly the set of solutions of \\(\\lfloor2\\sin x\\rfloor=2\\lfloor\\sin x\\rfloor\\)?",
        "opts": [
          "\\([-\\pi,0]\\cup\\{\\pi\\}\\)",
          "\\((-5\\pi/6,-\\pi/6)\\cup[0,\\pi/6)\\cup(5\\pi/6,\\pi]\\cup\\{-\\pi,\\pi/2\\}\\)",
          "\\([-5\\pi/6,-\\pi/6]\\cup[0,\\pi/6]\\cup[5\\pi/6,\\pi]\\)",
          "\\([0,\\pi]\\)",
          "\\([-5\\pi/6,-\\pi/6]\\cup[0,\\pi/6)\\cup(5\\pi/6,\\pi]\\cup\\{-\\pi,\\pi/2\\}\\)"
        ],
        "correct": 1,
        "sol": "<p>Put s=sin x. For −1≤s&lt;0 the right side is −2, so equality requires −1≤s&lt;−1/2. For 0≤s&lt;1 it requires 0≤s&lt;1/2; s=1 also works. Thus the negative interval has both endpoints excluded: (−5π/6,−π/6). The zero values −π,0,π and isolated maximum π/2 must also be included.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper I, question 3(iii)–(iv). Catalogue: Direct.</a></p>",
        "topic": "Trigonometry / Graphs",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S143",
        "stepSource": {
          "year": 2016,
          "paper": "I",
          "part": "3(iii)–(iv)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf"
        },
        "sourceGroup": "2016-1-3",
        "templateFamily": "floor-systems"
      },
      {
        "n": 12,
        "stem": "How many integer triples (a,b,c), with \\(|a|,|b|,|c|\\le100\\), satisfy \\(a^2+b^2=3c^2\\)?",
        "opts": [
          "201",
          "1",
          "3",
          "0",
          "9",
          "401"
        ],
        "correct": 1,
        "sol": "<p>A square leaves remainder 0 or 1 modulo 3. For a²+b² to be divisible by 3, both squares must leave remainder 0, so a and b are divisible by 3. Substituting a=3u,b=3v gives c²=3(u²+v²), hence c is divisible by 3 too. Division of all coordinates by 3 produces another solution. Infinite repetition excludes every nonzero integer triple. The zero triple is allowed and is the sole solution.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 2(iii). Catalogue: Direct.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S069",
        "stepSource": {
          "year": 2022,
          "paper": "III",
          "part": "2(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"
        },
        "sourceGroup": "2022-3-2",
        "templateFamily": "integer-descent"
      },
      {
        "n": 13,
        "stem": "Let k be any positive odd integer, and let S=1ᵏ+2ᵏ+⋯+20ᵏ. What is the largest positive integer guaranteed to divide S for every such k?",
        "opts": [
          "105",
          "420",
          "210",
          "20",
          "190"
        ],
        "correct": 2,
        "sol": "<p>Pair r with 20−r for r=1,…,9. Each paired sum is divisible by 20 because k is odd; the remaining 10ᵏ and 20ᵏ show that 10 divides S. Pair r with 21−r for r=1,…,10 to see that 21 divides S. Since 10 and 21 are coprime, 210 divides S. For k=1, S=210 itself, so no larger integer can divide every S.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper I, question 8(ii). Catalogue: Direct.</a></p>",
        "topic": "Number theory / Sequences and Series",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S165",
        "stepSource": {
          "year": 2015,
          "paper": "I",
          "part": "8(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf"
        },
        "sourceGroup": "2015-1-8",
        "templateFamily": "2015-1-8"
      },
      {
        "n": 14,
        "stem": "Which straight lines \\(y=mx+c\\) satisfy \\[\\frac{dy}{dx}=x^2+y^2-2xy-4x+4y+3\\] for every real x?",
        "opts": [
          "\\(y=x-1\\) and \\(y=x-3\\)",
          "\\(y=-x-2+\\sqrt2\\) and \\(y=-x-2-\\sqrt2\\)",
          "\\(y=-x-2\\) only",
          "\\(y=x+2+\\sqrt2\\) and \\(y=x+2-\\sqrt2\\)",
          "\\(y=x-2+\\sqrt2\\) and \\(y=x-2-\\sqrt2\\)"
        ],
        "correct": 4,
        "sol": "<p>Substitute y=mx+c and y′=m. The coefficient of x² on the right is (m−1)², which must be zero, giving m=1. The x coefficient then also vanishes. The constant equation is 1=c²+4c+3, or (c+2)²=2. Hence c=−2±√2. Only differentiation of a linear function and coefficient comparison are required.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 6(ii), straight-line solutions. Catalogue: Direct.</a></p>",
        "topic": "Differentiation / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S108",
        "stepSource": {
          "year": 2019,
          "paper": "II",
          "part": "6(ii), straight-line solutions",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"
        },
        "sourceGroup": "2019-2-6",
        "templateFamily": "2019-2-6"
      },
      {
        "n": 15,
        "stem": "For integer inputs, define \\(f(n)=n^3-3n^2+7n\\) and \\(g(n)=n^3+4n-6\\). Which set consists of exactly the integers attained by both functions? You may use \\(u^2+uv+v^2\\ge0\\) for all real u,v.",
        "opts": [
          "\\(\\{-6,5\\}\\)",
          "\\(\\{-11\\}\\)",
          "\\(\\{-11,10\\}\\)",
          "The empty set",
          "Infinitely many integers",
          "\\(\\{10\\}\\)"
        ],
        "correct": 2,
        "sol": "<p>Put u=m−1 and v=n. Then f(m)=u³+4u+5, so equality requires \\((v-u)(v^2+uv+u^2+4)=11\\). The second factor is an integer at least 4. As 11 is prime, the only possibility is v−u=1 and the second factor 11. Substituting v=u+1 gives 3u²+3u+5=11, hence u=1 or -2. The common outputs are 10 and -11. Both pairs are integral and satisfy the original equations.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 5(iv). Catalogue: Direct.</a></p>",
        "topic": "Number Theory / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 5,
        "selectionId": "S025",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "5(iv)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-5",
        "templateFamily": "2024-2-5"
      },
      {
        "n": 16,
        "stem": "The curves \\(x=y^2+2sy+s(s+1)\\) and \\(y=x^2\\) have real parameter s. You may use that every common point lies on \\((y-x+s)(y+x+s+1)=0\\). For which s do the curves have four distinct common points?",
        "opts": [
          "\\(s\\le-3/4\\)",
          "\\(-3/4&lt;s&lt;1/4\\)",
          "\\(s&lt;1/4\\)",
          "\\(s&gt;3/4\\)",
          "\\(s&lt;-3/4\\)",
          "\\(s&lt;-1\\)"
        ],
        "correct": 4,
        "sol": "<p>On the first line, substituting y=x² gives x²−x+s=0 with discriminant 1−4s. On the second it gives x²+x+s+1=0 with discriminant -3−4s. Both must be positive, requiring s&lt;-3/4. Conversely, under this condition each line gives two roots. A shared root of the two quadratics would be x=-1/2 and require s=-3/4, excluded here. Thus all four points are distinct. Substituting either factor with y=x² also satisfies the other original curve, so no extraneous points have been introduced.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 8(iii)–(iv). Catalogue: Supply.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S039",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "8(iii)–(iv)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-8",
        "templateFamily": "2024-3-8"
      },
      {
        "n": 17,
        "stem": "A depth D&gt;10 satisfies \\(\\frac15=\\sqrt{D/5}-\\sqrt{(D-10)/5}+\\frac1{30}\\). What is D?",
        "opts": [
          "26645/144",
          "26645/36",
          "185/6",
          "180",
          "5329/144"
        ],
        "correct": 0,
        "sol": "<p>Let T=√(D/5),U=√((D−10)/5). Then T−U=1/6 and T²−U²=2, giving T+U=12. Therefore T=(12+1/6)/2=73/12 and D=5T²=26645/144. Both square roots are positive and the computed D exceeds 10, so the original equation is satisfied.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper I, question 10, depth calculation. Catalogue: Supply.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S217",
        "stepSource": {
          "year": 2012,
          "paper": "I",
          "part": "10, depth calculation",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf"
        },
        "sourceGroup": "2012-1-10",
        "templateFamily": "2012-1-10"
      },
      {
        "n": 18,
        "stem": "For n≥1 define \\(f_n(x)=\\sum_{j=0}^nx^j/j!\\). You may use that every real root a is negative and \\(f_n\\prime(a)=-a^n/n!\\); also, a polynomial whose derivatives at all its real roots are nonzero and have the same sign has at most one real root. How many distinct real roots do f₂₀₂₆ and f₂₀₂₇ have, respectively?",
        "opts": [
          "2 and 1",
          "1 and 1",
          "0 and 1",
          "2 and 3",
          "0 and 0"
        ],
        "correct": 2,
        "sol": "<p>At a negative root the derivative has fixed sign for each n, so there is at most one. An odd-degree polynomial with positive leading coefficient changes from negative to positive between the two infinities and therefore has a root. For even n both tails are positive; a single root with nonzero derivative would change the sign and force a second root to restore it. Thus an even n has none, and an odd n exactly one.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper II, question 3(iii), root count. Catalogue: Supply.</a></p>",
        "topic": "Graphs / Differentiation",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S151",
        "stepSource": {
          "year": 2016,
          "paper": "II",
          "part": "3(iii), root count",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf"
        },
        "sourceGroup": "2016-2-3",
        "templateFamily": "2016-2-3"
      },
      {
        "n": 19,
        "stem": "How many ordered pairs of primes (p,q) make \\(p^3+q^3+3pq^2\\) an integer cube? You may use that, if it equals n³, then \\(d=p+q-n\\) satisfies \\(0&lt;d&lt;\\min(p,q)\\). You may also use that an integer cube has the same remainder as its base on division by 3.",
        "opts": [
          "3",
          "4",
          "Infinitely many",
          "1",
          "2",
          "0"
        ],
        "correct": 5,
        "sol": "<p>Reducing modulo 3 gives n≡p+q, so 3 divides d. Also \\((p+q)^3-n^3=3p^2q\\), so d divides 3p²q. Because d is smaller than both primes, the only possible value divisible by 3 is d=3, with p,q&gt;3. Substituting n=p+q−3 and expanding gives \\(p^2q=3[(p+q)^2-3(p+q)+3]\\). Thus 3 divides p²q, forcing one prime to be 3, a contradiction. If either prime is 2 or 3, the original bound on d already contradicts positive divisibility by 3.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 5(iii). Catalogue: Supply.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 7.5,
        "estimatedMinutes": 5,
        "selectionId": "S057",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "5(iii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-5",
        "templateFamily": "2023-3-5"
      },
      {
        "n": 20,
        "stem": "For x≠0,1 let \\(f(x)=(x^2-x+1)^3/(x^2-x)^2\\). You may use f(x)=f(1−x)=f(1/x). Which is the complete real solution set of f(x)=343/36?",
        "opts": [
          "{−2,3}",
          "{−2,−1/2,1/3,2/3,3/2,3}",
          "{−1,1/2,2}",
          "{−3,−2,−1/2,1/2,2,3}",
          "{−2,1/3,2/3,3}"
        ],
        "correct": 1,
        "sol": "<p>Direct substitution gives f(3)=7³/6²=343/36. Applying x↦1−x and x↦1/x generates 3,−2,1/3,−1/2,2/3,3/2. All six are distinct and admissible. Clearing the nonzero denominator gives the degree-six polynomial equation 36(x²−x+1)³−343(x²−x)²=0, which has at most six distinct real roots. Thus the list is complete.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper II, question 5(iii). Catalogue: Supply.</a></p>",
        "topic": "Functions / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S208",
        "stepSource": {
          "year": 2013,
          "paper": "II",
          "part": "5(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf"
        },
        "sourceGroup": "2013-2-5",
        "templateFamily": "2013-2-5"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice02p1v2",
    "title": "STEP practice · Year 02 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "Which pair of lines together forms the entire locus \\(x^2+y^2+(10/3)xy+3x+y=0\\)?",
        "opts": [
          "x+3y=0 and 3x+y+3=0",
          "3x+y+3=0 and x+3y+3=0",
          "3x+y=0 and x+3y+3=0",
          "x+y=0 and 3x+3y+3=0",
          "3x+y=0 and x+3y−3=0"
        ],
        "correct": 2,
        "sol": "<p>Multiply by 3 to get 3x²+10xy+3y²+9x+3y. This factors as (3x+y)(x+3y+3). A product of real numbers is zero exactly when at least one factor is zero, so the locus is precisely the union of the stated lines.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "Coordinate geometry / General algebra",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.0,
        "selectionId": "S202",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-5",
        "templateFamily": "2013-1-5"
      },
      {
        "n": 2,
        "stem": "Let S=∑ from r=1 to ∞ of 1/r³. You may use that each block with 2ⁿ≤r&lt;2ⁿ⁺¹ has sum at most 4⁻ⁿ. Keep r=1,2,3 exactly and apply this bound to every remaining block. Which upper bound for S results?",
        "opts": [
          "259/216",
          "251/216",
          "49/36",
          "269/216",
          "4/3"
        ],
        "correct": 3,
        "sol": "<p>The exact first terms sum to 1+1/8+1/27=251/216. The remaining blocks start at n=2 and have total bounded by ∑ₙ₌₂∞4⁻ⁿ=(1/16)/(1−1/4)=1/12=18/216. The resulting upper bound is 269/216. Starting at n=1 would count the second and third terms again.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper III, question 8(ii). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Inequalities",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S196",
        "stepSource": {
          "year": 2014,
          "paper": "III",
          "part": "8(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf"
        },
        "sourceGroup": "2014-3-8",
        "templateFamily": "convergence-estimate"
      },
      {
        "n": 3,
        "stem": "You may use \\((x^3+1)/(x+1)=(x+1)^2-3x\\) for x≠−1. The integer \\(N=(300^3+1)/301\\) is written as a product of two positive integers whose difference is 60. What is the smaller factor?",
        "opts": [
          "299",
          "271",
          "301",
          "331",
          "269"
        ],
        "correct": 1,
        "sol": "<p>The identity gives N=301²−900=301²−30²=(301−30)(301+30)=271·331. Their difference is 60. If the smaller factor is k then k(k+60)=N; this is strictly increasing for positive k, so the factor pair is unique.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper I, question 1(ii)(a). Catalogue: Supply.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 2.5,
        "selectionId": "S142",
        "stepSource": {
          "year": 2016,
          "paper": "I",
          "part": "1(ii)(a)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf"
        },
        "sourceGroup": "2016-1-1",
        "templateFamily": "2016-1-1"
      },
      {
        "n": 4,
        "stem": "For a positive function f define \\(G(y)=\\exp\\bigl(y^{-1}\\int_0^y\\ln f(x)\\,dx\\bigr)\\), where y&gt;0. If \\(f(x)=2^x3^{2x+1}\\), what is G(y)?",
        "opts": [
          "\\(3\\cdot18^{y/2}\\)",
          "\\(3\\cdot18^y\\)",
          "\\(6^{y/2}\\)",
          "\\(18^{y/2}\\)",
          "\\(3^{y+1}2^y\\)"
        ],
        "correct": 0,
        "sol": "<p>Logarithm laws give ln f(x)=x ln2+(2x+1)ln3=x ln18+ln3. Polynomial integration gives y²ln18/2+y ln3. Divide by y, then exponentiate: G(y)=exp((y/2)ln18+ln3)=3·18^(y/2). No integration of an exponential or logarithmic function is needed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper III, question 4(ii)–(iii). Catalogue: Direct.</a></p>",
        "topic": "Exponentials and Logarithms / Integration",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S139",
        "stepSource": {
          "year": 2017,
          "paper": "III",
          "part": "4(ii)–(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf"
        },
        "sourceGroup": "2017-3-4",
        "templateFamily": "2017-3-4"
      },
      {
        "n": 5,
        "stem": "Let u₀=0,u₁=1 and uₙ=uₙ₋₁+uₙ₋₂ for n≥2. Define \\(F(x)=\\sum_{n=0}^{\\infty}u_nx^n\\). For sufficiently small |x|, terms may be collected and the convergent series may be added or multiplied by x. Which expression equals F(x)?",
        "opts": [
          "\\(1/(1-x-x^2)\\)",
          "\\(x/(1-x+x^2)\\)",
          "\\(x/(1-x-x^2)\\)",
          "\\(x^2/(1-x-x^2)\\)",
          "\\(x/(1-x)^2\\)"
        ],
        "correct": 2,
        "sol": "<p>The recurrence gives F−x=∑ from n=2 of (uₙ₋₁+uₙ₋₂)xⁿ=xF+x²F, because u₀=0. Collecting F terms yields F(1−x−x²)=x. The nonzero initial term is x, not 1 or x².</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper I, question 8(ii)(b). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S147",
        "stepSource": {
          "year": 2016,
          "paper": "I",
          "part": "8(ii)(b)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf"
        },
        "sourceGroup": "2016-1-8",
        "templateFamily": "2016-1-8"
      },
      {
        "n": 6,
        "stem": "Let \\(f(x)=a+x+\\sqrt{x^2+b}\\), where b&gt;0 and a is real. We require f(x)≥0 and \\(\\int_{-t}^{t}1/(1+f(x))\\,dx=t\\) for every t≥0. You may use that this integral condition is equivalent to \\(f(x)f(-x)=1\\) for every x. Which (a,b) works?",
        "opts": [
          "(−1,1)",
          "(1,2)",
          "(0,2)",
          "(1,0)",
          "(0,1)",
          "(1,1)"
        ],
        "correct": 4,
        "sol": "<p>The product is \\((a+\\sqrt{x^2+b})^2-x^2=a^2+b+2a\\sqrt{x^2+b}\\). To remain the constant 1 as x varies, a must be zero, then b=1. With these values √(x²+1)&gt;|x|, so f(x)&gt;0 for every real x. Thus both the nonnegativity condition and the supplied product criterion hold.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 5(ii). Catalogue: Supply.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S072",
        "stepSource": {
          "year": 2022,
          "paper": "III",
          "part": "5(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"
        },
        "sourceGroup": "2022-3-5",
        "templateFamily": "symmetric-integral"
      },
      {
        "n": 7,
        "stem": "Consider \\(a^4+b^4=26a^2b^2\\). Let Nₘ be the number of ordered residue pairs (a mod m,b mod m) satisfying this congruence, with each residue in {0,…,m−1}. What is (N₃,N₅)?",
        "opts": [
          "(5,5)",
          "(5,1)",
          "(1,5)",
          "(1,1)",
          "(4,1)"
        ],
        "correct": 1,
        "sol": "<p>Modulo 3, (0,0) works; a pair with exactly one zero fails. Every pair with neither zero works, since both sides are 2 modulo 3. Thus N₃=1+4=5. Modulo 5, each nonzero fourth power is 1. If both residues are nonzero, the left side is 2 while 26a²b² has residue 1 or 4, impossible. Exactly one zero also fails. Only (0,0) works, giving N₅=1.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 7(ii), divisibility issue. Catalogue: Supply.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S101",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "7(ii), divisibility issue",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-7",
        "templateFamily": "2019-1-7"
      },
      {
        "n": 8,
        "stem": "You may use \\[\\frac1{\\binom{n+r}{r+1}}=\\frac{r+1}{r}\\left(\\frac1{\\binom{n+r-1}{r}}-\\frac1{\\binom{n+r}{r}}\\right).\\] What is \\(\\sum_{n=1}^{10}1/\\binom{n+3}{4}\\)?",
        "opts": [
          "380/143",
          "190/143",
          "4/3",
          "95/72",
          "285/286"
        ],
        "correct": 1,
        "sol": "<p>Set r=3. Consecutive reciprocal binomial terms cancel, leaving (4/3)[1/C(3,3)−1/C(13,3)]. Since C(13,3)=13·12·11/6=286, the result is (4/3)(285/286)=190/143. The finite upper limit means the final term cannot be discarded.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper III, question 1(i), telescoping sum. Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S138",
        "stepSource": {
          "year": 2017,
          "paper": "III",
          "part": "1(i), telescoping sum",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf"
        },
        "sourceGroup": "2017-3-1",
        "templateFamily": "2017-3-1"
      },
      {
        "n": 9,
        "stem": "Let u₁=1, \\(u_{2k}=u_k\\), and \\(u_{2k+1}=u_k+u_{k+1}\\) for k≥1. What is the greatest common divisor of u₂₀₂₀ and u₂₀₂₁?",
        "opts": [
          "3",
          "2",
          "5",
          "7",
          "1"
        ],
        "correct": 4,
        "sol": "<p>For an even index, gcd(u₂ₖ,u₂ₖ₊₁)=gcd(uₖ,uₖ+uₖ₊₁)=gcd(uₖ,uₖ₊₁). For an odd index, gcd(u₂ₖ₊₁,u₂ₖ₊₂)=gcd(uₖ+uₖ₊₁,uₖ₊₁), with the same reduction. Repeating reduces any consecutive pair to (u₁,u₂)=(1,1). Therefore the requested greatest common divisor is 1, without needing to evaluate the large-index terms.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 8(ii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / Number Theory",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S091",
        "stepSource": {
          "year": 2020,
          "paper": "III",
          "part": "8(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"
        },
        "sourceGroup": "2020-3-8",
        "templateFamily": "2020-3-8"
      },
      {
        "n": 10,
        "stem": "Real x,y,a satisfy \\[ay^3+2x^2y+3x=1,\\qquad4xy+3=0,\\qquad3ay^2+2x^2=0.\\] What is a?",
        "opts": [
          "\\(-27/2\\)",
          "\\(-2/9\\)",
          "\\(-1/9\\)",
          "\\(-2/27\\)",
          "\\(-1/27\\)",
          "\\(2/27\\)"
        ],
        "correct": 3,
        "sol": "<p>The middle equation ensures x and y are nonzero and gives 2x²y=-3x/2. Multiplying the third by y gives ay³=−2x²y/3=x/2. Substitute both into the first: x/2−3x/2+3x=1, hence x=1/2. Then y=-3/2. Finally 3a·9/4+2·1/4=0, giving a=-2/27. This substitution also verifies existence, not merely a necessary coefficient relation.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 3(iii). Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S071",
        "stepSource": {
          "year": 2022,
          "paper": "III",
          "part": "3(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"
        },
        "sourceGroup": "2022-3-3",
        "templateFamily": "2022-3-3"
      },
      {
        "n": 11,
        "stem": "For n≥1, \\(w_{n+1}=(w_{n+2}+w_n)/2-an-b\\), where a≠0 and w₁=w₂=0. You are given that wₙ is a cubic polynomial in n. Which expression is wₙ?",
        "opts": [
          "\\((n-1)(n-2)(a(n-1)/3+b)\\)",
          "\\((n-1)(n-2)(an+b)\\)",
          "\\(n(n-1)(an/3+b)\\)",
          "\\((n-1)(n-2)(an/3+b)\\)",
          "\\((n-1)(n-2)(an/3+b/2)\\)"
        ],
        "correct": 3,
        "sol": "<p>The zeros at 1 and 2 imply wₙ=(n−1)(n−2)(An+B). Its forward second difference is 6An+2B, as direct expansion verifies. The recurrence requires this to equal 2an+2b for every n. Hence A=a/3 and B=b, giving the formula. Since a≠0 the leading coefficient is nonzero.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 2(iii). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S061",
        "stepSource": {
          "year": 2022,
          "paper": "II",
          "part": "2(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"
        },
        "sourceGroup": "2022-2-2",
        "templateFamily": "2022-2-2"
      },
      {
        "n": 12,
        "stem": "Positive real numbers b&lt;c&lt;a satisfy \\(2(a^{-2}+b^{-2}+c^{-2})=(a^{-1}+b^{-1}+c^{-1})^2\\). Which relation must hold?",
        "opts": [
          "\\(c^{-1/2}=a^{-1/2}+b^{-1/2}\\)",
          "\\(b^{-1/2}=c^{-1/2}-a^{-1/2}\\)",
          "\\(b^{-1/2}=a^{-1/2}+c^{-1/2}\\)",
          "\\(a^{-1/2}=b^{-1/2}+c^{-1/2}\\)",
          "\\(b^{-1}=a^{-1}+c^{-1}\\)"
        ],
        "correct": 2,
        "sol": "<p>Put A=1/√a,B=1/√b,C=1/√c, so 0&lt;A&lt;C&lt;B. The equation becomes (B²−A²−C²)²=4A²C². Hence B²=(A+C)² or (A−C)². Positivity gives B=A+C or B=C−A; the latter contradicts B&gt;C. Thus B=A+C.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper I, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S145",
        "stepSource": {
          "year": 2016,
          "paper": "I",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf"
        },
        "sourceGroup": "2016-1-5",
        "templateFamily": "2016-1-5"
      },
      {
        "n": 13,
        "stem": "A coin has head probability p, where 0&lt;p&lt;1 and p≠1/2. Let S be the length of the initial run of identical outcomes, and A the length of the initial alternating run. Which comparison is correct?",
        "opts": [
          "P(S=2)=P(A=2) and P(S=3)&lt;P(A=3)",
          "P(S=2)&lt;P(A=2) and P(S=3)&gt;P(A=3)",
          "P(S=2)&gt;P(A=2) and P(S=3)&gt;P(A=3)",
          "Both corresponding probabilities are equal",
          "P(S=2)=P(A=2) and P(S=3)&gt;P(A=3)"
        ],
        "correct": 3,
        "sol": "<p>Put q=1−p. S=2 occurs for HHT or TTH, so its probability is p²q+q²p=pq. A=2 occurs for HTT or THH and has the same probability. S=3 has probability p³q+q³p=pq(p²+q²), while A=3 has probability p³q+q³p as well: HTHH or THTT. Therefore the length-three probabilities also agree.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper II, question 13(ii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S210",
        "stepSource": {
          "year": 2013,
          "paper": "II",
          "part": "13(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf"
        },
        "sourceGroup": "2013-2-13",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 14,
        "stem": "Let α be the positive cube root of 2. If α were rational, there would be a least positive integer k such that both kα and kα² are integers. Set m=k(α−1). Which ordered pair equals (mα,mα²), thereby showing m has the same integer property as k?",
        "opts": [
          "\\((k\\alpha^2-k,\\ 2k-k\\alpha)\\)",
          "\\((2k-k\\alpha,\\ 2k-k\\alpha^2)\\)",
          "\\((k\\alpha^2-k\\alpha,\\ k-k\\alpha^2)\\)",
          "\\((k\\alpha-k,\\ 2k-k\\alpha^2)\\)",
          "\\((k\\alpha^2-k\\alpha,\\ 2k-k\\alpha^2)\\)"
        ],
        "correct": 4,
        "sol": "<p>Multiply m=kα−k first by α and then by α². Using α³=2 gives mα=kα²−kα and mα²=2k−kα², both integers under the assumption. Moreover m is an integer and 0&lt;m&lt;k because 1&lt;α&lt;2. This yields the descent contradiction. If α² were rational then α=2/α² would be rational, so the same contradiction rules that out as well.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper III, question 5(ii). Catalogue: Supply.</a></p>",
        "topic": "Number theory / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S177",
        "stepSource": {
          "year": 2015,
          "paper": "III",
          "part": "5(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf"
        },
        "sourceGroup": "2015-3-5",
        "templateFamily": "integer-descent"
      },
      {
        "n": 15,
        "stem": "A monic quartic S with integer coefficients takes the value 2001 at four distinct integers. Which value can it never take at an integer?",
        "opts": [
          "2001",
          "2025",
          "2018",
          "2017",
          "2010"
        ],
        "correct": 2,
        "sol": "<p>If the four integers are a,b,c,d, then S(e)−2001=(e−a)(e−b)(e−c)(e−d), a product of four distinct integers. A product of 17 cannot occur: its absolute factors must be 17,1,1,1, but only two distinct integers have absolute value 1. The other differences are possible: 9=(−3)(−1)(1)(3), 16=(−4)(−2)(1)(2), and 24=1·2·3·4. Difference zero occurs at a root of S−2001. Thus 2018 alone is impossible.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 5(iii)(a). Catalogue: Direct.</a></p>",
        "topic": "Number Theory / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S115",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "5(iii)(a)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-5",
        "templateFamily": "2018-1-5"
      },
      {
        "n": 16,
        "stem": "Define \\(T(x)=(3x-x^3)/(1-3x^2)\\) wherever its denominator is nonzero. How many real x satisfy \\(T(T(T(x)))=x\\), with all three evaluations defined? You may use \\(T(\\tan\\theta)=\\tan(3\\theta)\\) wherever both sides are defined.",
        "opts": [
          "13",
          "52",
          "27",
          "26",
          "24",
          "25"
        ],
        "correct": 5,
        "sol": "<p>Use x=tan θ with -π/2&lt;θ&lt;π/2. Equality requires 26θ=kπ, giving k=-12,…,12, hence 25 candidates. A forbidden pole during iteration would require 3^j kπ/26 to be an odd multiple of π/2 for j=1,2,3. This would give an even integer 2·3^j k equal to 26 times an odd integer, equivalently 3^j k=13 times an odd integer. In the stated range the only multiple of 13 is zero, which cannot be odd. Thus no candidate is lost. Each finite x has one θ in the chosen interval.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 2(ii). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry / Sequences and Series",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S041",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "2(ii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-2",
        "templateFamily": "trig-iteration"
      },
      {
        "n": 17,
        "stem": "Let \\(f(x)=7-2|x|\\). You are given that the graph of \\(y=f(f(f(x)))\\) consists of eight straight-line pieces, none of gradient 1. The starting values 1 and -7/9 each generate a cycle of length three under f. What is the sum of all distinct real solutions of \\(f(f(f(x)))=x\\)?",
        "opts": [
          "\\(34/9\\)",
          "\\(-8/9\\)",
          "\\(7/9\\)",
          "\\(8/9\\)",
          "\\(0\\)",
          "\\(-14/3\\)"
        ],
        "correct": 1,
        "sol": "<p>The cycles are 1→5→-3→1 and -7/9→49/9→-35/9→-7/9. Also f has the two fixed points -7 and 7/3. These eight distinct numbers all satisfy f³(x)=x. Each straight piece can meet y=x at most once, so there are no further solutions. Their sum is \\((1+5-3)+(-7+49-35)/9-7+7/3=-8/9\\).</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 2(ii)(b). Catalogue: Direct.</a></p>",
        "topic": "Functions and Graphs / Sequences and Series",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S013",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "2(ii)(b)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-2",
        "templateFamily": "2025-3-2"
      },
      {
        "n": 18,
        "stem": "For real \\(a,b\\), \\(\\min(a,b)\\) is their smaller value. Find all real \\(x\\) satisfying \\[\\min(x^2,2x)+\\min(x^3,4x)=2x.\\]",
        "opts": [
          "\\(\\{0,1\\}\\)",
          "\\(\\{-2,1\\}\\)",
          "\\(\\{-1,0,1\\}\\)",
          "\\(\\{-2,0,1,2\\}\\)",
          "\\(\\{-2,-1,0,1\\}\\)",
          "\\(\\{-2,0,1\\}\\)"
        ],
        "correct": 0,
        "sol": "<p>The first minimum switches at 0 and 2; the second at -2, 0 and 2. For x&lt;-2 the equation becomes \\(2x+x^3=2x\\), with no root there. For -2≤x≤0 it becomes \\(6x=2x\\), giving 0, except at -2: direct substitution gives -12 versus -4, so -2 is not a root. For 0≤x≤2, \\(x^2+x^3=2x\\), giving \\(x(x+2)(x-1)=0\\), hence 0 and 1. For x≥2 the equation is \\(6x=2x\\), with no root. Thus the complete set is {0,1}.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 1(iii), either value of m. Catalogue: Direct.</a></p>",
        "topic": "General algebra / Functions and Graphs",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S002",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "1(iii), either value of m",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-1",
        "templateFamily": "modulus-piecewise"
      },
      {
        "n": 19,
        "stem": "Two circles have centres (−3,0),(3,0) and radii 1,2 respectively. A circle of radius r meets each of them at the endpoints of one of its diameters. You may use that its centre has x-coordinate 1/4. What is the least possible r?",
        "opts": [
          "\\(\\sqrt{185}/4\\)",
          "\\(13/4\\)",
          "\\(\\sqrt{37}/2\\)",
          "\\(7/2\\)",
          "\\(\\sqrt{153}/4\\)"
        ],
        "correct": 0,
        "sol": "<p>Write its centre as (1/4,h). If it cuts a diameter of the circle centred at (−3,0), Pythagoras gives r²=distance² to that centre+1²=(13/4)²+h²+1=185/16+h². The other circle gives r²=(11/4)²+h²+4, the same expression. Thus the minimum is √185/4, attained at h=0. The centre distances are nonzero, so the intersections are two distinct diameter endpoints in each case.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper II, question 7(ii). Catalogue: Supply.</a></p>",
        "topic": "Coordinate geometry",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S171",
        "stepSource": {
          "year": 2015,
          "paper": "II",
          "part": "7(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf"
        },
        "sourceGroup": "2015-2-7",
        "templateFamily": "2015-2-7"
      },
      {
        "n": 20,
        "stem": "A sequence satisfies \\(u_{n+1}=u_n^2-pu_n+p\\), where p is real. For which p can a real starting value give a nonconstant sequence of period two?",
        "opts": [
          "−1&lt;p&lt;3",
          "p&lt;1 or p&gt;3",
          "p≠1",
          "p≤−1 or p≥3",
          "p&lt;−1 or p&gt;3"
        ],
        "correct": 4,
        "sol": "<p>Write f(x)=x²−px+p. Expansion and factorisation gives f(f(x))−x=(x−1)(x−p)[x²+(1−p)x+1]. The first two factors give fixed points, which must be excluded. The last quadratic has two distinct real roots exactly when (p−1)²−4=(p−3)(p+1)&gt;0. Its roots coincide with fixed points only at boundary values p=−1 or 3, where it has a repeated root. Thus precisely p&lt;−1 or p&gt;3 gives a nonconstant two-cycle.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 5(i), period two. Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S106",
        "stepSource": {
          "year": 2019,
          "paper": "II",
          "part": "5(i), period two",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"
        },
        "sourceGroup": "2019-2-5",
        "templateFamily": "two-cycle"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice03p1v2",
    "title": "STEP practice · Year 03 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "What is the product of all real roots of \\(|x-1|+2|x+2|=9\\)?",
        "opts": [
          "−12",
          "−4",
          "8",
          "−8",
          "4"
        ],
        "correct": 3,
        "sol": "<p>Split at −2 and 1. For x&lt;−2 the equation is −3x−3=9, giving −4. For −2≤x≤1 it is x+5=9, giving 4 outside that interval. For x&gt;1 it is 3x+3=9, giving 2. The endpoints do not solve it, so the product is (−4)·2=−8.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Functions and Graphs",
        "estimatedDifficulty": 4.5,
        "estimatedMinutes": 2.5,
        "selectionId": "O004",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O004",
        "templateFamily": "O004"
      },
      {
        "n": 2,
        "stem": "Let \\(P(x)=(1+x)(1+x^2)(1+x^4)\\cdots(1+x^{1024})\\). What is the coefficient of x²⁰²⁶ in (1−x³)P(x)?",
        "opts": [
          "0",
          "1",
          "2",
          "2026",
          "−1"
        ],
        "correct": 0,
        "sol": "<p>Repeated difference-of-squares gives (1−x)P(x)=1−x²⁰⁴⁸, hence P(x)=1+x+⋯+x²⁰⁴⁷. The coefficient in (1−x³)P is the coefficient of x²⁰²⁶ in P minus that of x²⁰²³, both 1. Their difference is zero.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper III, question 2(i), finite product. Catalogue: Direct.</a></p>",
        "topic": "Polynomials / Sequences and Series",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S225",
        "stepSource": {
          "year": 2012,
          "paper": "III",
          "part": "2(i), finite product",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf"
        },
        "sourceGroup": "2012-3-2",
        "templateFamily": "2012-3-2"
      },
      {
        "n": 3,
        "stem": "For what real values of b does x⁴−6x²+b=0 have exactly two distinct real roots?",
        "opts": [
          "b≥9",
          "0&lt;b&lt;9",
          "b≤0",
          "b=0 or b=9",
          "b&lt;0 or b=9"
        ],
        "correct": 4,
        "sol": "<p>Put u=x²≥0, giving (u−3)²=9−b. If b&gt;9 there are no roots; if b=9 the positive root u=3 gives two x values. If 0&lt;b&lt;9 there are two positive u values and four x values. At b=0, u=0 and 6 give three. If b&lt;0 exactly one u root is positive, giving two x values. Therefore b&lt;0 or b=9.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper I, question 2(i). Catalogue: Direct.</a></p>",
        "topic": "Graphs / General algebra",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S213",
        "stepSource": {
          "year": 2012,
          "paper": "I",
          "part": "2(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf"
        },
        "sourceGroup": "2012-1-2",
        "templateFamily": "2012-1-2"
      },
      {
        "n": 4,
        "stem": "Let \\(\\lfloor t\\rfloor\\) and \\(\\{t\\}=t-\\lfloor t\\rfloor\\) denote the integer and fractional parts. Suppose \\[x+2\\lfloor y\\rfloor+\\{z\\}=3.9,\\quad\\{x\\}+2y+\\lfloor z\\rfloor=5.3,\\quad\\lfloor x\\rfloor+2\\{y\\}+z=5.\\] Which list contains every possible pair (y,z)?",
        "opts": [
          "(1.2,3.8) only",
          "(1.1,3.8) only",
          "(1.6,2.8) and (1.1,3.8)",
          "(2.6,1.8) and (2.1,2.8)",
          "(1.6,2.8) only"
        ],
        "correct": 2,
        "sol": "<p>Half the sum is x+2y+z=7.1. Subtracting each equation in turn gives ⌊z⌋+2{y}=3.2, ⌊x⌋+{z}=1.8 and 2⌊y⌋+{x}=2.1. The last two force ⌊x⌋=1,{z}=0.8,⌊y⌋=1,{x}=0.1. Since 0≤2{y}&lt;2, the first allows ⌊z⌋=2 or 3, giving {y}=0.6 or 0.1 respectively. Both pairs satisfy all three equations.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 3(iii). Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S076",
        "stepSource": {
          "year": 2021,
          "paper": "II",
          "part": "3(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"
        },
        "sourceGroup": "2021-2-3",
        "templateFamily": "floor-systems"
      },
      {
        "n": 5,
        "stem": "How many ordered pairs of coprime positive integers (a,b) satisfy \\(a^4+b^4=10a^2b^2\\)?",
        "opts": [
          "1",
          "2",
          "4",
          "Infinitely many",
          "0"
        ],
        "correct": 4,
        "sol": "<p>Modulo 3, a square is 0 or 1 and a fourth power has the same residue. If exactly one of a,b is divisible by 3, the two sides have residues 1 and 0. If neither is divisible by 3, the residues are 2 and 1. Thus both must be divisible by 3, contradicting coprimality. There are no such pairs.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 7(i). Catalogue: Direct.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S100",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "7(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-7",
        "templateFamily": "integer-descent"
      },
      {
        "n": 6,
        "stem": "Alice tosses a fair coin n times and Bob independently tosses a fair coin n+1 times, where n is a positive integer. What is the probability that Bob obtains strictly more heads than Alice?",
        "opts": [
          "\\((n+1)/(2n+1)\\)",
          "\\(1/2+1/2^{n+1}\\)",
          "\\(1/2-\\binom{2n}{n}/2^{2n+1}\\)",
          "It depends on n and none of these formulas always applies",
          "1/2"
        ],
        "correct": 4,
        "sol": "<p>Let p be the probability of a tie between Alice and Bob’s first n tosses. By symmetry Bob’s first n tosses beat Alice with probability (1−p)/2. His extra toss changes a non-win into a win exactly when they were tied and it is a head, probability p/2. The total is 1/2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper I, question 12(ii) or (iii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.0,
        "selectionId": "S148",
        "stepSource": {
          "year": 2016,
          "paper": "I",
          "part": "12(ii) or (iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf"
        },
        "sourceGroup": "2016-1-12",
        "templateFamily": "2016-1-12"
      },
      {
        "n": 7,
        "stem": "The sets \\(A=\\{1,4,6,7\\}\\) and \\(B=\\{2,3,5,8\\}\\) have equal sizes, equal sums and equal sums of squares. If two such sets are shifted by the same constant, expansion of \\((x+c)^3\\) shows that their difference of cube sums is unchanged. Which set C has the same sum, square sum and cube sum as its complement in \\(\\{1,\\ldots,16\\}\\)?",
        "opts": [
          "\\(\\{1,3,5,7,10,12,14,16\\}\\)",
          "\\(\\{1,4,6,7,10,11,13,16\\}\\)",
          "\\(\\{1,4,6,7,9,12,14,15\\}\\)",
          "\\(\\{1,4,6,8,10,11,13,15\\}\\)",
          "\\(\\{1,2,3,4,13,14,15,16\\}\\)"
        ],
        "correct": 1,
        "sol": "<p>Take C=A∪(8+B) and its complement D=B∪(8+A). Equal sizes, sums and square sums ensure equality of the first two power sums after this construction. The cube-sum difference is [sum A³−sum B³]+[sum(8+B)³−sum(8+A)³]=0 by the supplied shift result. Thus C is {1,4,6,7,10,11,13,16}. The construction preserves all three required equalities.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 8(iii). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S009",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "8(iii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-8",
        "templateFamily": "2025-2-8"
      },
      {
        "n": 8,
        "stem": "M₄ and T₄ approximate \\(\\int_0^\\pi\\sin x\\,dx\\), using respectively four equal-width midpoint rectangles and four equal-width trapezia. You may use \\(\\sum_{r=1}^n\\sin((2r-1)t)=(1-\\cos2nt)/(2\\sin t)\\) , \\(\\sin2t=2\\sin t\\cos t\\), and \\(\\cos2t=2\\cos^2t-1\\). What is M₄/T₄?",
        "opts": [
          "\\(2\\cos(\\pi/8)\\)",
          "\\(\\cos(\\pi/8)\\)",
          "\\(1/\\cos(\\pi/4)\\)",
          "\\(1/\\cos(\\pi/8)\\)",
          "\\(1\\)"
        ],
        "correct": 3,
        "sol": "<p>The midpoint formula gives M₄=(π/4)[1/sin(π/8)]. The trapezium rule, whose endpoint contributions vanish, gives T₄=(π/4)(sin(π/4)+1+sin(3π/4))=(π/4)(1+√2). From sin(π/4)=2sin(π/8)cos(π/8) and the usual half-angle relation, (1+√2)sin(π/8)=cos(π/8). Therefore M₄/T₄=1/cos(π/8). Alternatively, the same result follows by pairing adjacent midpoint and endpoint sines with the supplied sum identity.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 6(i) or (ii). Catalogue: Supply.</a></p>",
        "topic": "Integration / Trigonometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S117",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "6(i) or (ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-6",
        "templateFamily": "2018-1-6"
      },
      {
        "n": 9,
        "stem": "An acute triangle has side lengths 5,6,7 and area \\(6\\sqrt6\\). A point inside or on it has perpendicular distances x,y,z to those sides. What is the minimum of x²+y²+z²? You may use \\[(a^2+b^2+c^2)(x^2+y^2+z^2)=(ax+by+cz)^2+(bx-ay)^2+(cy-bz)^2+(az-cx)^2.\\]",
        "opts": [
          "\\(216/49\\)",
          "\\(432/55\\)",
          "\\(432/49\\)",
          "\\(216/55\\)",
          "\\(864/49\\)",
          "\\(72/5\\)"
        ],
        "correct": 1,
        "sol": "<p>Area decomposition gives 5x+6y+7z=12√6. The identity therefore bounds x²+y²+z² below by (12√6)²/(25+36+49)=864/110=432/55. Equality requires x:y:z=5:6:7. Such a point is inside the triangle: choose its three subtriangle areas in ratios 25:36:49, all positive and summing to the total; their altitudes then have the required ratios. Hence the bound is attainable.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 5(iii)(b). Catalogue: Supply.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S066",
        "stepSource": {
          "year": 2022,
          "paper": "II",
          "part": "5(iii)(b)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"
        },
        "sourceGroup": "2022-2-5",
        "templateFamily": "2022-2-5"
      },
      {
        "n": 10,
        "stem": "Let a&gt;0. The distinct real roots q,r of \\(z^2+pz+2=0\\) define points Q=(aq²,2aq), R=(ar²,2ar). As p varies over values giving two distinct real roots, through which fixed point does the line QR always pass?",
        "opts": [
          "(2a,0)",
          "(−a,0)",
          "(0,0)",
          "(−2a,0)",
          "(0,−2a)"
        ],
        "correct": 3,
        "sol": "<p>Subtract the quadratic equations for q and r to obtain q+r=−p, and factor the quadratic to get qr=2. The line through Q,R is 2x−(q+r)y+2aqr=0, as direct substitution verifies. Thus 2x+py+4a=0. It always contains (−2a,0), independently of p.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper III, question 2(ii). Catalogue: Supply.</a></p>",
        "topic": "Coordinate geometry",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S156",
        "stepSource": {
          "year": 2016,
          "paper": "III",
          "part": "2(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf"
        },
        "sourceGroup": "2016-3-2",
        "templateFamily": "2016-3-2"
      },
      {
        "n": 11,
        "stem": "For points X,Y define X*Y to have position vector λx+(1−λ)y, where λ is real. Under what conditions are (X*Y)*Z and X*(Y*Z) distinct?",
        "opts": [
          "λ≠1/2 and X≠Y",
          "λ≠0,1 and X≠Z",
          "Always, unless X=Y=Z",
          "λ≠0,1 and X,Y,Z are all distinct",
          "λ≠0 and Y≠Z"
        ],
        "correct": 1,
        "sol": "<p>The first expression has vector λ²x+λ(1−λ)y+(1−λ)z. The second is λx+λ(1−λ)y+(1−λ)²z. Their difference is λ(λ−1)(x−z). This is nonzero exactly when λ is neither 0 nor 1 and X≠Z; Y imposes no restriction.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 3(ii). Catalogue: Direct.</a></p>",
        "topic": "Vectors / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S200",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "3(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-3",
        "templateFamily": "functional-equation"
      },
      {
        "n": 12,
        "stem": "A non-degenerate triangle has sides a,b,c. Which statement about \\(a^2+bc,b^2+ca,c^2+ab\\) is true?",
        "opts": [
          "They always form a non-degenerate triangle",
          "They do so exactly when the original triangle is acute",
          "They do so only when two original sides are equal",
          "They do so exactly when the original triangle is not obtuse",
          "They never form a non-degenerate triangle"
        ],
        "correct": 0,
        "sol": "<p>Assume c is an original largest side. Then (c²+ab)−(a²+bc)=(c−a)(c+a−b)≥0, and similarly it is at least b²+ca. It suffices to check the other two sum to more than c²+ab. Put c=a+b−t, with 0&lt;t≤min(a,b). Their sum minus the largest is (a−b)²+ab+t(a+b−t)&gt;0. All three transformed sides are positive, so they always form a triangle.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 4(iii)(D). Catalogue: Direct.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S085",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "4(iii)(D)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-4",
        "templateFamily": "2020-2-4"
      },
      {
        "n": 13,
        "stem": "Nonzero real u,v satisfy \\(u+v+1/(uv)=3\\). You may use that their product P=uv must satisfy \\((P-1)^2(4P-1)\\le0\\). What is the greatest possible value of \\(1/u+1/v+uv\\)?",
        "opts": [
          "3",
          "There is no upper bound",
          "−15/4",
          "1",
          "15/4"
        ],
        "correct": 0,
        "sol": "<p>The supplied inequality gives P≤1/4 or P=1, so in all cases P≤1. The target is (u+v)/P+P=3/P−1/P²+P=3+(P−1)³/P². Since P²&gt;0 and P−1≤0, it is at most 3. Equality is attained with P=1 and u+v=2, namely u=v=1, which also satisfies the original constraint.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper III, question 1(iv). Catalogue: Supply.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S126",
        "stepSource": {
          "year": 2018,
          "paper": "III",
          "part": "1(iv)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf"
        },
        "sourceGroup": "2018-3-1",
        "templateFamily": "2018-3-1"
      },
      {
        "n": 14,
        "stem": "A fair six-sided die is rolled until the first 6. What is the probability that both a 4 and a 5 have appeared before that 6?",
        "opts": [
          "1/4",
          "1/3",
          "1/2",
          "1/6",
          "2/3"
        ],
        "correct": 1,
        "sol": "<p>Ignore rolls 1,2,3, which do not affect the event. Among 4,5,6, the first distinct face is uniform; the next new face is uniform among the two remaining. All six orders of first appearances are equally likely. The required event occurs exactly when 6 is last, in orders 4,5,6 and 5,4,6, giving 2/6=1/3.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper I, question 13(iii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S166",
        "stepSource": {
          "year": 2015,
          "paper": "I",
          "part": "13(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf"
        },
        "sourceGroup": "2015-1-13",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 15,
        "stem": "For 0&lt;x&lt;2π and positive integer n, simplify \\(\\sum_{m=1}^n\\cos((m+1/2)x)\\). You may use \\(\\sin A-\\sin B=2\\cos((A+B)/2)\\sin((A-B)/2)\\).",
        "opts": [
          "\\(\\sin(nx)/[2\\sin(x/2)]\\)",
          "\\([\\sin(nx)-\\sin x]/[2\\sin(x/2)]\\)",
          "\\([\\sin((n+1)x)-\\sin x]/\\sin(x/2)\\)",
          "\\([\\sin((n+1)x)+\\sin x]/[2\\sin(x/2)]\\)",
          "\\([\\sin((n+1)x)-\\sin x]/[2\\sin(x/2)]\\)"
        ],
        "correct": 4,
        "sol": "<p>Use A=(m+1)x and B=mx. Each summand equals [sin((m+1)x)−sin(mx)]/[2sin(x/2)]. The denominator is nonzero on the given interval. Summing the numerator telescopes, retaining sin((n+1)x)−sin x. The starting index m=1 is responsible for the subtracted sin x.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper III, question 8(i). Catalogue: Direct.</a></p>",
        "topic": "Trigonometry / Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.0,
        "selectionId": "S141",
        "stepSource": {
          "year": 2017,
          "paper": "III",
          "part": "8(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf"
        },
        "sourceGroup": "2017-3-8",
        "templateFamily": "2017-3-8"
      },
      {
        "n": 16,
        "stem": "Consider the claim that a²&gt;b&gt;0, a&lt;0 and c&lt;0 ensure that x³+3ax²+3bx+c=0 has three distinct positive real roots. Which choice is a counterexample?",
        "opts": [
          "a=−2,b=−3,c=−5",
          "a=2,b=3,c=−5",
          "a=−2,b=3,c=−5",
          "a=−1,b=1,c=−1",
          "a=−2,b=11/3,c=−6"
        ],
        "correct": 2,
        "sol": "<p>For a=−2,b=3,c=−5 the inequalities hold, but F=x³−6x²+9x−5 has derivative 3(x−1)(x−3). Its local maximum F(1)=−1 and minimum F(3)=−5 are both negative, so it has only one real root. The second choice gives (x−1)(x−2)(x−3), so is not a counterexample. Each remaining choice violates at least one hypothesis.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper II, question 3(ii)–(iv). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Graphs",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S206",
        "stepSource": {
          "year": 2013,
          "paper": "II",
          "part": "3(ii)–(iv)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf"
        },
        "sourceGroup": "2013-2-3",
        "templateFamily": "2013-2-3"
      },
      {
        "n": 17,
        "stem": "Define \\(g(x)=2\\min(x^2,x^3)-5x\\) for every real \\(x\\). Which option gives exactly the x-coordinates of its local maxima and local minima, respectively?",
        "opts": [
          "Maxima: \\(-\\sqrt{5/6},1\\); minima: \\(\\sqrt{5/6},5/4\\)",
          "Maxima: \\(1\\); minima: \\(\\sqrt{5/6},5/4\\)",
          "Maxima: \\(-\\sqrt{5/6},5/4\\); minima: \\(\\sqrt{5/6},1\\)",
          "Maxima: \\(-\\sqrt{5/6},0,1\\); minima: \\(\\sqrt{5/6},5/4\\)",
          "Maxima: \\(-\\sqrt{5/6}\\); minima: \\(\\sqrt{5/6},5/4\\)"
        ],
        "correct": 0,
        "sol": "<p>Since \\(x^3-x^2=x^2(x-1)\\), the cubic is selected for x≤1 and the quadratic for x≥1. On the left, \\(g\\prime(x)=6x^2-5\\), giving a maximum at \\(-\\sqrt{5/6}\\) and a minimum at \\(\\sqrt{5/6}\\). On the right, \\(g\\prime(x)=4x-5\\), giving a minimum at 5/4. At x=1 the left gradient is positive and the right gradient negative, so this join is also a local maximum. At x=0 the same cubic formula applies on both sides, so there is no extra extremum.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 1(iv), extrema. Catalogue: Direct.</a></p>",
        "topic": "Differentiation / Functions and Graphs",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 5,
        "selectionId": "S003",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "1(iv), extrema",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-1",
        "templateFamily": "modulus-piecewise"
      },
      {
        "n": 18,
        "stem": "How many ordered quadruples of integers a&lt;b&lt;c&lt;d can satisfy \\(S(a)=S(b)=S(c)=S(d)=2001\\) and S(0)=2017 for some monic quartic S?",
        "opts": [
          "6",
          "4",
          "5",
          "10",
          "8"
        ],
        "correct": 2,
        "sol": "<p>The factor theorem gives S(x)=2001+(x−a)(x−b)(x−c)(x−d), so abcd=16. All entries are nonzero signed powers of 2. Four distinct positive entries have product at least 1·2·4·8=64; the same holds for four negatives. Thus two are negative and two positive. The five increasing quadruples are (−8,−1,1,2), (−4,−2,1,2), (−4,−1,1,4), (−2,−1,1,8), (−2,−1,2,4). To see completeness, the absolute-value exponent pairs on each side are distinct nonnegative integers with total exponent 4; the possible splits are 1+3,2+2,3+1, giving 2+1+2 choices.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 5(iii)(b). Catalogue: Direct.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S116",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "5(iii)(b)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-5",
        "templateFamily": "2018-1-5"
      },
      {
        "n": 19,
        "stem": "A pool light is on exactly when its hallway switch and kitchen switch are both on. There are four switches in each room. Initially all hallway switches are on with probability p and all off otherwise. Kitchen switches are independently on with probability 1/2, independently of the hallway. One random switch in each room is toggled. Given the pool light is now on, what is the probability its hallway switch was toggled?",
        "opts": [
          "\\((1-p)/4\\)",
          "\\((1-p)/(1+3p)\\)",
          "\\((1-p)/(1+2p)\\)",
          "\\(p/(1+2p)\\)",
          "\\(1/4\\)"
        ],
        "correct": 2,
        "sol": "<p>The hallway pool switch ends on either if it was initially on and not toggled, probability 3p/4, or initially off and toggled, probability (1−p)/4. Their sum is (1+2p)/4. The kitchen pool switch remains equally likely on or off and is independent, so its factor 1/2 cancels in the conditional ratio. The desired ratio is [(1−p)/4]/[(1+2p)/4]=(1−p)/(1+2p).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper II, question 12(i). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S224",
        "stepSource": {
          "year": 2012,
          "paper": "II",
          "part": "12(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf"
        },
        "sourceGroup": "2012-2-12",
        "templateFamily": "2012-2-12"
      },
      {
        "n": 20,
        "stem": "Two distinct tangents to \\(x^2=4ay\\), a&gt;0, meet at (X,Y), where \\((Y+7a)^2=48a^2+3X^2\\). If their tangency parameters are p,q, you may use \\(p+q=2X\\), \\(pq=4aY\\), their gradients p/(2a),q/(2a), and \\(\\tan\\theta=|(m_1-m_2)/(1+m_1m_2)|\\). What is their acute angle θ?",
        "opts": [
          "It depends on X",
          "15°",
          "60°",
          "30°",
          "75°",
          "45°"
        ],
        "correct": 3,
        "sol": "<p>The tangent formula gives \\(\\tan^2\\theta=(X^2-4aY)/(a+Y)^2\\). The locus equation rearranges to \\(3X^2=Y^2+14aY+a^2\\), hence \\(X^2-4aY=(Y+a)^2/3\\). There is no real locus point with Y=-a, since that would require X²=-4a². Thus division is legitimate and tan²θ=1/3. The acute angle is 30°.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 4(iii). Catalogue: Supply.</a></p>",
        "topic": "Geometry / Trigonometry",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S036",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "4(iii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-4",
        "templateFamily": "2024-3-4"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice04p1v2",
    "title": "STEP practice · Year 04 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "Let A be the solution set of \\(\\sqrt{4x^2-8x+64}\\le|x+8|\\), and B the solution set of \\(\\sqrt{4x^2-8x+64}\\le|3x-8|\\). What is \\(A\\cap B\\)?",
        "opts": [
          "\\(( -\\infty,0]\\cup[8,\\infty)\\)",
          "\\([0,8]\\)",
          "All real numbers",
          "The empty set",
          "\\((0,8)\\)",
          "\\(\\{0,8\\}\\)"
        ],
        "correct": 5,
        "sol": "<p>The radicand is 4(x−1)²+60&gt;0, and both right sides are nonnegative, so squaring preserves each inequality. The first becomes 3x(x−8)≤0, giving A=[0,8]. The second becomes 5x(x−8)≥0, giving B=(-∞,0]∪[8,∞). Only the two endpoints belong to both. They satisfy equality in the original inequalities.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 2(i)(a)–(b). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S032",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "2(i)(a)–(b)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-2",
        "templateFamily": "2024-3-2"
      },
      {
        "n": 2,
        "stem": "Let a₁=1,b₁=2 and aₙ₊₁=aₙ+2bₙ, bₙ₊₁=2aₙ+5bₙ. You may use \\(2/(1+a_n/b_n)&lt;\\sqrt2&lt;1+a_n/b_n\\). What is the width of the interval obtained by taking n=3?",
        "opts": [
          "1/9801",
          "1/168",
          "1/6930",
          "1/4900",
          "1/70"
        ],
        "correct": 2,
        "sol": "<p>The first two updates give (a₂,b₂)=(5,12) and (a₃,b₃)=(29,70). The bounds are 140/99 and 99/70. Their difference is (99²−140·70)/(99·70)=1/6930. Both bounds use the same iteration; mixing different indices gives a different width.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper I, question 8(ii). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S132",
        "stepSource": {
          "year": 2017,
          "paper": "I",
          "part": "8(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf"
        },
        "sourceGroup": "2017-1-8",
        "templateFamily": "convergence-estimate"
      },
      {
        "n": 3,
        "stem": "An acute triangle ABC has side lengths a=BC&gt;b=CA&gt;c=AB and area Δ. A point P may lie anywhere inside or on the triangle. Its perpendicular distances to BC,CA,AB are x,y,z. What is the least possible x+y+z?",
        "opts": [
          "\\(2\\Delta/a\\)",
          "\\(2\\Delta/(a+b+c)\\)",
          "\\(2\\Delta/b\\)",
          "\\(0\\)",
          "\\(6\\Delta/(a+b+c)\\)",
          "\\(2\\Delta/c\\)"
        ],
        "correct": 0,
        "sol": "<p>Splitting the triangle into the three triangles with vertex P gives ax+by+cz=2Δ. Since all distances are nonnegative and a is the largest side, a(x+y+z)≥2Δ. Equality requires y=z=0, which occurs at P=A. Its remaining distance is the altitude 2Δ/a. Thus the lower bound is attained.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S065",
        "stepSource": {
          "year": 2022,
          "paper": "II",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"
        },
        "sourceGroup": "2022-2-5",
        "templateFamily": "2022-2-5"
      },
      {
        "n": 4,
        "stem": "What is the area between \\(y=3x^2-4x+1\\) and the x-axis for 0≤x≤1?",
        "opts": [
          "0",
          "2/27",
          "4/27",
          "16/27",
          "8/27"
        ],
        "correct": 4,
        "sol": "<p>Factor the polynomial as (3x−1)(x−1). It is positive on [0,1/3] and negative on [1/3,1]. An antiderivative is F=x³−2x²+x, with F(0)=F(1)=0 and F(1/3)=4/27. The two unsigned pieces each have area 4/27, so the total is 8/27.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Integration",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "O002",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O002",
        "templateFamily": "O002"
      },
      {
        "n": 5,
        "stem": "Let 0&lt;q&lt;1. A loaf contains n≥2 slices. A snack uses one slice with probability 1−q or two with probability q, independently, except that a lone final slice must be used alone. Let sᵣ be the probability slice r is the second slice of a two-slice snack. You may use s₁=0 and sᵣ=q(1−sᵣ₋₁) for 2≤r≤n. What is the probability the last slice is used alone?",
        "opts": [
          "\\((1-q)(1-(-q)^{n-1})/(1+q)\\)",
          "\\((1-q^n)/(1+q)\\)",
          "\\((q+(-q)^n)/(1+q)\\)",
          "\\((1-(-q)^n)/(1+q)\\)",
          "\\(1-q\\)"
        ],
        "correct": 3,
        "sol": "<p>Subtract the fixed value q/(1+q) from the recurrence. The differences multiply by −q at each step, giving sᵣ=[q+(−q)ʳ]/(1+q), including r=1. The last slice cannot be the first slice of a two-slice snack, so it is alone exactly when it is not a second slice. Its probability is 1−sₙ=[1−(−q)ⁿ]/(1+q).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper I, question 13, recurrence solution. Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics / Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S133",
        "stepSource": {
          "year": 2017,
          "paper": "I",
          "part": "13, recurrence solution",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf"
        },
        "sourceGroup": "2017-1-13",
        "templateFamily": "2017-1-13"
      },
      {
        "n": 6,
        "stem": "A finite sequence of positive terms has property L when \\(u_{r-1}u_{r+1}\\le u_r^2\\) at every interior index. For which positive t does the sequence \\(1,t,6,t+1,2\\) have property L?",
        "opts": [
          "\\(0&lt;t\\le(\\sqrt{145}-1)/2\\)",
          "\\(\\sqrt6\\le t\\le(\\sqrt{145}-1)/2\\)",
          "\\(2\\sqrt3-1\\le t\\le(\\sqrt{145}-1)/2\\)",
          "\\(2\\sqrt3-1\\le t\\le6\\)",
          "\\(\\sqrt6\\le t\\le6\\)"
        ],
        "correct": 2,
        "sol": "<p>The three conditions are t²≥6, t(t+1)≤36, and (t+1)²≥12. For t&gt;0 these require t≥√6, t≤(√145−1)/2, and t≥2√3−1. The latter lower bound is larger: (2√3−1)²−6=7−4√3&gt;0 since 49&gt;48. Intersecting the three intervals gives the answer.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 3(i). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S082",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "3(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-3",
        "templateFamily": "2020-2-3"
      },
      {
        "n": 7,
        "stem": "A ball is selected uniformly from ten balls labelled 1 to 10, its label recorded, and it is replaced. This is repeated independently. What is the probability that the first repeated label occurs on the fourth selection?",
        "opts": [
          "18/125",
          "3/10",
          "9/125",
          "63/125",
          "27/125"
        ],
        "correct": 4,
        "sol": "<p>The first three labels must be different: probability 1·9/10·8/10. The fourth must match one of those three, with conditional probability 3/10. Multiply to obtain 216/1000=27/125. Requiring a repeated label somewhere among four selections would include earlier repeats and is a different event.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper II, question 13(i). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S192",
        "stepSource": {
          "year": 2014,
          "paper": "II",
          "part": "13(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf"
        },
        "sourceGroup": "2014-2-13",
        "templateFamily": "2014-2-13"
      },
      {
        "n": 8,
        "stem": "A line of negative gradient passes through (1,k), where k&gt;0, and meets the positive coordinate axes at X and Y. O is the origin. As the line varies, what is the minimum area of triangle OXY?",
        "opts": [
          "2k",
          "4k",
          "k/2",
          "\\((k+1)^2/2\\)",
          "k"
        ],
        "correct": 0,
        "sol": "<p>Write the gradient as −m, m&gt;0. The intercepts are 1+k/m and k+m. The area is [2k+m+k²/m]/2. Since m+k²/m−2k=(m−k)²/m≥0, the area is at least 2k, attained when m=k. Both intercepts are then positive, so the minimum is admissible.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 1(i). Catalogue: Direct.</a></p>",
        "topic": "Geometry / Differentiation",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S095",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "1(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-1",
        "templateFamily": "2019-1-1"
      },
      {
        "n": 9,
        "stem": "What remainder is left when \\(10^{100}+10^{50}+1\\) is divided by 7?",
        "opts": [
          "5",
          "2",
          "1",
          "0",
          "3"
        ],
        "correct": 3,
        "sol": "<p>Powers of 10 have the same remainders as powers of 3. The first six are 3,2,6,4,5,1, so the pattern repeats every six powers. Since 100 leaves remainder 4 and 50 remainder 2 upon division by 6, the two powers leave remainders 4 and 2 modulo 7. Adding the final 1 gives 7, hence remainder 0.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "O007",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O007",
        "templateFamily": "O007"
      },
      {
        "n": 10,
        "stem": "For 0&lt;a&lt;1, Lₐ joins (a,0) to (0,1−a). For b≠a define P as the intersection of Lₐ and Lᵦ. What curve contains the limiting positions of P as b tends to a?",
        "opts": [
          "\\(x^2+y^2=1,\\ x,y&gt;0\\)",
          "\\(y=(1-\\sqrt{x})^2,\\ 0&lt;x&lt;1\\)",
          "\\(y=1-\\sqrt{x},\\ 0&lt;x&lt;1\\)",
          "\\(y=(1-x)^2,\\ 0&lt;x&lt;1\\)",
          "\\(x+y=1,\\ 0&lt;x&lt;1\\)"
        ],
        "correct": 1,
        "sol": "<p>The line equations are (1−a)x+ay=a(1−a) and (1−b)x+by=b(1−b). Subtracting and dividing by a−b gives y−x=1−a−b. Substituting back gives x=ab,y=(1−a)(1−b). In the limit x=a²,y=(1−a)². Since a&gt;0, a=√x, which gives the stated curve and domain.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 8(i)–(ii). Catalogue: Direct.</a></p>",
        "topic": "Coordinate geometry / Functions",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S186",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "8(i)–(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-8",
        "templateFamily": "2014-1-8"
      },
      {
        "n": 11,
        "stem": "A degree-11 polynomial P has leading coefficients \\[P(x)=1024x^{11}+0x^{10}-2816x^9+\\text{lower powers}.\\] It is known that \\(P(x)=(x+1)Q(x)^2\\), where Q has degree 5 and positive leading coefficient. What is the coefficient of x³ in Q?",
        "opts": [
          "32",
          "−32",
          "−48",
          "−16",
          "16",
          "−64"
        ],
        "correct": 1,
        "sol": "<p>Write Q=ax⁵+bx⁴+cx³+…. Comparing x¹¹ gives a²=1024, so a=32. Comparing x¹⁰ gives 2ab+a²=0, hence b=-16. Comparing x⁹ gives b²+2ac+2ab=-2816. Thus 256+64c−1024=-2816, so 64c=-2048 and c=-32. Lower coefficients cannot contribute to these three leading comparisons.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 4(iv). Catalogue: Supply.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S054",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "4(iv)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-4",
        "templateFamily": "2023-3-4"
      },
      {
        "n": 12,
        "stem": "Let \\(0&lt;a&lt;b\\) and \\(U,V&gt;0\\). A curve \\(y=p(c-x)^3\\), with \\(p&gt;0\\), passes through \\((a,U)\\) and \\((b,-V)\\). What is c?",
        "opts": [
          "\\(\\dfrac{a\\sqrt[3]U+b\\sqrt[3]V}{\\sqrt[3]U+\\sqrt[3]V}\\)",
          "\\(\\dfrac{aV+bU}{U+V}\\)",
          "\\(\\dfrac{a\\sqrt[3]V+b\\sqrt[3]U}{\\sqrt[3]U+\\sqrt[3]V}\\)",
          "\\(\\dfrac{aU+bV}{U+V}\\)",
          "\\(\\dfrac{b\\sqrt[3]U-a\\sqrt[3]V}{\\sqrt[3]U-\\sqrt[3]V}\\)"
        ],
        "correct": 2,
        "sol": "<p>The signs and p&gt;0 force a&lt;c&lt;b. The two conditions are p(c-a)³=U and p(b-c)³=V. Divide and take the positive cube root: (c-a)/(b-c)=∛U/∛V. Cross-multiplication gives c(∛U+∛V)=a∛V+b∛U. The denominator is positive, so the displayed expression is valid also when U=V; then c=(a+b)/2.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 3(iv). Catalogue: Direct.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S016",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "3(iv)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-3",
        "templateFamily": "2025-3-3"
      },
      {
        "n": 13,
        "stem": "A continuous function g on [0,1] satisfies \\[\\int_0^1g(x)^2\\,dx=\\int_0^1g(\\sqrt x)\\,dx-\\frac13.\\] You may use \\(\\int_0^1g(\\sqrt x)\\,dx=2\\int_0^1xg(x)\\,dx\\). What is \\(\\int_0^1g(x)^3\\,dx\\)?",
        "opts": [
          "1/4",
          "1/3",
          "1/2",
          "0",
          "1",
          "It is not determined"
        ],
        "correct": 0,
        "sol": "<p>Use the supplied identity and ∫₀¹x²dx=1/3 to obtain \\(\\int_0^1(g(x)-x)^2dx=0\\). The integrand is continuous and nonnegative. If it were positive at one point, continuity would make its integral positive over a small interval, a contradiction. Thus g(x)=x everywhere on [0,1]. The required integral is ∫₀¹x³dx=1/4.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 7(ii). Catalogue: Supply.</a></p>",
        "topic": "Integration",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S058",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "7(ii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-7",
        "templateFamily": "symmetric-integral"
      },
      {
        "n": 14,
        "stem": "Let \\(u_0=a\\) and \\(u_{n+1}=7-2|u_n|\\). The sequence has genuine period two if \\(u_{n+2}=u_n\\) for every n≥0 but it is not constant. What are all possible a?",
        "opts": [
          "\\(\\{-7,7/3,7/5,21/5\\}\\)",
          "\\(\\{-21/5,-7/5\\}\\)",
          "\\(\\{-7,7/3\\}\\)",
          "\\(\\{7/3,21/5\\}\\)",
          "\\(\\{-7/5,7/5,21/5\\}\\)",
          "\\(\\{-7/5,21/5\\}\\)"
        ],
        "correct": 5,
        "sol": "<p>Solve f(f(a))=a for f(x)=7−2|x|, splitting at a=0 and |a|=7/2. The roots are −7,7/3,−7/5,21/5. The first two are fixed points and must be excluded. The remaining values form the genuine two-cycle −7/5→21/5→−7/5. In particular +7/5 is not in that cycle: it reaches 21/5 and then −7/5.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 2(i)(b)–(c). Catalogue: Direct.</a></p>",
        "topic": "Functions and Graphs / Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S012",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "2(i)(b)–(c)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-2",
        "templateFamily": "two-cycle"
      },
      {
        "n": 15,
        "stem": "For b&gt;1, suppose \\(\\int_1^b x^2\\,dx=(\\int_1^b x\\,dx)^2\\). Which statement is correct?",
        "opts": [
          "No such b exists",
          "Every b&gt;1 satisfies the equation",
          "Exactly one such b exists, and 2&lt;b&lt;3",
          "Exactly two such b exist, both between 2 and 3",
          "Exactly one such b exists, and 1&lt;b&lt;2"
        ],
        "correct": 2,
        "sol": "<p>Integration gives (b³−1)/3=(b²−1)²/4. Dividing by b−1 (allowed since b&gt;1) gives F(b)=3b³−b²−7b−7=0. F(2)=−1 and F(3)=44. Moreover F′(b)=9b²−2b−7=(b−1)(9b+7)&gt;0 for b&gt;1, so there is exactly one root in this domain and it lies between 2 and 3.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 3(ii). Catalogue: Direct.</a></p>",
        "topic": "Integration / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S181",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "3(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-3",
        "templateFamily": "2014-1-3"
      },
      {
        "n": 16,
        "stem": "For 0&lt;c&lt;1 and a positive integer n, when does ⌊x⌋/x=c have exactly n distinct real solutions? Here x≠0 and ⌊x⌋ is the greatest integer not exceeding x.",
        "opts": [
          "\\((n-1)/n\\le c&lt;n/(n+1)\\)",
          "\\(n/(n+1)&lt;c&lt;(n+1)/(n+2)\\)",
          "\\((n-1)/n&lt;c\\le n/(n+1)\\)",
          "\\(n/(n+1)&lt;c\\le(n+1)/(n+2)\\)",
          "\\(n/(n+1)\\le c&lt;(n+1)/(n+2)\\)"
        ],
        "correct": 3,
        "sol": "<p>No negative x works, since its ratio is at least 1. If k=⌊x⌋≥1 then x=k/c, and the floor condition is k&lt; c/(1−c). Exactly n positive integers satisfy this strict inequality precisely when n&lt;c/(1−c)≤n+1. Solving both inequalities gives n/(n+1)&lt;c≤(n+1)/(n+2).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 2(iii). Catalogue: Direct.</a></p>",
        "topic": "Functions / Inequalities",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S199",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "2(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-2",
        "templateFamily": "floor-systems"
      },
      {
        "n": 17,
        "stem": "A and B independently toss a coin with head probability p until their first heads. Write q=1−p, where 0&lt;p&lt;1, and let U be the absolute difference between their toss counts. Which gives P(U=0) and P(U=u) for integer u≥1?",
        "opts": [
          "\\(p/(1+q),\\ 2pq^u/(1+q)\\)",
          "\\(p/(1-q),\\ 2pq^u/(1-q)\\)",
          "\\(p^2,\\ 2pq^u\\)",
          "\\(2p/(1+q),\\ 2pq^u/(1+q)\\)",
          "\\(p/(1+q),\\ pq^u/(1+q)\\)"
        ],
        "correct": 0,
        "sol": "<p>For equality at count k the probability is p²q²ᵏ⁻². Summing the geometric series gives p²/(1−q²)=p/(1+q). For difference u&gt;0 there are two disjoint orders; each has sum p²qᵘ/(1−q²). Doubling gives 2pqᵘ/(1+q). At u=0 the two orders coincide and must not be doubled.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 12(ii), U. Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S094",
        "stepSource": {
          "year": 2020,
          "paper": "III",
          "part": "12(ii), U",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"
        },
        "sourceGroup": "2020-3-12",
        "templateFamily": "2020-3-12"
      },
      {
        "n": 18,
        "stem": "How many ordered triples of positive integers satisfy \\(a^2+b^2+c^2=4abc\\)?",
        "opts": [
          "2",
          "Infinitely many",
          "1",
          "3",
          "4",
          "0"
        ],
        "correct": 5,
        "sol": "<p>Modulo 4, each square is 0 or 1. Three such residues can sum to 0 modulo 4 only if all three are zero, so a,b,c are even. After writing a=2u,b=2v,c=2w, the equation becomes u²+v²+w²=8uvw. The same modulo-4 argument forces u,v,w even. Each repeated division doubles the coefficient on the right, which remains divisible by 4. A positive integer triple cannot undergo infinitely many such divisions, so none exists.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 2(iv). Catalogue: Direct.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S070",
        "stepSource": {
          "year": 2022,
          "paper": "III",
          "part": "2(iv)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"
        },
        "sourceGroup": "2022-3-2",
        "templateFamily": "integer-descent"
      },
      {
        "n": 19,
        "stem": "Positive integers a,c and an odd prime b satisfy a²+b³=c⁴. Which list includes all possible ordered pairs (a,c²) in terms of b?",
        "opts": [
          "\\((b^3-1,b^3+1)\\) only",
          "\\(((b^3-1)/2,(b^3+1)/2)\\) or \\(((b^2-b)/2,(b^2+b)/2)\\)",
          "\\(((b^2-1)/2,(b^2+1)/2)\\) or \\(((b^3-b)/2,(b^3+b)/2)\\)",
          "\\(((b^3-1)/2,(b^3+1)/2)\\) or \\(((b^3-b)/2,(b^3+b)/2)\\)",
          "\\(((b^2-b)/2,(b^2+b)/2)\\) only"
        ],
        "correct": 1,
        "sol": "<p>Factor (c²−a)(c²+a)=b³. Both factors are positive odd integers, with the first smaller. The only ordered factor pairs are (1,b³) and (b,b²). Adding and subtracting gives (a,c²)=((b³−1)/2,(b³+1)/2) or ((b²−b)/2,(b²+b)/2). The second coordinate must additionally be a perfect square for an actual solution; the listed forms are necessary, not an assertion that every prime works.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper II, question 7(iii). Catalogue: Direct.</a></p>",
        "topic": "Number theory",
        "estimatedDifficulty": 7.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S209",
        "stepSource": {
          "year": 2013,
          "paper": "II",
          "part": "7(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf"
        },
        "sourceGroup": "2013-2-7",
        "templateFamily": "2013-2-7"
      },
      {
        "n": 20,
        "stem": "For 0≤c≤6, consider \\(|x|+|x-6|=|x-c|+|x-(c+2)|\\). Which statement gives the number of distinct real solutions?",
        "opts": [
          "Exactly two if c≠2; infinitely many if c=2",
          "Exactly one for every c",
          "None if 0≤c≤4; exactly two otherwise",
          "None if 0≤c&lt;2; infinitely many if c=2; exactly one if 2&lt;c≤6",
          "Exactly one if c≠2; infinitely many if c=2"
        ],
        "correct": 4,
        "sol": "<p>The centres of the two intervals [0,6] and [c,c+2] are 3 and c+1. If c&lt;2 the unique intersection occurs at x=c+4 (which lies in [4,6)); the right sum there is 2x−2c−2=6. If c&gt;2 the unique intersection occurs at x=c−2 in (0,4], where the right sum is 2c+2−2x=6. Piecewise slopes show there are no others. At c=2 both sums agree on the two rays x≤0 and x≥6, giving infinitely many solutions.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper II, question 7(iii). Catalogue: Direct.</a></p>",
        "topic": "Graphs / Modulus",
        "estimatedDifficulty": 7.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S190",
        "stepSource": {
          "year": 2014,
          "paper": "II",
          "part": "7(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf"
        },
        "sourceGroup": "2014-2-7",
        "templateFamily": "modulus-piecewise"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice05p1v2",
    "title": "STEP practice · Year 05 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "For real numbers \\(a,b\\), \\(\\min(a,b)\\) denotes the smaller of them. What is the complete set of real solutions of \\[2\\min(x^2,2x)=5x-3?\\]",
        "opts": [
          "\\(\\{1,3\\}\\)",
          "\\(\\{1,\\frac32,3\\}\\)",
          "\\(\\{\\frac32,3\\}\\)",
          "\\(\\{-1,\\frac32,3\\}\\)",
          "\\(\\{3\\}\\)",
          "\\(\\{1,\\frac32\\}\\)"
        ],
        "correct": 1,
        "sol": "<p>The quadratic is the smaller expression exactly when \\(x(x-2)\\le0\\), so \\(0\\le x\\le2\\). On this interval the equation is \\(2x^2-5x+3=(2x-3)(x-1)=0\\), giving 1 and 3/2. Outside it, the equation is \\(4x=5x-3\\), giving 3, which lies in the required region. All three values satisfy the original equation.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 1(ii). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Functions and Graphs",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S001",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "1(ii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-1",
        "templateFamily": "modulus-piecewise"
      },
      {
        "n": 2,
        "stem": "A and B play independent games, each won by A with probability p, where 0&lt;p&lt;1. They stop when one player has won two more games than the other. What is the probability that A wins the match?",
        "opts": [
          "\\(p^2/[p^2+(1-p)^2]\\)",
          "\\(2p-p^2\\)",
          "\\(p^2\\)",
          "\\(p/(2-p)\\)",
          "\\(p\\)"
        ],
        "correct": 0,
        "sol": "<p>Group the games into consecutive pairs. AA ends the match for A, BB ends it for B, and either mixed pair restores equality. If P is A’s eventual winning probability, P=p²+2p(1−p)P. Thus P=p²/[1−2p(1−p)]=p²/[p²+(1−p)²]. Since the probability of a non-mixed pair is positive, the match ends with probability one.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 12(ii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S079",
        "stepSource": {
          "year": 2021,
          "paper": "II",
          "part": "12(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"
        },
        "sourceGroup": "2021-2-12",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 3,
        "stem": "Every face of a tetrahedron ABCD has the same perimeter. Its edges AB, AC and AD have lengths 5,6 and 7 respectively. What are the lengths CD, BD and BC, in that order?",
        "opts": [
          "They are not uniquely determined",
          "6,5,7",
          "6,7,5",
          "7,5,6",
          "7,6,5",
          "5,6,7"
        ],
        "correct": 5,
        "sol": "<p>Write BC=x,BD=y,CD=z. The face perimeters are 11+x,12+y,13+z,x+y+z. The first three equalities give x−y=1 and y−z=1, so x=z+2,y=z+1. Equating 13+z with 3z+3 gives z=5, and consequently y=6,x=7. Thus opposite edges agree. The data are consistent with a nondegenerate tetrahedron: the face triangle 5,6,7 is acute.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 8(i). Catalogue: Direct.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S050",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "8(i)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-8",
        "templateFamily": "2023-2-8"
      },
      {
        "n": 4,
        "stem": "The line y=a²x and curve y=x(b−x)², where 0&lt;a&lt;b, have two nonzero intersections. What is the tangent to the curve at the one with smaller x-coordinate?",
        "opts": [
          "\\(y=a(3a-2b)x+a(b-a)^2\\)",
          "\\(y=a^2x\\)",
          "\\(y=a(2b-3a)x+2a(b-a)^2\\)",
          "\\(y=a(3a+2b)x-2a(b+a)^2\\)",
          "\\(y=a(3a-2b)x+2a(b-a)^2\\)"
        ],
        "correct": 4,
        "sol": "<p>At a nonzero intersection (b−x)²=a², so the smaller x-coordinate is b−a and its y-coordinate is a²(b−a). Expand the curve as x³−2bx²+b²x, giving derivative 3x²−4bx+b². At x=b−a this is a(3a−2b). Substituting the point into y=mx+c gives c=2a(b−a)².</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 1, opening + tangent. Catalogue: Direct.</a></p>",
        "topic": "Differentiation / Geometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S112",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "1, opening + tangent",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-1",
        "templateFamily": "2018-1-1"
      },
      {
        "n": 5,
        "stem": "Four people choose independent uniform integers from 1 to n, n≥3. A person wins if they are the unique smallest or the unique largest. You are given that the probability of a unique smallest is \\(A=(n-1)^2/n^2\\), and the probability of two winners is \\(B=(n-2)(n-1)^2/n^3\\). What is the least n for which two winners are more likely than exactly one winner?",
        "opts": [
          "6",
          "9",
          "7",
          "5",
          "4",
          "8"
        ],
        "correct": 2,
        "sol": "<p>By symmetry the probability of a unique largest is also A. Adding these two probabilities counts a two-winner outcome twice and a one-winner outcome once. Hence P(exactly one)=2A−2B=4(n−1)²/n³. Compare this with B and cancel the positive factor (n−1)²/n³. The condition is n−2&gt;4, or n&gt;6. The least integer is 7; equality at 6 is insufficient.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 12(ii), final comparison. Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S030",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "12(ii), final comparison",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-12",
        "templateFamily": "2024-2-12"
      },
      {
        "n": 6,
        "stem": "For which nonnegative y is there at least one nonnegative x satisfying \\(y^2(y^2-5)=x^2(x^2-4)\\)?",
        "opts": [
          "0≤y≤1 or y≥2",
          "Every y≥0",
          "0≤y≤2",
          "y≤1 or y≥√5",
          "1≤y≤2"
        ],
        "correct": 0,
        "sol": "<p>Put z=x²≥0. The equation becomes z²−4z−y⁴+5y²=0, with roots z=2±√[(y²−1)(y²−4)]. They are real exactly when y²≤1 or y²≥4. Whenever they are real, the plus root is at least 2 and hence supplies a nonnegative x. With y≥0 the complete range is [0,1]∪[2,∞).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper III, question 7(ii)(a). Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S111",
        "stepSource": {
          "year": 2019,
          "paper": "III",
          "part": "7(ii)(a)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf"
        },
        "sourceGroup": "2019-3-7",
        "templateFamily": "2019-3-7"
      },
      {
        "n": 7,
        "stem": "For which real t does \\[y^2-x^2+2ty+(t+3)x+4=0\\] represent a pair of perpendicular straight lines?",
        "opts": [
          "\\(t=1\\pm2\\sqrt{21}/3\\)",
          "No real t",
          "\\(t=1\\pm\\sqrt{21}/3\\)",
          "\\(t=1\\pm2\\sqrt3\\)",
          "\\(t=-1\\pm2\\sqrt{21}/3\\)",
          "\\(t=\\pm\\sqrt{21}\\)"
        ],
        "correct": 0,
        "sol": "<p>Complete squares: \\((y+t)^2-(x-(t+3)/2)^2=t^2-(t+3)^2/4-4\\). This is a pair of lines precisely when the constant on the right is zero; the difference of squares then factors into lines of gradients ±1. Thus 4t²−(t+3)²=16, or 3t²−6t−25=0. The quadratic formula gives t=1±2√21/3.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 8(i). Catalogue: Direct.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S038",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "8(i)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-8",
        "templateFamily": "2024-3-8"
      },
      {
        "n": 8,
        "stem": "Let a&gt;0. A line joins the distinct parabola points \\((2ap,ap^2)\\) and \\((2aq,aq^2)\\), where \\((p+q)^2=p^2q^2+6pq+5\\). A circle centred at (0,3a) is tangent to this line. What is its radius?",
        "opts": [
          "3a",
          "a√2",
          "a√5",
          "a",
          "It depends on p and q",
          "2a"
        ],
        "correct": 5,
        "sol": "<p>The chord is y=(p+q)x/2−apq. Its distance from (0,3a) is \\(2a|pq+3|/\\sqrt{4+(p+q)^2}\\), found by a perpendicular line or right-triangle projection. The stated identity gives 4+(p+q)²=(pq+3)². The denominator is nonzero, so the distance simplifies to 2a, which is the tangent circle’s radius.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 1(i). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S051",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "1(i)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-1",
        "templateFamily": "2023-3-1"
      },
      {
        "n": 9,
        "stem": "Triangle ABC has AB=1 and angles A=B=45°. Points P,Q lie on the segments AC,BC respectively, with AP=PQ=QB=x. You may use that x satisfies \\([1+2\\cos(A+B)]x^2-2(\\cos A+\\cos B)x+1=0\\). What is x?",
        "opts": [
          "\\(2-\\sqrt2\\)",
          "\\(1/2\\)",
          "\\(\\sqrt2-1\\)",
          "\\(\\sqrt2+1\\)",
          "\\(1/\\sqrt2\\)"
        ],
        "correct": 2,
        "sol": "<p>The supplied equation becomes x²−2√2x+1=0, giving x=√2±1. Since AC=BC=1/√2, a point on either segment requires x≤1/√2. Only √2−1 qualifies; √2+1 would put the points on the extended sides. The qualifying points do give PQ=x by the supplied geometry or direct similarity.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper II, question 1(iii). Catalogue: Supply.</a></p>",
        "topic": "Geometry / Trigonometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S187",
        "stepSource": {
          "year": 2014,
          "paper": "II",
          "part": "1(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf"
        },
        "sourceGroup": "2014-2-1",
        "templateFamily": "2014-2-1"
      },
      {
        "n": 10,
        "stem": "A sequence satisfies \\[0\\le y_n-\\sqrt2\\le2\\left(\\frac{\\sqrt2-1}{2}\\right)^{2^n}\\quad(n\\ge1).\\] You may use \\(\\sqrt2-1&lt;1/2\\) and \\(2^{10}&gt;10^3\\). Which of the following bounds on y₁₀ follows from these estimates?",
        "opts": [
          "\\(\\sqrt2\\le y_{10}&lt;\\sqrt2+10^{-1200}\\)",
          "\\(\\sqrt2\\le y_{10}&lt;\\sqrt2+10^{-600}\\)",
          "\\(\\sqrt2-10^{-600}&lt;y_{10}\\le\\sqrt2\\)",
          "\\(\\sqrt2\\le y_{10}&lt;\\sqrt2+10^{-2400}\\)",
          "\\(y_{10}=\\sqrt2\\)"
        ],
        "correct": 1,
        "sol": "<p>The error is less than 2(1/4)^1024=2^-2047. Since 2047&gt;2000, this is less than (2^10)^-200&lt;10^-600. The estimate is an upper error bound on the nonnegative side, not a lower-side enclosure or an equality. The powers 1200 and 2400 are not supported by the given bound.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 5(ii)(c). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Indices",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S048",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "5(ii)(c)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-5",
        "templateFamily": "convergence-estimate"
      },
      {
        "n": 11,
        "stem": "A test has five questions, each with three options and one correct answer. A correct guess scores 2, a wrong guess −1 and an omission 0. The pass mark is 5. A candidate selects in advance exactly k questions to guess independently and uniformly. Which k maximises the probability of passing?",
        "opts": [
          "4 and 5 equally",
          "3",
          "5",
          "3 and 4 equally",
          "4"
        ],
        "correct": 4,
        "sol": "<p>For k attempts and c correct answers, the score is 3c−k. Passing is impossible for k≤2. For k=3 all three must be right, probability 1/27=9/243. For k=4 at least three must be right, probability 4(1/3)³(2/3)+(1/3)⁴=1/9=27/243. For k=5 at least four must be right, probability 5(1/3)⁴(2/3)+(1/3)⁵=11/243. The largest is attained uniquely at k=4.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 13(i). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S118",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "13(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-13",
        "templateFamily": "2018-1-13"
      },
      {
        "n": 12,
        "stem": "You may use 4cos³θ−3cosθ=cos3θ and cos15°=(√6+√2)/4, cos135°=−√2/2, cos255°=(√2−√6)/4. Which is the complete real solution set of y³−3y−√2=0?",
        "opts": [
          "\\(\\{(\\sqrt6+\\sqrt2)/4,-\\sqrt2/2,(\\sqrt2-\\sqrt6)/4\\}\\)",
          "\\(\\{\\sqrt2,-\\sqrt2,0\\}\\)",
          "\\(\\{\\sqrt2,(\\sqrt6-\\sqrt2)/2,-(\\sqrt6+\\sqrt2)/2\\}\\)",
          "\\(\\{(\\sqrt6+\\sqrt2)/2,-\\sqrt2,(\\sqrt2-\\sqrt6)/2\\}\\)",
          "\\(\\{(\\sqrt6+\\sqrt2)/2\\}\\)"
        ],
        "correct": 3,
        "sol": "<p>Set y=2cosθ. Then y³−3y=2cos3θ, so cos3θ=√2/2. The angles 15°,135°,255° satisfy this equation; doubling the supplied cosine values gives the three distinct listed numbers. A cubic has at most three distinct roots, so the list is complete.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper I, question 2(iii). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S162",
        "stepSource": {
          "year": 2015,
          "paper": "I",
          "part": "2(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf"
        },
        "sourceGroup": "2015-1-2",
        "templateFamily": "2015-1-2"
      },
      {
        "n": 13,
        "stem": "Suppose √2 were rational. Let k be the least positive integer for which k√2 is an integer, and set m=k√2−k. Which ordered pair correctly gives (m/k,m√2) and establishes the descent contradiction?",
        "opts": [
          "(√2+1, 2k−k√2)",
          "(√2−1, k−k√2)",
          "(1−√2, k√2−2k)",
          "(√2−1, 2k−k)",
          "(√2−1, 2k−k√2)"
        ],
        "correct": 4,
        "sol": "<p>We have m/k=√2−1, which lies strictly between 0 and 1. Also m=k√2−k is an integer, and m√2=2k−k√2 is an integer. Thus m is a positive integer smaller than the supposedly least k with this property. Both the sign/range check and the integrality check are required.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper III, question 5(i). Catalogue: Direct.</a></p>",
        "topic": "Number theory / Reasoning",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S176",
        "stepSource": {
          "year": 2015,
          "paper": "III",
          "part": "5(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf"
        },
        "sourceGroup": "2015-3-5",
        "templateFamily": "integer-descent"
      },
      {
        "n": 14,
        "stem": "A real sequence is defined by \\(x_1=a\\) and \\(x_{n+1}=x_n^2-2\\). For exactly which real a does \\(x_n\\to+\\infty\\)?",
        "opts": [
          "a&lt;0 or a&gt;2",
          "a≠0",
          "a≤−2 or a≥2",
          "a&lt;−2 or a&gt;2",
          "a&gt;2 only"
        ],
        "correct": 3,
        "sol": "<p>If |a|≤2, squaring and subtracting 2 maps [−2,2] into itself, so the sequence stays bounded. If x&gt;2, then (x²−2)−2=(x−2)(x+2)&gt;4(x−2); repeated application makes the distance above 2 grow without bound. Thus a&gt;2 works. If a&lt;−2, the second term exceeds 2, so that case also works. The endpoints remain bounded: −2 maps to 2, which is fixed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper III, question 8(ii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S081",
        "stepSource": {
          "year": 2021,
          "paper": "III",
          "part": "8(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%203.pdf"
        },
        "sourceGroup": "2021-3-8",
        "templateFamily": "2021-3-8"
      },
      {
        "n": 15,
        "stem": "A cyclic quadrilateral has vertices P₁,P₂,P₃,P₄ in order. Its diagonals meet internally at Q, with P₁Q=2, QP₃=3 and P₂Q=1. If pᵢ denotes the position vector of Pᵢ, which identity must hold?",
        "opts": [
          "\\(14p_1-30p_2+21p_3-5p_4=0\\)",
          "\\(2p_1-3p_2+3p_3-2p_4=0\\)",
          "\\(21p_1-30p_2+14p_3-5p_4=0\\)",
          "\\(3p_1-6p_2+2p_3-p_4=0\\)",
          "\\(21p_1-5p_2+14p_3-30p_4=0\\)"
        ],
        "correct": 2,
        "sol": "<p>Intersecting chords give P₁Q·QP₃=P₂Q·QP₄, so QP₄=6. Internal division gives q=(3p₁+2p₃)/5=(6p₂+p₄)/7. Cross-multiplication yields 21p₁+14p₃=30p₂+5p₄. The coefficients sum to zero, as an identity independent of origin must.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper III, question 7(i)–(ii). Catalogue: Direct.</a></p>",
        "topic": "Vectors / Circle geometry",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S195",
        "stepSource": {
          "year": 2014,
          "paper": "III",
          "part": "7(i)–(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf"
        },
        "sourceGroup": "2014-3-7",
        "templateFamily": "2014-3-7"
      },
      {
        "n": 16,
        "stem": "A function h defined for real x≠0,1 satisfies \\(h(x)+h(1/(1-x))=1-x-1/(1-x)\\). What is h(x)?",
        "opts": [
          "No function satisfies the equation",
          "\\(x-1/2\\)",
          "\\(1/2-1/(1-x)\\)",
          "\\(1/2-x\\)",
          "\\(1-x\\)"
        ],
        "correct": 3,
        "sol": "<p>Put t=1/(1−x) and u=1/(1−t)=(x−1)/x; then 1/(1−u)=x. The three equations are A+B=1−x−t, B+C=1−t−u, C+A=1−u−x. Add the first and third and subtract the second to obtain 2A=1−2x. Thus h(x)=1/2−x, and substituting verifies it on the entire domain.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper III, question 8(iii). Catalogue: Direct.</a></p>",
        "topic": "Functions / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S160",
        "stepSource": {
          "year": 2016,
          "paper": "III",
          "part": "8(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf"
        },
        "sourceGroup": "2016-3-8",
        "templateFamily": "functional-equation"
      },
      {
        "n": 17,
        "stem": "You may use \\(\\sum_{r=1}^{\\infty}r^{-2}=\\pi^2/6\\) and \\[\\frac1{r^2(r+1)}=\\frac1{r^2}-\\frac1r+\\frac1{r+1}.\\] What is \\[\\sum_{r=1}^{\\infty}\\frac1{r^2(r+1)(r+2)}?\\]",
        "opts": [
          "\\(\\pi^2/12-3/4\\)",
          "\\(\\pi^2/12-1/2\\)",
          "\\(\\pi^2/6-5/4\\)",
          "\\(5/8-\\pi^2/12\\)",
          "\\(\\pi^2/6-1\\)",
          "\\(\\pi^2/12-5/8\\)"
        ],
        "correct": 5,
        "sol": "<p>Partial fractions give \\(1/[r^2(r+1)(r+2)]=1/(2r^2)-3/(4r)+1/(r+1)-1/[4(r+2)]\\). In the sum through N the last three terms telescope, leaving \\(-5/8+3/[4(N+1)]-1/[4(N+2)]\\). The reciprocal-square part tends to π²/12 and the boundary fractions tend to zero. The result is π²/12−5/8. Only finite rearrangement and the supplied convergent sum are used.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 1(ii). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S031",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "1(ii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-1",
        "templateFamily": "2024-3-1"
      },
      {
        "n": 18,
        "stem": "An item becomes faulty permanently at time T. The probabilities for T in (0,1], (1,3/2], (3/2,2], (2,3] are respectively 1/2,5/26,7/65,1/10. At times 1,2,3 it is tested unless already destroyed. A faulty item fails each test independently with probability 1/2 and is destroyed; a sound item always passes. Given destruction at time 3, what is the probability T≤3/2?",
        "opts": [
          "9/13",
          "23/39",
          "23/208",
          "5/13",
          "2/3"
        ],
        "correct": 1,
        "sol": "<p>Faults in the first interval require two passed tests then a failure, contribution (1/2)(1/2)³=1/16. Faults in either interval between 1 and 2 require one pass then a failure, total (5/26+7/65)/4=(3/10)/4=3/40. Faults between 2 and 3 contribute 1/20. Total destruction probability is 1/16+3/40+1/20=3/16. The joint event T≤3/2 and destruction at 3 has probability 1/16+5/104=23/208. Divide by 3/16 to obtain 23/39.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper I, question 12, conditional probability. Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S218",
        "stepSource": {
          "year": 2012,
          "paper": "I",
          "part": "12, conditional probability",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf"
        },
        "sourceGroup": "2012-1-12",
        "templateFamily": "2012-1-12"
      },
      {
        "n": 19,
        "stem": "Seven distinct numbers are chosen uniformly from 1,…,52. Every chosen pair that sums to 53 is discarded. What is the probability that exactly one pair is discarded?",
        "opts": [
          "\\(26\\binom{50}{5}/\\binom{52}{7}\\)",
          "\\(26\\binom{25}{5}2^6/\\binom{52}{7}\\)",
          "\\(26\\binom{25}{5}/\\binom{52}{7}\\)",
          "\\(26\\binom{25}{5}2^5/\\binom{52}{7}\\)",
          "\\(\\binom{26}{6}2^5/\\binom{52}{7}\\)"
        ],
        "correct": 3,
        "sol": "<p>The 52 numbers form 26 disjoint complementary pairs. Choose the fully selected pair in 26 ways. The five other numbers must come from five distinct pairs among the remaining 25, or there would be another discarded pair. Choose those pairs in C(25,5) ways and one of the two numbers from each in 2⁵ ways. Divide by the total C(52,7). No division by an ordering factor is needed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 13, one pair-count probability. Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics / Counting",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S205",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "13, one pair-count probability",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-13",
        "templateFamily": "2013-1-13"
      },
      {
        "n": 20,
        "stem": "A horizontal line y=k, with k&gt;0, intersects a curve at precisely those real x satisfying \\[x^4+2(k^2-2)x^2+k^4-\\frac1{16}=0.\\] Let N(k) count distinct intersection points. For which positive k does N(k)=4?",
        "opts": [
          "\\(\\frac12&lt;k\\le\\frac{\\sqrt{65}}8\\)",
          "\\(\\frac12&lt;k&lt;\\frac{\\sqrt{65}}8\\)",
          "\\(k&gt;\\frac{\\sqrt{65}}8\\)",
          "\\(0&lt;k&lt;\\frac12\\)",
          "\\(0&lt;k&lt;\\frac{\\sqrt{65}}8\\)",
          "\\(\\frac12\\le k&lt;\\frac{\\sqrt{65}}8\\)"
        ],
        "correct": 1,
        "sol": "<p>Set z=x². Four distinct x-values require two distinct positive roots in z. The quadratic discriminant is 4(65/16−4k²), so distinct roots require k²&lt;65/64. Their product is k⁴−1/16, which is positive exactly when k&gt;1/2. Their sum is 4−2k², positive throughout the resulting interval. At k=1/2 one z-root is zero, giving only three x-values; at the upper endpoint the z-roots coincide, giving two.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 7(ii)(a). Catalogue: Direct.</a></p>",
        "topic": "Functions and Graphs / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 5,
        "selectionId": "S026",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "7(ii)(a)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-7",
        "templateFamily": "2024-2-7"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice06p1v2",
    "title": "STEP practice · Year 06 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "For a positive integer N, simplify \\(\\sum_{r=1}^N\\frac{2^r}{(1+2^r)(1+2^{r+1})}\\).",
        "opts": [
          "\\(1/3-1/(1+2^N)\\)",
          "\\(1/2-1/(1+2^{N+1})\\)",
          "\\(1/3-1/(1+2^{N+1})\\)",
          "\\(1/3+1/(1+2^{N+1})\\)",
          "\\(2/3-2/(1+2^{N+1})\\)"
        ],
        "correct": 2,
        "sol": "<p>Each summand is 1/(1+2ʳ)−1/(1+2ʳ⁺¹), since the numerator of that difference is 2ʳ. Intermediate terms cancel. The first surviving term is 1/3 and the last subtracted term is 1/(1+2ᴺ⁺¹).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper III, question 4(i). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S157",
        "stepSource": {
          "year": 2016,
          "paper": "III",
          "part": "4(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf"
        },
        "sourceGroup": "2016-3-4",
        "templateFamily": "2016-3-4"
      },
      {
        "n": 2,
        "stem": "What is the greatest possible value of xy² when x≥0, y≥0 and x+2y≤3?",
        "opts": [
          "9/4",
          "1",
          "27/4",
          "3/4",
          "9/8"
        ],
        "correct": 1,
        "sol": "<p>For fixed y, xy² is largest when x=3−2y, with 0≤y≤3/2. Maximise 3y²−2y³. Its derivative is 6y(1−y), positive until y=1 and negative afterwards. The endpoint values are zero and the interior maximum at y=1,x=1 is 1.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "Differentiation / Optimisation",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.0,
        "selectionId": "S183",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-5",
        "templateFamily": "2014-1-5"
      },
      {
        "n": 3,
        "stem": "A straight line through (a,b), where a,b&gt;0, meets the positive coordinate axes at (p,0) and (0,q). What is the minimum possible p+q?",
        "opts": [
          "\\(a+b\\)",
          "\\((\\sqrt a+\\sqrt b)^2\\)",
          "\\(2\\sqrt{ab}\\)",
          "\\((a^{2/3}+b^{2/3})^{3/2}\\)",
          "\\(2(a+b)\\)"
        ],
        "correct": 1,
        "sol": "<p>Write the line as y=b+ma−mx with m&gt;0. Then p=a+b/m and q=b+ma. Their sum is a+b+b/m+am. The final two terms are at least 2√(ab), since (√(am)−√(b/m))²≥0. Equality holds at m=√(b/a), so the minimum is a+b+2√(ab).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper I, question 1, minimum sum. Catalogue: Direct.</a></p>",
        "topic": "Differentiation / Geometry",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S212",
        "stepSource": {
          "year": 2012,
          "paper": "I",
          "part": "1, minimum sum",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf"
        },
        "sourceGroup": "2012-1-1",
        "templateFamily": "2012-1-1"
      },
      {
        "n": 4,
        "stem": "For which real x is \\(\\ln|x^2-4|&lt;0\\)?",
        "opts": [
          "\\(( -\\infty,-\\sqrt5)\\cup(\\sqrt5,\\infty)\\)",
          "\\((-\\sqrt5,\\sqrt5)\\setminus\\{-2,2\\}\\)",
          "\\((-\\sqrt5,-\\sqrt3)\\cup(\\sqrt3,\\sqrt5)\\)",
          "\\((-\\sqrt3,\\sqrt3)\\)",
          "\\((-\\sqrt5,-2)\\cup(-2,-\\sqrt3)\\cup(\\sqrt3,2)\\cup(2,\\sqrt5)\\)"
        ],
        "correct": 4,
        "sol": "<p>The logarithm is negative exactly when 0&lt;|x²−4|&lt;1. The upper inequality gives −1&lt;x²−4&lt;1, or 3&lt;x²&lt;5. The lower condition excludes x=±2, where the logarithm is undefined. Splitting at these excluded points gives the four open intervals.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 2(ii). Catalogue: Direct.</a></p>",
        "topic": "Exponentials and Logarithms / Graphs",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S180",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "2(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-2",
        "templateFamily": "2014-1-2"
      },
      {
        "n": 5,
        "stem": "In triangle OAB, D lies on BO with BD=2DO, and E lies on OA with OE=3EA. AD and BE meet at G. If the position vectors of A and B relative to O are a and b, what is the position vector of G?",
        "opts": [
          "\\((6a+b)/9\\)",
          "\\((3a+b)/4\\)",
          "\\((3a+2b)/9\\)",
          "\\((2a+3b)/6\\)",
          "\\((6a+b)/7\\)"
        ],
        "correct": 0,
        "sol": "<p>D has vector b/3 and E has vector 3a/4. Write G=(1−t)a+tb/3 on AD and G=(3s/4)a+(1−s)b on BE. Equating coefficients gives t/3=1−s and 1−t=3s/4, so t=1/3,s=8/9. Therefore G=2a/3+b/9=(6a+b)/9.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 7(i). Catalogue: Direct.</a></p>",
        "topic": "Vectors / Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S185",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "7(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-7",
        "templateFamily": "2014-1-7"
      },
      {
        "n": 6,
        "stem": "You are given \\(109\\cdot9193=1002037=1001^2+6^2\\), \\(109=10^2+3^2\\), and \\[(ac+bd)^2+(ad-bc)^2=(a^2+b^2)(c^2+d^2).\\] Which pair of positive integers (t,u), t&lt;u, satisfies \\(t^2+u^2=9193\\)?",
        "opts": [
          "\\((26,93)\\)",
          "\\((28,91)\\)",
          "\\((37,88)\\)",
          "\\((17,94)\\)",
          "\\((47,84)\\)",
          "\\((27,92)\\)"
        ],
        "correct": 5,
        "sol": "<p>Use a=1001,b=6,c=10,d=3. The identity gives 10028²+2943²=109²·9193. Both numbers are multiples of 109: 10028=109·92 and 2943=109·27. Divide by 109² to obtain 92²+27²=9193. Ordering gives (27,92). The supplied product structure avoids squaring every candidate from scratch.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 7(vi). Catalogue: Supply.</a></p>",
        "topic": "Number Theory / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S049",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "7(vi)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-7",
        "templateFamily": "2023-2-7"
      },
      {
        "n": 7,
        "stem": "You may use \\((a+b+c)^3-6(a+b+c)(a^2+b^2+c^2)+8(a^3+b^3+c^3)=-3(a+b-c)(a-b+c)(-a+b+c)\\). Which is the complete set of real solutions of \\((x+1)^3-3(x+1)(2x^2+5)+2(4x^3+13)=0\\)?",
        "opts": [
          "{1}",
          "{−2,−1,2}",
          "{−2,2}",
          "{−1,1,2}",
          "{−2,1,2}"
        ],
        "correct": 4,
        "sol": "<p>Use a=x,b=3/2,c=−1/2. Then a+b+c=x+1, a²+b²+c²=x²+5/2 and a³+b³+c³=x³+13/4. The identity therefore gives −3(x+2)(x−1)(2−x)=3(x+2)(x−1)(x−2). All three factors can vanish and there are no other roots.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper II, question 2(i). Catalogue: Supply.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S149",
        "stepSource": {
          "year": 2016,
          "paper": "II",
          "part": "2(i)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf"
        },
        "sourceGroup": "2016-2-2",
        "templateFamily": "2016-2-2"
      },
      {
        "n": 8,
        "stem": "Which of these polynomials has \\(\\sqrt[3]2+\\sqrt[3]3\\) as a root?",
        "opts": [
          "\\(x^9-15x^6+75x^3-125\\)",
          "\\(x^9-5x^6-87x^3-125\\)",
          "\\(x^9-15x^6-162x^3-125\\)",
          "\\(x^9-15x^6-87x^3-125\\)",
          "\\(x^6-10x^3-6x+25\\)"
        ],
        "correct": 3,
        "sol": "<p>Put x=∛2+∛3. Cubing gives x³=5+3∛6x. Thus (x³−5)³=27·6x³=162x³. Expanding the left side gives x⁹−15x⁶+75x³−125. Subtracting 162x³ produces x⁹−15x⁶−87x³−125. No complex numbers or generalised binomial expansion is required.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 4(iv). Catalogue: Direct.</a></p>",
        "topic": "Surds / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S046",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "4(iv)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-4",
        "templateFamily": "polynomial-surds"
      },
      {
        "n": 9,
        "stem": "For −1&lt;r&lt;1 put q=1+2r+3r² and T=1/(1−r)². Which values of q give exactly two possible values of T?",
        "opts": [
          "\\(2/3&lt;q&lt;6\\)",
          "\\(2/3&lt;q&lt;2\\)",
          "\\(2/3\\le q\\le2\\)",
          "\\(2/3&lt;q\\le2\\)",
          "\\(2&lt;q&lt;6\\)"
        ],
        "correct": 1,
        "sol": "<p>Here q=3(r+1/3)²+2/3. Its minimum occurs at r=−1/3. The left branch approaches q=2 as r approaches −1, while the right branch approaches 6 as r approaches 1. Both roots lie in (−1,1) precisely for 2/3&lt;q&lt;2. At the minimum they coincide, and at q=2 one root is the forbidden −1. T is strictly increasing on this domain, so two r values give two distinct T values.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper I, question 4(ii), uniqueness ranges. Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S129",
        "stepSource": {
          "year": 2017,
          "paper": "I",
          "part": "4(ii), uniqueness ranges",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf"
        },
        "sourceGroup": "2017-1-4",
        "templateFamily": "geometric-uniqueness"
      },
      {
        "n": 10,
        "stem": "Positive integers p,q are coprime, n≥2, and (p/q)ⁿ is an integer N. Which argument correctly forces q=1?",
        "opts": [
          "If a prime divides q, then qⁿN=pⁿ forces that prime to divide p, contradicting coprimality",
          "Since p and q are coprime, pⁿ and qⁿ must be equal",
          "Since pⁿ is an integer, p/q must be an integer",
          "The equality qⁿN=pⁿ implies q=N",
          "The nth root of every positive integer is an integer"
        ],
        "correct": 0,
        "sol": "<p>If q&gt;1 it has a prime divisor ℓ. From qⁿN=pⁿ, ℓ divides pⁿ and therefore p. But ℓ also divides q, contradicting gcd(p,q)=1. Thus q=1 and the rational nth root is an integer. The other arguments either assume the conclusion or state false general claims.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper III, question 5(i). Catalogue: Direct.</a></p>",
        "topic": "Number theory / Reasoning",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S211",
        "stepSource": {
          "year": 2013,
          "paper": "III",
          "part": "5(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%203.pdf"
        },
        "sourceGroup": "2013-3-5",
        "templateFamily": "integer-descent"
      },
      {
        "n": 11,
        "stem": "Let \\(f(x)=A(x-p)(x-q)(x-r)\\), with p&lt;q&lt;r and A≠0. A tangent at x=a≠p passes through (p,0). What is its gradient?",
        "opts": [
          "\\(-A(q-r)^2/2\\)",
          "\\(-A(q-r)^2/4\\)",
          "\\(A(q-r)^2/4\\)",
          "\\(A(q+r)^2/4\\)",
          "\\(A(p-q)(p-r)\\)"
        ],
        "correct": 1,
        "sol": "<p>The tangent condition is f′(a)=f(a)/(a−p). Expanding the cubic before differentiating and simplifying gives (a−p)(2a−q−r)=0; since a≠p, a=(q+r)/2. The tangent gradient is then A(a−q)(a−r)=A[(r−q)/2][(q−r)/2]=−A(q−r)²/4.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 1(i). Catalogue: Direct.</a></p>",
        "topic": "Differentiation / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S104",
        "stepSource": {
          "year": 2019,
          "paper": "II",
          "part": "1(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"
        },
        "sourceGroup": "2019-2-1",
        "templateFamily": "2019-2-1"
      },
      {
        "n": 12,
        "stem": "For real \\(x\\), let \\[S(x)=\\sum_{k=0}^{\\infty}\\left\\lfloor\\frac{x+2^k}{2^{k+1}}\\right\\rfloor.\\] Here \\(\\lfloor t\\rfloor\\) is the greatest integer not exceeding \\(t\\); for each fixed x only finitely many summands are nonzero. You may use \\(\\lfloor t/2\\rfloor+\\lfloor(t+1)/2\\rfloor=\\lfloor t\\rfloor\\). Which formula holds for every real x?",
        "opts": [
          "\\(S(x)=\\lfloor |x|\\rfloor\\) for all x",
          "\\(S(x)=\\lceil x\\rceil\\) for all x",
          "\\(S(x)=\\lfloor x\\rfloor\\) for \\(x\\ge0\\), and \\(S(x)=\\lfloor x\\rfloor+1\\) for \\(x&lt;0\\)",
          "\\(S(x)=0\\) for \\(|x|&lt;1\\), and \\(S(x)=\\lfloor x\\rfloor\\) otherwise",
          "\\(S(x)=\\lfloor x\\rfloor\\) for all x",
          "\\(S(x)=\\lfloor x\\rfloor+1\\) for all x"
        ],
        "correct": 2,
        "sol": "<p>Apply the identity with t=x/2^k. The kth term equals \\(\\lfloor x/2^k\\rfloor-\\lfloor x/2^{k+1}\\rfloor\\). Therefore the sum through k=N is \\(\\lfloor x\\rfloor-\\lfloor x/2^{N+1}\\rfloor\\). For x≥0 the last floor is eventually 0. For x&lt;0 it is eventually -1, even when x is a negative integer. This gives the two cases and explains why simply using the ceiling function fails at negative integers.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 4(iii)(b). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Number Theory",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S005",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "4(iii)(b)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-4",
        "templateFamily": "floor-systems"
      },
      {
        "n": 13,
        "stem": "The curve C₁ is the union of the unit circles centred at (−1,0) and (1,0). A second curve C₂ has equation \\[(x^2+y^2-2x)(x^2+y^2+2x)=1/16.\\] You are given that at each highest point of C₂, \\(x^2=2-y^2\\). What are the height and distance from the y-axis of those points, and how does that distance compare with the highest points of C₁?",
        "opts": [
          "\\(\\sqrt{65}/8,\\ 1\\); equal",
          "\\(\\sqrt{65}/8,\\ \\sqrt{65}/8\\); farther",
          "\\(\\sqrt{63}/8,\\ \\sqrt{63}/8\\); closer",
          "\\(\\sqrt{65}/8,\\ 3\\sqrt7/8\\); closer",
          "\\(3\\sqrt7/8,\\ \\sqrt{65}/8\\); farther"
        ],
        "correct": 3,
        "sol": "<p>The supplied relation gives x²+y²=2. Substitution in C₂ gives (2−2x)(2+2x)=1/16, hence x²=63/64 and y²=65/64. At a highest point y is positive by symmetry, so the height is √65/8 and the distance from the y-axis is √63/8=3√7/8. The highest points of C₁ are (±1,1), at distance 1. Since 63/64&lt;1, the highest points of C₂ are closer to the y-axis.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 7(ii)(b)–(c). Catalogue: Supply.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S027",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "7(ii)(b)–(c)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-7",
        "templateFamily": "2024-2-7"
      },
      {
        "n": 14,
        "stem": "Two non-overlapping circles have centres A=(1,2) and B=(9,6), and radii 3 and 1. Their common external tangents intersect at P. What are the coordinates of P?",
        "opts": [
          "(−3,0)",
          "(7,5)",
          "(5,4)",
          "(13,8)",
          "(12,6)"
        ],
        "correct": 3,
        "sol": "<p>Perpendicular radii to either common tangent form similar right triangles from P, so PA/PB=3. The centres and P are collinear, with P beyond the smaller circle B. Thus P=A+(3/2)(B−A)=(1,2)+(12,6)=(13,8). Internal division would locate a different point and is inappropriate for the external tangents.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper II, question 8(i). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S172",
        "stepSource": {
          "year": 2015,
          "paper": "II",
          "part": "8(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf"
        },
        "sourceGroup": "2015-2-8",
        "templateFamily": "2015-2-8"
      },
      {
        "n": 15,
        "stem": "For real a,b consider iteration of \\(f(x)=(ax-1)/(x+b)\\), with every denominator required to be nonzero. For which a,b can some real starting value generate a nonconstant period-two sequence?",
        "opts": [
          "\\(a+b=0\\) and \\(a^2\\ne1\\)",
          "\\(ab=1\\)",
          "\\(a=b\\) and \\(a^2\\ne1\\)",
          "\\(a+b=0\\) only",
          "\\(a+b\\ne0\\)"
        ],
        "correct": 0,
        "sol": "<p>Cross-multiplying f(f(x))=x yields (a+b)[x²+(b−a)x+1]=0. If a+b≠0, the quadratic is precisely the fixed-point condition, so no nonconstant cycle occurs. If b=−a and a²≠1, direct substitution gives f(f(x))=x wherever defined, and choosing x outside the finitely many poles and fixed points yields a two-cycle. When a=±1,b=−a, cancellation makes f constant on its domain, so these cases cannot work.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper II, question 2(i). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S134",
        "stepSource": {
          "year": 2017,
          "paper": "II",
          "part": "2(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf"
        },
        "sourceGroup": "2017-2-2",
        "templateFamily": "two-cycle"
      },
      {
        "n": 16,
        "stem": "Let R&gt;0, 0&lt;w&lt;R and \\(\\pi/3\\le\\alpha\\le\\pi/2\\). A circle centred at (0,−d), where d&gt;0, has radius R+d and passes through \\(((R+w)\\sin\\alpha,(R+w)\\cos\\alpha)\\). What is d?",
        "opts": [
          "\\(\\dfrac{w(2R+w)}{2[R-(R+w)\\cos\\alpha]}\\)",
          "\\(\\dfrac{w(2R+w)}{2[R+(R+w)\\cos\\alpha]}\\)",
          "\\(\\dfrac{w(2R+w)}{R-(R+w)\\cos\\alpha}\\)",
          "\\(\\dfrac{w^2}{2[R-(R+w)\\cos\\alpha]}\\)",
          "\\(\\dfrac{w(2R+w)}{2(R+w)(1-\\cos\\alpha)}\\)"
        ],
        "correct": 0,
        "sol": "<p>The squared distance to the centre equals (R+d)². Expanding and using sin²α+cos²α=1 gives (R+w)²+2d(R+w)cosα+d²=R²+2Rd+d². Hence 2d[R−(R+w)cosα]=w(2R+w). The denominator is positive because cosα≤1/2 and w&lt;R, so division gives the stated positive d.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 6(ii)(a). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S077",
        "stepSource": {
          "year": 2021,
          "paper": "II",
          "part": "6(ii)(a)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"
        },
        "sourceGroup": "2021-2-6",
        "templateFamily": "2021-2-6"
      },
      {
        "n": 17,
        "stem": "For positive sequences write s≼t when there is an integer M such that sₙ≤tₙ for every n≥M. Consider I: if s≼t is false then t≼s; II: if s≼t and t≼u then s≼u. Which statements always hold?",
        "opts": [
          "Neither",
          "I only",
          "Both",
          "Both, but only for increasing sequences",
          "II only"
        ],
        "correct": 4,
        "sol": "<p>I is false: take sₙ=2+(−1)ⁿ and tₙ=2. Infinitely many terms of s lie above t and infinitely many below, so neither eventual comparison holds. II is true: if the two comparisons hold from M₁ and M₂ respectively, then sₙ≤tₙ≤uₙ for every n≥max(M₁,M₂).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper III, question 2(ii)–(iii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / Reasoning",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S175",
        "stepSource": {
          "year": 2015,
          "paper": "III",
          "part": "2(ii)–(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf"
        },
        "sourceGroup": "2015-3-2",
        "templateFamily": "2015-3-2"
      },
      {
        "n": 18,
        "stem": "For real x and \\(0&lt;\\theta&lt;\\pi\\), which is the complete set of solutions of \\[9x^4+(9-12\\sin\\theta)x^2-12x\\cos\\theta+4=0?\\]",
        "opts": [
          "\\((1/\\sqrt3,\\pi/6)\\) only",
          "\\((1/\\sqrt3,\\pi/3),(-1/\\sqrt3,2\\pi/3)\\)",
          "No solutions",
          "\\((2/3,\\pi/2),(-2/3,\\pi/2)\\)",
          "\\((x,\\theta)=(1/\\sqrt3,\\pi/6),(-1/\\sqrt3,5\\pi/6)\\)"
        ],
        "correct": 4,
        "sol": "<p>The left side equals (3x−2cosθ)²+(3x²−2sinθ)², using sin²θ+cos²θ=1. Both squares must vanish. Thus x=2cosθ/3 and x²=2sinθ/3. Eliminating x gives 2sin²θ+3sinθ−2=0, so sinθ=1/2 (the other root is −2). Within the stated interval θ=π/6 or 5π/6, giving x=±1/√3 with the corresponding signs.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 6(i). Catalogue: Direct.</a></p>",
        "topic": "Trigonometry / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 5,
        "selectionId": "S098",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "6(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-6",
        "templateFamily": "2019-1-6"
      },
      {
        "n": 19,
        "stem": "A circle centred at (a,b) touches xy=c², c&gt;0, at two distinct points. Their nonzero parameters t,u use coordinates (ct,c/t). You are given that the intersection parameters are roots of \\[c^2z^4-2acz^3+(a^2+b^2-r^2)z^2-2bcz+c^2=0,\\] and the two contacts correspond to double roots. Which relation must hold?",
        "opts": [
          "\\(a+b=c\\)",
          "\\(a^2+b^2=c^2\\)",
          "\\(a=b\\) only",
          "\\(a=b\\) or \\(a=-b\\)",
          "\\(a=-b\\) only",
          "\\(ab=c^2\\)"
        ],
        "correct": 3,
        "sol": "<p>The quartic is c²(z−t)²(z−u)². Its constant term gives t²u²=1, so tu=±1. Comparing cubic coefficients gives a=c(t+u), and comparing linear coefficients gives b=ctu(t+u). Thus b=±a. This argument also covers t+u=0, when both a and b are zero.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 1(iv). Catalogue: Supply.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S067",
        "stepSource": {
          "year": 2022,
          "paper": "III",
          "part": "1(iv)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"
        },
        "sourceGroup": "2022-3-1",
        "templateFamily": "2022-3-1"
      },
      {
        "n": 20,
        "stem": "A convex cyclic quadrilateral has consecutive side lengths 2,3,4,5. What is its area?",
        "opts": [
          "\\(4\\sqrt6\\)",
          "\\(\\sqrt{30}\\)",
          "\\(2\\sqrt{30}\\)",
          "\\(12\\)",
          "\\(10\\)"
        ],
        "correct": 2,
        "sol": "<p>Let θ be the angle between sides 2 and 5; the opposite angle is π−θ. Applying the cosine rule to the shared diagonal gives 2²+5²−20cosθ=3²+4²+24cosθ. Thus cosθ=1/11 and sinθ=√120/11. The area is the sum of the two triangle areas: (1/2)(2·5+3·4)sinθ=11sinθ=√120=2√30.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper II, question 6, quadrilateral area. Catalogue: Direct.</a></p>",
        "topic": "Geometry / Trigonometry",
        "estimatedDifficulty": 7.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S223",
        "stepSource": {
          "year": 2012,
          "paper": "II",
          "part": "6, quadrilateral area",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf"
        },
        "sourceGroup": "2012-2-6",
        "templateFamily": "2012-2-6"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice07p1v2",
    "title": "STEP practice · Year 07 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "For every non-degenerate triangle with side lengths a,b,c, consider the triples \\[A:(a+1,b+1,c+1),\\quad B:(a/b,b/c,c/a),\\quad C:(|a-b|,|b-c|,|c-a|).\\] Classify each as always, sometimes but not always, or never giving a non-degenerate triangle.",
        "opts": [
          "A always; B sometimes; C never",
          "A always; B always; C never",
          "A sometimes; B sometimes; C never",
          "A always; B never; C never",
          "A always; B sometimes; C sometimes"
        ],
        "correct": 0,
        "sol": "<p>Adding 1 to each side increases every triangle-inequality margin by 1, so A always works. B works for a=b=c; but (a,b,c)=(1,2,2) gives (1/2,1,2), which fails. For C, order the original side lengths: the largest pairwise difference equals the sum of the other two. Hence the strict triangle inequality always fails, including the cases with zero differences.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 4(iii)(A–C). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S084",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "4(iii)(A–C)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-4",
        "templateFamily": "2020-2-4"
      },
      {
        "n": 2,
        "stem": "You may use \\((1-x^6)^{-2}=\\sum_{j=0}^{\\infty}(j+1)x^{6j}\\) and \\((1-x^3)^{-1}=\\sum_{k=0}^{\\infty}x^{3k}\\) for |x|&lt;1. What is the coefficient of x²⁴ in their product?",
        "opts": [
          "15",
          "10",
          "5",
          "25",
          "55"
        ],
        "correct": 0,
        "sol": "<p>To obtain x²⁴ we need 6j+3k=24, or 2j+k=8. Thus j can be 0,1,2,3,4, with exactly one nonnegative k for each. The respective coefficients are j+1=1,2,3,4,5. Their sum is 15.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper II, question 1(i). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Algebra",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S219",
        "stepSource": {
          "year": 2012,
          "paper": "II",
          "part": "1(i)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf"
        },
        "sourceGroup": "2012-2-1",
        "templateFamily": "binomial-convolution"
      },
      {
        "n": 3,
        "stem": "For positive integers n, two real numbers Fₙ,Gₙ satisfy \\(0&lt;F_n&lt;1/(2n)\\) and \\(0&lt;G_n&lt;1/(2n+1)\\). Let \\(H_n=4F_n+7G_n\\). What is the smallest n for which these bounds alone guarantee that Hₙ cannot be an integer?",
        "opts": [
          "5",
          "11",
          "6",
          "7",
          "4",
          "10"
        ],
        "correct": 2,
        "sol": "<p>The bounds imply \\(0&lt;H_n&lt;4/(2n)+7/(2n+1)\\). This upper bound decreases with n. At n=5 it is 2/5+7/11=57/55&gt;1, so the bounds still permit H₅=1. At n=6 it is 1/3+7/13=34/39&lt;1, excluding every integer. Thus 6 is first. More explicitly, when the upper bound exceeds 1, the positive open ranges of the summands have an open interval sum containing 1, so no earlier n is guaranteed.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 7(v). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Number Theory",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S037",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "7(v)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-7",
        "templateFamily": "2024-3-7"
      },
      {
        "n": 4,
        "stem": "Tangents to xy=1/2 at (p,1/(2p)) and (q,1/(2q)), where p,q are distinct positive numbers, meet at T. What are the coordinates of T?",
        "opts": [
          "\\(((p+q)/2,(p+q)/(4pq))\\)",
          "\\(((p+q)/2,1/(p+q))\\)",
          "\\((pq/(p+q),2/(p+q))\\)",
          "\\((2pq/(p-q),1/(p-q))\\)",
          "\\((2pq/(p+q),1/(p+q))\\)"
        ],
        "correct": 4,
        "sol": "<p>The derivative of y=1/(2x) at p is −1/(2p²), so its tangent is x+2p²y=2p. Similarly x+2q²y=2q. Subtract and divide by p−q to obtain 2(p+q)y=2, then substitute back: y=1/(p+q),x=2pq/(p+q).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper I, question 4, tangent intersection. Catalogue: Direct.</a></p>",
        "topic": "Differentiation / Coordinate geometry",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S214",
        "stepSource": {
          "year": 2012,
          "paper": "I",
          "part": "4, tangent intersection",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf"
        },
        "sourceGroup": "2012-1-4",
        "templateFamily": "2012-1-4"
      },
      {
        "n": 5,
        "stem": "Five real numbers \\(a,b,1,-2,3\\) have sum zero and cube sum zero. If \\(a&gt;b\\), what are a and b?",
        "opts": [
          "\\(a=1+\\sqrt3,\\ b=1-\\sqrt3\\)",
          "\\(a=-1+\\sqrt3,\\ b=-1-\\sqrt3\\)",
          "\\(a=1,\\ b=-3\\)",
          "\\(a=2,\\ b=-4\\)",
          "\\(a=-1+\\sqrt2,\\ b=-1-\\sqrt2\\)",
          "\\(a=-1+\\sqrt5,\\ b=-1-\\sqrt5\\)"
        ],
        "correct": 1,
        "sol": "<p>The linear condition gives a+b=-2. Since 1³+(-2)³+3³=20, we also have a³+b³=-20. Expand (a+b)³=a³+b³+3ab(a+b): -8=-20-6ab, so ab=-2. Hence a,b are the roots of t²+2t-2=0, namely -1±√3. The ordering chooses the plus sign for a. These satisfy both original sums.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 6(iv). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S018",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "6(iv)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-6",
        "templateFamily": "2025-3-6"
      },
      {
        "n": 6,
        "stem": "Three positive consecutive terms of a geometric sequence have sum 13 and product 27. Which is the complete set of possible values of the next term?",
        "opts": [
          "{3,27}",
          "{1/9,81}",
          "{27} only",
          "{1,9}",
          "{1/3,27}"
        ],
        "correct": 4,
        "sol": "<p>Write the terms a/r,a,ar with a,r&gt;0. Their product a³=27 gives a=3. Their sum gives r+1/r=10/3, so 3r²−10r+3=0 and r=3 or 1/3. The fourth term is ar²=3r², giving 27 or 1/3. Both orders of the first three terms are allowed.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "O006",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O006",
        "templateFamily": "O006"
      },
      {
        "n": 7,
        "stem": "A family of lines is \\(y=tx-t^3\\), with real parameter t. Two distinct perpendicular members meet at (x,y). What is the complete locus of their intersection?",
        "opts": [
          "\\(x=y^2-1\\)",
          "\\(x=y^2+1,\\ y\\ge0\\)",
          "\\(y=x^2+1\\)",
          "\\(x=1-y^2\\)",
          "\\(x=y^2+1\\)"
        ],
        "correct": 4,
        "sol": "<p>For parameters p≠q, subtract the line equations: x=(p³−q³)/(p−q)=p²+pq+q². Perpendicularity gives pq=−1. Put u=p+q; then x=u²+1 and y=px−p³=pq(p+q)=−u. Hence x=y²+1. Every real u is possible because p,q are the distinct real roots of t²−ut−1=0, whose discriminant is u²+4&gt;0.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 2, tangent intersection. Catalogue: Supply.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S096",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "2, tangent intersection",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-2",
        "templateFamily": "2019-1-2"
      },
      {
        "n": 8,
        "stem": "Let a&gt;0, p&gt;0 and q&lt;0. Points P=(ap²,2ap), Q=(aq²,2aq) lie on y²=4ax. Their tangents are y=x/p+ap and y=x/q+aq. They meet at R and meet the y-axis at S and T respectively. If O is the origin, what is area(OPQ)/area(RST)? You may use area(OXY)=|x₁y₂−x₂y₁|/2 for X=(x₁,y₁), Y=(x₂,y₂).",
        "opts": [
          "\\((p-q)^2/(-pq)\\)",
          "1",
          "4",
          "2",
          "1/2"
        ],
        "correct": 3,
        "sol": "<p>The tangent intersection is R=(apq,a(p+q)). The vertical base ST has length a(p−q), and R has distance −apq from the y-axis, so area(RST)=−a²pq(p−q)/2. The triangle OPQ has area |(ap²)(2aq)−(aq²)(2ap)|/2=−a²pq(p−q). The ratio is therefore 2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper I, question 3. Catalogue: Supply.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S127",
        "stepSource": {
          "year": 2017,
          "paper": "I",
          "part": "3",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf"
        },
        "sourceGroup": "2017-1-3",
        "templateFamily": "2017-1-3"
      },
      {
        "n": 9,
        "stem": "Let \\(x_0=1\\) and \\(x_{n+1}=(x_n+2)/(x_n+1)\\). Which interval is guaranteed to contain \\(x_{10}^2\\)?",
        "opts": [
          "\\([2-10^{-10},2)\\)",
          "\\([2-10^{-6},2)\\)",
          "\\((2,2+10^{-6}]\\)",
          "\\((2,2+10^{-10}]\\)",
          "\\([1,1+10^{-6}]\\)"
        ],
        "correct": 1,
        "sol": "<p>All terms are at least 1. Direct algebra gives \\(x_{n+1}^2-2=-(x_n^2-2)/(x_n+1)^2\\). Hence the error changes sign and its magnitude decreases by at least a factor 4 each step. Since the initial error is -1, the tenth error is negative and has magnitude at most 4^-10=1/1048576&lt;10^-6. It is nonzero because the recurrence never turns a nonzero error into zero. The stronger 10^-10 bound does not follow and is false for this term.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 5(i)(b)–(c). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S047",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "5(i)(b)–(c)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-5",
        "templateFamily": "convergence-estimate"
      },
      {
        "n": 10,
        "stem": "For x≠0,2, an identity has the form \\[\\frac1{x^4(x-2)}=\\frac A{x-2}+\\frac{f(x)}{x^4},\\] where f is a polynomial of degree at most 3. What is f(x)?",
        "opts": [
          "\\(-(x^3+2x^2+4x+8)/16\\)",
          "\\((x^3+2x^2+4x+8)/16\\)",
          "\\(-(x^3+4x^2+8x+16)/16\\)",
          "\\(-(x^3-2x^2+4x-8)/16\\)",
          "\\(-(x^3+2x^2+4x+8)/8\\)"
        ],
        "correct": 0,
        "sol": "<p>Multiply through by x⁴(x−2): 1=Ax⁴+(x−2)f(x), a polynomial identity which also holds at x=2. Hence A=1/16. Now f(x)=(16−x⁴)/[16(x−2)]=−(x+2)(x²+4)/16. Expanding gives the answer.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 5(i)(a). Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S090",
        "stepSource": {
          "year": 2020,
          "paper": "III",
          "part": "5(i)(a)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"
        },
        "sourceGroup": "2020-3-5",
        "templateFamily": "2020-3-5"
      },
      {
        "n": 11,
        "stem": "Let \\(f(x)=7-2|x|\\), and \\(u_{n+1}=f(u_n)\\). You may use the three-cycle \\(1\\to5\\to-3\\to1\\). How many real starting values u₀ first enter this cycle at u₃, and what is the largest such starting value?",
        "opts": [
          "6 and 6",
          "8 and 7",
          "12 and 6",
          "12 and 13/2",
          "24 and 13/2",
          "6 and 13/2"
        ],
        "correct": 3,
        "sol": "<p>The preimages of the three cycle members are ±1,±3,±5. Removing the cycle itself leaves −1,3,−5 as the values first entering after one step. Their preimages are ±4,±2,±6, six values first entering after two steps. Each has two distinct preimages, since solving 7−2|x|=b gives x=±(7−b)/2 and every listed b is less than 7. These twelve distinct values first enter after three steps. The largest comes from b=−6 and is (7+6)/2=13/2.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 2(ii)(c). Catalogue: Supply.</a></p>",
        "topic": "Functions and Graphs / Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S014",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "2(ii)(c)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-2",
        "templateFamily": "2025-3-2"
      },
      {
        "n": 12,
        "stem": "Let \\(\\alpha=99/100\\), and for \\(1\\le r\\le200\\) set \\(u_r=(2-r)\\alpha^{r-1}+2(r-1)\\alpha^{r-2}\\). At which index is uᵣ largest?",
        "opts": [
          "99 only",
          "101 only",
          "100 only",
          "99 and 100",
          "100 and 101"
        ],
        "correct": 2,
        "sol": "<p>Write uᵣ=α^(r−2)[(2−α)r+2α−2]. Subtraction gives uᵣ₊₁−uᵣ=α^(r−2)[(α−1)(2−α)r+α(2−α)+2(α−1)²]. Substituting α=99/100 makes the bracket (10001−101r)/10000. It is positive for integer r≤99 and negative for r≥100. Consequently the unique maximum is u₁₀₀.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 3(ii), maximum index. Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S083",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "3(ii), maximum index",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-3",
        "templateFamily": "2020-2-3"
      },
      {
        "n": 13,
        "stem": "A uniformly random ordering of six labelled cards is placed in six matching labelled positions. You may use that a uniformly random ordering of m cards has no correct positions with probability \\(d_m=\\sum_{j=0}^m(-1)^j/j!\\). What is the probability of exactly one correct position among the six cards?",
        "opts": [
          "53/144",
          "11/180",
          "1/6",
          "11/30",
          "19/30"
        ],
        "correct": 3,
        "sol": "<p>Choose the correct card in 6 ways. For each choice the probability it is in its place is 1/6, and conditionally the remaining five cards form a uniform ordering. Requiring no other correct positions contributes d₅. These six events are disjoint, giving 6·(1/6)d₅=d₅=1−1+1/2−1/6+1/24−1/120=11/30.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper II, question 12, final probability. Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S155",
        "stepSource": {
          "year": 2016,
          "paper": "II",
          "part": "12, final probability",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf"
        },
        "sourceGroup": "2016-2-12",
        "templateFamily": "2016-2-12"
      },
      {
        "n": 14,
        "stem": "You may use \\[\\sin(2nt)=2\\sin t\\sum_{r=1}^n\\cos((2r-1)t)\\] for positive integers n. What is the exact value of \\[\\sin\\frac\\pi{14}-\\sin\\frac{3\\pi}{14}+\\sin\\frac{5\\pi}{14}?\\]",
        "opts": [
          "\\(1\\)",
          "\\(1/2\\)",
          "\\(\\sqrt3/2\\)",
          "\\((\\sqrt5-1)/4\\)",
          "\\(\\sqrt2/2\\)",
          "\\(0\\)"
        ],
        "correct": 1,
        "sol": "<p>Apply the identity with n=3 and t=π/7. Since sin(6π/7)=sin(π/7), it gives cos(π/7)+cos(3π/7)+cos(5π/7)=1/2. Now cos(π/7)=sin(5π/14), cos(3π/7)=sin(π/14), and cos(5π/7)=-cos(2π/7)=-sin(3π/14). The cosine sum is therefore exactly the required alternating sine sum.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 8(iii). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S019",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "8(iii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-8",
        "templateFamily": "2025-3-8"
      },
      {
        "n": 15,
        "stem": "You may use \\(\\int_0^{\\pi}f(x)^2\\,dx\\le\\int_0^{\\pi}f\\prime(x)^2\\,dx\\) whenever f(0)=f(π)=0. Applying this with f(x)=x(π−x) gives which upper bound for π² after exact evaluation?",
        "opts": [
          "8",
          "15",
          "10",
          "9",
          "12"
        ],
        "correct": 2,
        "sol": "<p>Expand f²=π²x²−2πx³+x⁴. Its integral is π⁵(1/3−1/2+1/5)=π⁵/30. Also f′=π−2x, so the integral of f′² is π³(1−2+4/3)=π³/3. The inequality yields π⁵/30≤π³/3; divide by the positive π³ to obtain π²≤10.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper II, question 2(ii), polynomial test. Catalogue: Supply.</a></p>",
        "topic": "Integration / Inequalities",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S188",
        "stepSource": {
          "year": 2014,
          "paper": "II",
          "part": "2(ii), polynomial test",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf"
        },
        "sourceGroup": "2014-2-2",
        "templateFamily": "2014-2-2"
      },
      {
        "n": 16,
        "stem": "A real-valued function g on the real numbers other than 1 satisfies \\(g(x)+xg((x+1)/(x-1))=x\\) for every x≠1. Which expression gives g(x) throughout its domain?",
        "opts": [
          "\\(2x/(x^2+1)\\)",
          "\\(x/(x^2+1)\\)",
          "\\(x/(x+1)\\)",
          "\\(2x/(x^2-1)\\)",
          "\\(2/(x^2+1)\\)"
        ],
        "correct": 0,
        "sol": "<p>Write t=(x+1)/(x−1); then (t+1)/(t−1)=x. The two equations are g(x)+xg(t)=x and g(t)+tg(x)=t. Eliminating g(t) gives (1−xt)g(x)=x(1−t). Substitution and simplification yield g(x)=2x/(x²+1). Here 1−xt=−(x²+1)/(x−1) never vanishes for real x≠1, so no exceptional value was lost.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper III, question 8(ii). Catalogue: Direct.</a></p>",
        "topic": "Functions / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S159",
        "stepSource": {
          "year": 2016,
          "paper": "III",
          "part": "8(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf"
        },
        "sourceGroup": "2016-3-8",
        "templateFamily": "functional-equation"
      },
      {
        "n": 17,
        "stem": "For which real k does \\(x^3-3kx+2=0\\) have three distinct real roots?",
        "opts": [
          "k≥1",
          "k&lt;1",
          "k&gt;0",
          "k&lt;−1 or k&gt;1",
          "k&gt;1"
        ],
        "correct": 4,
        "sol": "<p>For k≤0 the derivative 3x²−3k is nonnegative, and the cubic is strictly increasing, so there is only one root. For k&gt;0 the local maximum at −√k has value 2+2k√k&gt;0; the local minimum at √k has value 2−2k√k. Three crossings require the minimum to be negative, equivalent to k√k&gt;1, hence k&gt;1. At k=1 one root is repeated, so the inequality is strict.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Differentiation / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "O005",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O005",
        "templateFamily": "O005"
      },
      {
        "n": 18,
        "stem": "A fair coin is tossed until either HHT or THH first occurs as three consecutive outcomes. What is the probability that HHT occurs first?",
        "opts": [
          "1/2",
          "1/3",
          "3/4",
          "1/4",
          "3/8"
        ],
        "correct": 3,
        "sol": "<p>If the first two tosses are HH, the first subsequent T completes HHT, and THH cannot have occurred earlier. If the first two tosses are not HH, any later first pair HH is preceded by T, completing THH before HHT can occur. Thus HHT wins exactly when the first two tosses are HH, with probability 1/4 (an infinite run of heads has probability zero).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper II, question 12(i) or (ii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S174",
        "stepSource": {
          "year": 2015,
          "paper": "II",
          "part": "12(i) or (ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf"
        },
        "sourceGroup": "2015-2-12",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 19,
        "stem": "Numbers b&gt;a≥0 satisfy \\(\\int_a^b x^2\\,dx=(\\int_a^b x\\,dx)^2\\). What is the exact set of possible values of b−a?",
        "opts": [
          "\\((1,4/3)\\)",
          "\\((1,4/3]\\)",
          "\\([1,\\infty)\\)",
          "\\((0,4/3]\\)",
          "\\([1,4/3]\\)"
        ],
        "correct": 1,
        "sol": "<p>Put p=b+a and q=b−a&gt;0. The integrals are q(3p²+q²)/12 and pq/2. The equation simplifies to 3p²+q²=3p²q, hence p²=q²/[3(q−1)], which forces q&gt;1. The condition a≥0 is p≥q, giving 1/[3(q−1)]≥1, or q≤4/3. Conversely each q in this interval gives p=q/√(3(q−1))≥q and hence valid a=(p−q)/2,b=(p+q)/2. The upper endpoint corresponds to a=0.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 3(iii). Catalogue: Direct.</a></p>",
        "topic": "Integration / Inequalities",
        "estimatedDifficulty": 7.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S182",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "3(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-3",
        "templateFamily": "2014-1-3"
      },
      {
        "n": 20,
        "stem": "Real numbers x,y,z lie in [-1,1] and satisfy \\(y=2x^2-1\\), \\(z=2y^2-1\\), \\(x=2z^2-1\\). You may use \\(\\cos(2\\theta)=2\\cos^2\\theta-1\\). How many ordered triples are possible?",
        "opts": [
          "15",
          "4",
          "8",
          "9",
          "7",
          "16"
        ],
        "correct": 2,
        "sol": "<p>Write x=cos θ uniquely with 0≤θ≤π. The system is equivalent to cos 8θ=cos θ. Its solutions have θ=2kπ/7 or θ=2kπ/9. The first family has k=0,1,2,3 and the second k=0,1,2,3,4. Their only overlap in [0,π] is θ=0: equality requires 9k=7j. Hence there are 4+5−1=8 distinct x-values, each determining one y,z pair, both still in [-1,1].</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 2(iii)(a). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry / Functions and Graphs",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S042",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "2(iii)(a)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-2",
        "templateFamily": "trig-iteration"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice08p1v2",
    "title": "STEP practice · Year 08 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "Let f(x)=√(x²−1), defined for |x|≥1, and g(x)=√(x²+1), defined for all real x. Composition f∘g means x↦f(g(x)). Which statement correctly describes both compositions?",
        "opts": [
          "Both equal |x|; f∘g has domain ℝ and range [0,∞), while g∘f has domain |x|≥1 and range [1,∞)",
          "Both equal x on all real numbers",
          "f∘g equals x and g∘f equals −x",
          "Both equal |x| with domain |x|≥1 and range [1,∞)",
          "Both equal |x| with domain ℝ and range [0,∞)"
        ],
        "correct": 0,
        "sol": "<p>Because g(x)≥1 for every real x, f(g(x))=√(x²+1−1)=|x| on all ℝ, with range [0,∞). For g(f(x)) the inner f first requires |x|≥1; simplification gives √(x²−1+1)=|x|, with range [1,∞). Simplifying the expression does not enlarge the original domain.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 8(ii). Catalogue: Supply.</a></p>",
        "topic": "Functions / Domain and range",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S203",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "8(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-8",
        "templateFamily": "2013-1-8"
      },
      {
        "n": 2,
        "stem": "Both functions have domain the integers: \\(f(n)=n^2-2n-6\\) and \\(g(n)=n^2-4n+2\\). Which set is exactly the intersection of their ranges?",
        "opts": [
          "\\(\\{0,2\\}\\)",
          "The empty set",
          "Infinitely many integers",
          "\\(\\{-7,-2,2\\}\\)",
          "\\(\\{-2,2\\}\\)",
          "\\(\\{2\\}\\)"
        ],
        "correct": 5,
        "sol": "<p>Complete squares: f(m)=(m−1)²−7 and g(n)=(n−2)²−2. A common value therefore requires u²−v²=5 for integers u,v. Thus (u−v)(u+v)=5. The integer factor pairs give |u|=3 and |v|=2. The common output is 9−7=4−2=2, and it is attained, for example by m=4,n=4. There are no other integer factor pairs.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 5(iii). Catalogue: Direct.</a></p>",
        "topic": "Number Theory / General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S024",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "5(iii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-5",
        "templateFamily": "2024-2-5"
      },
      {
        "n": 3,
        "stem": "In the expansion of (2+3x)⁹, which powers of x have the largest coefficient?",
        "opts": [
          "x⁵ and x⁶",
          "x⁵ only",
          "x⁴ and x⁵",
          "x⁶ only",
          "x⁷ only"
        ],
        "correct": 0,
        "sol": "<p>The coefficient is cᵣ=C(9,r)2⁹⁻ʳ3ʳ. The ratio cᵣ₊₁/cᵣ=3(9−r)/[2(r+1)]. It exceeds 1 for r&lt;5, equals 1 for r=5, and is below 1 for r&gt;5. Thus c₅=c₆ are the largest. The equal-ratio case creates two maxima.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper II, question 8, maximum coefficient. Catalogue: Direct.</a></p>",
        "topic": "Binomial expansions",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S191",
        "stepSource": {
          "year": 2014,
          "paper": "II",
          "part": "8, maximum coefficient",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf"
        },
        "sourceGroup": "2014-2-8",
        "templateFamily": "2014-2-8"
      },
      {
        "n": 4,
        "stem": "A bag contains 4 red and 3 blue counters. Three counters are drawn uniformly without replacement. Given that at least one is blue, what is the probability that exactly two are red?",
        "opts": [
          "18/35",
          "12/31",
          "3/5",
          "24/31",
          "18/31"
        ],
        "correct": 4,
        "sol": "<p>There are 35 equally likely three-counter subsets. Four contain only red counters, so the conditioning event contains 31 subsets. Exactly two red and one blue can be chosen in C(4,2)·3=18 ways. Each is in the conditioning event, hence the conditional probability is 18/31.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "O008",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O008",
        "templateFamily": "O008"
      },
      {
        "n": 5,
        "stem": "For x≠0 let \\(f(x)=x-x^{-1}-x^{-2}\\). Which describes its stationary point and its straight-line asymptotes?",
        "opts": [
          "No stationary point; asymptotes x=0 and y=x",
          "Local maximum (−1,−1); asymptotes x=0 and y=x",
          "Local maximum (1,−1); asymptotes x=0 and y=x",
          "Local minimum (−1,−1); asymptotes x=0 and y=x",
          "Local maximum (−1,−1); asymptotes x=0 and y=0"
        ],
        "correct": 1,
        "sol": "<p>Power differentiation gives f′(x)=1+x⁻²+2x⁻³=(x+1)(x²−x+2)/x³. The quadratic factor is positive, so the only stationary point is x=−1, f=−1. The derivative changes from positive to negative there, giving a maximum. As x→0 the −x⁻² term dominates, while f(x)−x→0 as |x|→∞. Therefore the asymptotes are x=0 and y=x.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper III, question 1(i). Catalogue: Supply.</a></p>",
        "topic": "Differentiation / Functions and Graphs",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S125",
        "stepSource": {
          "year": 2018,
          "paper": "III",
          "part": "1(i)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf"
        },
        "sourceGroup": "2018-3-1",
        "templateFamily": "2018-3-1"
      },
      {
        "n": 6,
        "stem": "A candidate chooses K uniformly from {0,1,2,3,4,5}, then guesses K questions of a five-question test with n≥2 options each. You are given that passing is impossible for K≤2, while the pass probabilities for K=3,4,5 are \\(1/n^3,(4n-3)/n^4,(5n-4)/n^5\\). If the probability K=4 conditional on passing is 1/2, what is n?",
        "opts": [
          "4",
          "2",
          "6",
          "5",
          "3"
        ],
        "correct": 1,
        "sol": "<p>Equal prior probabilities of the six K values cancel in the conditional ratio. Thus P(K=4|pass)=n(4n−3)/[n²+n(4n−3)+(5n−4)]=(4n²−3n)/(5n²+2n−4). Setting this to 1/2 gives 3n²−8n+4=0, or (3n−2)(n−2)=0. The condition that n is an integer at least 2 leaves n=2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 13(ii). Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S119",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "13(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-13",
        "templateFamily": "2018-1-13"
      },
      {
        "n": 7,
        "stem": "Let F₁=F₂=1 and Fᵣ₊₂=Fᵣ₊₁+Fᵣ. You may use \\[\\sum_{r=1}^{\\infty}\\frac{F_r}{10^r}=\\frac{10}{89},\\qquad0&lt;\\sum_{r=7}^{\\infty}\\frac{F_r}{10^r}&lt;2\\cdot10^{-6}.\\] What are the first six digits after the decimal point in 1/89?",
        "opts": [
          "012358",
          "011236",
          "011238",
          "112358",
          "011235",
          "011234"
        ],
        "correct": 4,
        "sol": "<p>The first six Fibonacci numbers are 1,1,2,3,5,8, so their weighted sum is 0.112358. The stated tail gives 0.112358&lt;10/89&lt;0.112360. Divide by ten: 0.0112358&lt;1/89&lt;0.0112360. Thus its first six decimal digits are 011235. The strict upper bound is important: the sixth digit does not round upwards when truncating.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 3(iii), digits. Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Number Theory",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S062",
        "stepSource": {
          "year": 2022,
          "paper": "II",
          "part": "3(iii), digits",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"
        },
        "sourceGroup": "2022-2-3",
        "templateFamily": "2022-2-3"
      },
      {
        "n": 8,
        "stem": "Let ⌊x⌋ be the greatest integer not exceeding x. What are all nonzero real solutions of ⌊x⌋/x=17/24?",
        "opts": [
          "24/17 only",
          "17/24 and 17/12",
          "24/17 and 48/17",
          "−24/17 and 24/17",
          "24/17, 48/17 and 72/17"
        ],
        "correct": 2,
        "sol": "<p>For negative x, dividing ⌊x⌋≤x by x&lt;0 gives ⌊x⌋/x≥1, so no negative solution is possible. For positive x put n=⌊x⌋; the equation gives x=24n/17 and n must be positive. The floor condition n≤24n/17&lt;n+1 reduces to 7n&lt;17. Thus n=1 or 2, giving the listed roots.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 2(ii). Catalogue: Direct.</a></p>",
        "topic": "Functions / Inequalities",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S198",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "2(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-2",
        "templateFamily": "floor-systems"
      },
      {
        "n": 9,
        "stem": "How many distinct solutions does \\(|\\sin x|+|\\cos x|=6/5\\) have for 0≤x&lt;2π? You may use \\(\\sin2x=2\\sin x\\cos x\\).",
        "opts": [
          "4",
          "12",
          "2",
          "6",
          "8"
        ],
        "correct": 4,
        "sol": "<p>Squaring gives 1+2|sin x cos x|=36/25, hence |sin2x|=11/25. Since 0&lt;11/25&lt;1, the equation |sin t|=11/25 has four solutions in every interval of length 2π. As t=2x ranges over [0,4π), there are eight. Squaring introduced no extraneous solutions because the original sum is nonnegative.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Trigonometry / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "O011",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O011",
        "templateFamily": "O011"
      },
      {
        "n": 10,
        "stem": "A monic quartic f has distinct roots 0&lt;a&lt;b&lt;c together with 0. The unsigned areas between its graph and the x-axis on [0,a], [a,b], [b,c] are K,2K,K respectively, where K&gt;0. Let \\(F(x)=\\int_0^x f(t)\\,dt\\). Which describes the turning points of F?",
        "opts": [
          "Minima at 0 and b; maxima at a and c; F(a)=K, F(b)=−K, F(c)=0",
          "Maxima at 0 and b; minima at a and c; F(a)=−K, F(b)=K, F(c)=0",
          "Maximum at b only; minima at a and c; F(c)=0",
          "Maxima at a and c; minima at 0 and b; F(a)=−K, F(b)=K",
          "Maxima at 0 and b; minima at a and c; F(a)=−K, F(b)=2K, F(c)=K"
        ],
        "correct": 1,
        "sol": "<p>Because f is monic with four simple roots, its signs from left to right are +,−,+,−,+. These are the signs of F′, giving maxima at 0,b and minima at a,c. Signed integration gives F(a)=−K, F(b)=−K+2K=K and F(c)=−K+2K−K=0.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 8(i), graph only. Catalogue: Direct.</a></p>",
        "topic": "Integration / Functions and Graphs",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S087",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "8(i), graph only",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-8",
        "templateFamily": "2020-2-8"
      },
      {
        "n": 11,
        "stem": "Let F₀=0,F₁=1 and Fₙ₊₂=Fₙ₊₁+Fₙ. What is \\(F_nF_{n+3}-F_{n+1}F_{n+2}\\) for n≥0?",
        "opts": [
          "1",
          "\\((-1)^n\\)",
          "0",
          "\\(F_n\\)",
          "\\((-1)^{n+1}\\)"
        ],
        "correct": 4,
        "sol": "<p>Call the expression Aₙ. Using the recurrence, Aₙ=FₙFₙ₊₂−Fₙ₊₁². Likewise Aₙ₊₁=Fₙ₊₁Fₙ₊₃−Fₙ₊₂². Substitute Fₙ₊₃=Fₙ₊₂+Fₙ₊₁ and Fₙ₊₂=Fₙ₊₁+Fₙ to obtain Aₙ₊₁=−Aₙ. Since A₀=−1, Aₙ=(−1)ⁿ⁺¹.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper III, question 8(ii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S228",
        "stepSource": {
          "year": 2012,
          "paper": "III",
          "part": "8(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf"
        },
        "sourceGroup": "2012-3-8",
        "templateFamily": "2012-3-8"
      },
      {
        "n": 12,
        "stem": "Let Tₙ be the number of triples of distinct rods chosen from rods of lengths 1,2,…,n that can form a triangle. Triangles of zero area are included. For integer m≥2, what is T₂ₘ−T₂ₘ₋₂?",
        "opts": [
          "\\(2(m-1)^2\\)",
          "\\((m-1)(2m-3)\\)",
          "\\((m-1)(2m-1)\\)",
          "\\(m(2m-1)\\)",
          "\\(m(m-1)\\)"
        ],
        "correct": 2,
        "sol": "<p>New triangles have largest side 2m or 2m−1. For largest side 2m, summing valid choices of the other sides gives (1+⋯+(m−1))+(1+⋯+(m−1))=m(m−1). For largest side 2m−1 the two sums are (1+⋯+(m−1))+(1+⋯+(m−2))=(m−1)². The total is (m−1)(2m−1). These counts use a+b≥c, so zero-area triangles are included.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper II, question 3, finite differences. Catalogue: Direct.</a></p>",
        "topic": "Counting / Sequences and Series",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S169",
        "stepSource": {
          "year": 2015,
          "paper": "II",
          "part": "3, finite differences",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf"
        },
        "sourceGroup": "2015-2-3",
        "templateFamily": "2015-2-3"
      },
      {
        "n": 13,
        "stem": "Let −1&lt;r&lt;1, p=1+r+r² and S=1/(1−r). Exactly which values of p determine one and only one possible S?",
        "opts": [
          "\\(3/4&lt;p&lt;1\\)",
          "\\(3/4\\le p&lt;3\\)",
          "\\(p=3/4\\) or \\(1&lt;p&lt;3\\)",
          "\\(p=3/4\\) or \\(1\\le p&lt;3\\)",
          "\\(1&lt;p&lt;3\\) only"
        ],
        "correct": 3,
        "sol": "<p>Complete the square: p=(r+1/2)²+3/4. At p=3/4 there is one r. Between 3/4 and 1 there are two admissible r values. At p=1 the algebraic roots are 0 and −1, but −1 is excluded, leaving one. From 1 to 3 only the increasing branch lies in (−1,1). The upper endpoint 3 is not attained. Since S is one-to-one in r, these are also the counts for S.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper I, question 4(i). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S128",
        "stepSource": {
          "year": 2017,
          "paper": "I",
          "part": "4(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf"
        },
        "sourceGroup": "2017-1-4",
        "templateFamily": "geometric-uniqueness"
      },
      {
        "n": 14,
        "stem": "Two curves y=4−x² and 12x=k−y² touch. You may use that their intersection x-coordinates are roots of \\(F(x)=x^4-8x^2+12x+16-k\\), and a contact gives a repeated root. Which is the list of all possible contact x-coordinates?",
        "opts": [
          "\\(0,2,-2\\)",
          "\\(1\\) only",
          "\\(1,(-1+\\sqrt{17})/2,(-1-\\sqrt{17})/2\\)",
          "\\(1,(-1+\\sqrt{13})/2,(-1-\\sqrt{13})/2\\)",
          "\\(-1,(1+\\sqrt{13})/2,(1-\\sqrt{13})/2\\)"
        ],
        "correct": 3,
        "sol": "<p>A repeated root a satisfies F′(a)=4a³−16a+12=0. Factoring gives a³−4a+3=(a−1)(a²+a−3). Thus the possible a values are 1 and (−1±√13)/2. For each, choose k=a⁴−8a²+12a+16 to ensure F(a)=0; the original curves then meet tangentially there. None is zero, so the usual curve slopes are well defined at contact.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper III, question 3(ii). Catalogue: Supply.</a></p>",
        "topic": "Polynomials / Differentiation",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S226",
        "stepSource": {
          "year": 2012,
          "paper": "III",
          "part": "3(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%203.pdf"
        },
        "sourceGroup": "2012-3-3",
        "templateFamily": "2012-3-3"
      },
      {
        "n": 15,
        "stem": "Fix 0&lt;a&lt;1. A line of finite real slope through (a,0) cuts the unit circle in a chord with midpoint M. What is the complete locus of M as the slope varies?",
        "opts": [
          "\\((x-a/2)^2+y^2=a^2/4\\), excluding (a,0)",
          "The same circle including every point",
          "The line segment from (0,0) to (a,0)",
          "\\((x+a/2)^2+y^2=a^2/4\\)",
          "\\(x^2+y^2=a^2\\)"
        ],
        "correct": 0,
        "sol": "<p>The radius to a chord midpoint is perpendicular to the chord. Thus, except when M=O, triangle OMA has a right angle at M, so M lies on the circle with diameter OA. Algebra with slope b gives x=ab²/(1+b²), y=−ab/(1+b²). These cover that circle except (a,0), which would require a vertical chord, excluded by finite slope. The origin is attained at b=0.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper II, question 4(ii)(a). Catalogue: Direct.</a></p>",
        "topic": "Coordinate geometry",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S207",
        "stepSource": {
          "year": 2013,
          "paper": "II",
          "part": "4(ii)(a)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%202.pdf"
        },
        "sourceGroup": "2013-2-4",
        "templateFamily": "2013-2-4"
      },
      {
        "n": 16,
        "stem": "A monic cubic \\(P(x)=x^3-ax^2+bx-c\\) has roots a,b,c, including multiplicity, where a,b,c are real. Which is the complete list of possible polynomials?",
        "opts": [
          "\\(x^3\\) only",
          "\\(x^3+x^2-x-1\\) only",
          "\\(x^3-ax^2\\) for any real a, and \\(x^3+x^2-x-1\\)",
          "\\(x^3-ax^2\\) for any real a, and \\(x^3-x^2-x+1\\)",
          "\\(x^3-ax^2\\) for any real a only"
        ],
        "correct": 2,
        "sol": "<p>Comparing (x−a)(x−b)(x−c) with the stated coefficients gives b+c=0, ab+ac+bc=b and abc=c. Thus c=−b and −b²=b, so b=0 or −1. If b=0 then c=0 and a is arbitrary, giving x³−ax². If b=−1 then c=1 and the product condition gives a=−1, producing x³+x²−x−1=(x+1)²(x−1). Both families satisfy the requirements.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper III, question 4(i), cubic case. Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S110",
        "stepSource": {
          "year": 2019,
          "paper": "III",
          "part": "4(i), cubic case",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf"
        },
        "sourceGroup": "2019-3-4",
        "templateFamily": "2019-3-4"
      },
      {
        "n": 17,
        "stem": "For 0≤x,y≤π, find all pairs satisfying \\(\\cos x+\\cos y-\\cos(x+y)=3/2\\). You may use \\(\\cos x+\\cos y=2\\cos((x+y)/2)\\cos((x-y)/2)\\) and \\(\\cos2t=2\\cos^2t-1\\).",
        "opts": [
          "(π/3,2π/3) and (2π/3,π/3)",
          "No pairs",
          "(π/3,π/3) only",
          "(π/3,π/3) and (2π/3,2π/3)",
          "(π/6,π/6) only"
        ],
        "correct": 2,
        "sol": "<p>Put u=(x+y)/2, v=(x−y)/2, t=cos u. The expression is 1+2t cos v−2t². Here cos v≥0. If t≤0 the expression is at most 1. If t&gt;0, cos v≤1 gives an upper bound 1+2t−2t²=3/2−2(t−1/2)². Equality requires t=1/2 and cos v=1. The allowed ranges then force u=π/3 and v=0, hence x=y=π/3.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 4(iii). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S123",
        "stepSource": {
          "year": 2018,
          "paper": "II",
          "part": "4(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"
        },
        "sourceGroup": "2018-2-4",
        "templateFamily": "2018-2-4"
      },
      {
        "n": 18,
        "stem": "For |x|&lt;1, you may use \\((1-x^6)^{-2}=\\sum_{j≥0}(j+1)x^{6j}\\), \\((1-x^3)^{-1}=\\sum_{k≥0}x^{3k}\\) and \\((1-x)^{-1}=\\sum_{l≥0}x^l\\). What is the coefficient of x²⁵ in the product of all three series?",
        "opts": [
          "70",
          "55",
          "60",
          "15",
          "50"
        ],
        "correct": 1,
        "sol": "<p>The indices satisfy 6j+3k+l=25. For fixed j=0,…,4, each k from 0 to floor((25−6j)/3)=8−2j gives one l, so there are 9−2j terms, each weighted j+1. The sum is 1·9+2·7+3·5+4·3+5·1=55.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper II, question 1(ii). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Counting",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S220",
        "stepSource": {
          "year": 2012,
          "paper": "II",
          "part": "1(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf"
        },
        "sourceGroup": "2012-2-1",
        "templateFamily": "binomial-convolution"
      },
      {
        "n": 19,
        "stem": "For a real parameter c, how many distinct real solutions does |x|+|x−2|=|x−c| have?",
        "opts": [
          "0 if 0≤c≤2; 2 otherwise",
          "0 if 0&lt;c&lt;2; infinitely many if c=0 or c=2; 2 otherwise",
          "2 for every c",
          "0 if 0&lt;c&lt;2; 1 if c=0 or c=2; 2 otherwise",
          "1 for every c"
        ],
        "correct": 3,
        "sol": "<p>When 0&lt;c&lt;2, the distance |x−c| is strictly smaller than |x|+|x−2| everywhere. At c=0 equality forces |x−2|=0, so x=2; at c=2 it forces x=0. If c&lt;0, the difference F=|x|+|x−2|−|x−c| is positive at both infinities, strictly decreases to a negative value then increases, crossing zero exactly twice. One can check the intervals split at c,0,2. Reflection x↦2−x gives the same result for c&gt;2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper II, question 7(ii). Catalogue: Direct.</a></p>",
        "topic": "Graphs / Modulus",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S189",
        "stepSource": {
          "year": 2014,
          "paper": "II",
          "part": "7(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%202.pdf"
        },
        "sourceGroup": "2014-2-7",
        "templateFamily": "modulus-piecewise"
      },
      {
        "n": 20,
        "stem": "The solution set of \\(|x^2+px+q|\\le mx+c\\) is \\([-5,1]\\cup[5,7]\\). Which quadruple \\((p,q,m,c)\\) has this property?",
        "opts": [
          "\\((-4,-15,2,20)\\)",
          "\\((-4,15,-2,20)\\)",
          "\\((-4,-15,-2,-20)\\)",
          "\\((-4,-15,-2,20)\\)",
          "\\((-6,5,-2,20)\\)",
          "\\((-2,-35,-4,5)\\)"
        ],
        "correct": 3,
        "sol": "<p>For the stated coefficients, the upper inequality x²−4x−15≤−2x+20 is \\((x+5)(x-7)\\le0\\), giving [-5,7]. The lower inequality x²−4x−15≥2x−20 is \\((x-1)(x-5)\\ge0\\), giving x≤1 or x≥5. Their intersection is exactly the stated union. The right side is nonnegative there. These two bounding quadratics also recover the coefficients uniquely from the four simple endpoints.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 2(iv). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Functions and Graphs",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 5,
        "selectionId": "S034",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "2(iv)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-2",
        "templateFamily": "2024-3-2"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice09p1v2",
    "title": "STEP practice · Year 09 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "What is the solution set of \\(\\log_2(x-1)+\\log_2(x+1)\\le3+\\log_2x\\)?",
        "opts": [
          "\\(x\\ge4+\\sqrt{17}\\)",
          "\\(4-\\sqrt{17}\\le x\\le4+\\sqrt{17}\\)",
          "\\(1\\le x\\le4+\\sqrt{17}\\)",
          "\\(1&lt;x\\le4+\\sqrt{17}\\)",
          "\\(0&lt;x\\le4+\\sqrt{17}\\)"
        ],
        "correct": 3,
        "sol": "<p>The logarithms require x&gt;1. Combining logs and using that base 2 is increasing gives x²−1≤8x, or (x−4)²≤17. This gives 4−√17≤x≤4+√17 before the domain is imposed. Since 4−√17&lt;0, intersection with x&gt;1 gives the stated interval.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Exponentials and Logarithms",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "O001",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O001",
        "templateFamily": "O001"
      },
      {
        "n": 2,
        "stem": "A sequence satisfies \\(v_{n+1}=(v_{n+2}+v_n)/2-p\\) for n≥1, with p≠0 and v₁=v₂=0. Which formula gives vₙ?",
        "opts": [
          "\\(p(n-1)(n-2)/2\\)",
          "\\(pn(n-1)\\)",
          "\\(p(n^2-1)\\)",
          "\\(-p(n-1)(n-2)\\)",
          "\\(p(n-1)(n-2)\\)"
        ],
        "correct": 4,
        "sol": "<p>Rearrange to vₙ₊₂−2vₙ₊₁+vₙ=2p. Thus the successive differences form an arithmetic sequence starting with v₂−v₁=0 and common difference 2p. Summing the first n−1 differences gives 2p[0+1+…+(n−2)]=p(n−1)(n−2). This also gives zero at n=1 and n=2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 2(ii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S060",
        "stepSource": {
          "year": 2022,
          "paper": "II",
          "part": "2(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"
        },
        "sourceGroup": "2022-2-2",
        "templateFamily": "2022-2-2"
      },
      {
        "n": 3,
        "stem": "Which list gives all ordered pairs of positive integers (x,y) satisfying \\[\\frac1x+\\frac2y=\\frac27?\\]",
        "opts": [
          "(4,28),(7,14),(56,8)",
          "(7,7),(14,14)",
          "(4,56),(7,14)",
          "There are infinitely many pairs",
          "(4,56),(14,7),(28,8)",
          "(4,56),(7,14),(28,8)"
        ],
        "correct": 5,
        "sol": "<p>Multiplying by 7xy and rearranging gives (2x−7)(y−7)=49. Positive factor pairs (1,49),(7,7),(49,1) give (4,56),(7,14),(28,8). Negative factor pairs give either a nonpositive x or y, so none is allowed. There are no other integer divisors of 49. Substitution confirms each listed positive pair.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 5(i). Catalogue: Direct.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S055",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "5(i)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-5",
        "templateFamily": "2023-3-5"
      },
      {
        "n": 4,
        "stem": "For k&gt;0, what is \\(\\displaystyle\\int_{\\pi/6}^{\\pi/3}\\frac1{1+\\tan^k x}\\,dx\\)? You may use that pairing values at x and a+b−x preserves an integral over [a,b].",
        "opts": [
          "π/(12k)",
          "π/(6k)",
          "π/4",
          "π/6",
          "π/12"
        ],
        "correct": 4,
        "sol": "<p>Let f(x)=1/(1+tanᵏx). Since tan(π/2−x)=1/tan x on the interval, f(π/2−x)=tanᵏx/(1+tanᵏx). Thus the paired values sum to 1. The integral equals one half the integral of 1 over [π/6,π/3], hence (1/2)(π/6)=π/12. No trigonometric antiderivative is needed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 3(iii). Catalogue: Direct.</a></p>",
        "topic": "Integration / Trigonometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S121",
        "stepSource": {
          "year": 2018,
          "paper": "II",
          "part": "3(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"
        },
        "sourceGroup": "2018-2-3",
        "templateFamily": "symmetric-integral"
      },
      {
        "n": 5,
        "stem": "Every real root ω of \\(135x^5-135x^4-100x^3-91x^2-126x+135=0\\) satisfies \\(1/2\\le|\\omega|\\le2\\). Which is the complete set of integer roots?",
        "opts": [
          "{−1}",
          "{−1,2}",
          "{1}",
          "{−1,1}",
          "{−2,−1}"
        ],
        "correct": 0,
        "sol": "<p>The bound restricts integer candidates to −2,−1,1,2. Substitution gives respectively −5657,0,−182,879 for the polynomial. Thus only −1 is an integer root. The supplied bound makes it unnecessary to solve or fully factor the quintic.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 3(ii). Catalogue: Supply.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S105",
        "stepSource": {
          "year": 2019,
          "paper": "II",
          "part": "3(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"
        },
        "sourceGroup": "2019-2-3",
        "templateFamily": "2019-2-3"
      },
      {
        "n": 6,
        "stem": "There are nine rods of distinct lengths 1,2,…,9. Two are chosen uniformly at random, without replacement, and joined with a rod of length 10. What is the probability the three lengths form a non-degenerate triangle?",
        "opts": [
          "5/9",
          "1/2",
          "7/18",
          "5/12",
          "4/9"
        ],
        "correct": 4,
        "sol": "<p>There are 9·8/2=36 unordered choices. Write the selected lengths a&lt;b. The only needed inequality is a+b&gt;10. For b≤5 no pair works. For b=6,7,8,9 the allowed a values number 1,3,5,7 respectively. Thus there are 16 valid pairs and the probability is 16/36=4/9.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 11(i) or (ii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics / Geometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S109",
        "stepSource": {
          "year": 2019,
          "paper": "II",
          "part": "11(i) or (ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"
        },
        "sourceGroup": "2019-2-11",
        "templateFamily": "2019-2-11"
      },
      {
        "n": 7,
        "stem": "For a positive integer n define \\[F_n(x)=\\sum_{r=0}^n(r+1)\\binom nr x^r.\\] Which expression equals \\(F_n(x)\\) for every real x?",
        "opts": [
          "\\((1+x)^{n-1}(1+nx)\\)",
          "\\((1+x)^n+nx^n\\)",
          "\\((1+x)^{n-1}(1+(n+1)x)\\)",
          "\\(nx(1+x)^{n-1}\\)",
          "\\((n+1)(1+x)^n\\)",
          "\\((1+x)^{n+1}\\)"
        ],
        "correct": 2,
        "sol": "<p>Split r+1 into r and 1. The part without r is (1+x)^n. For r≥1 use \\(r\\binom nr=n\\binom{n-1}{r-1}\\). The remaining sum is nx(1+x)^(n-1) by the binomial theorem. Adding and factoring gives the stated answer. The identity also holds at x=-1 because both sides are polynomials, including the case n=1.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 11(iii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S011",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "11(iii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-11",
        "templateFamily": "2025-2-11"
      },
      {
        "n": 8,
        "stem": "Positive integers c,n,k obey \\(2n^2+k=2ck+k^2\\). Which of the following values of k cannot occur?",
        "opts": [
          "4",
          "5",
          "3",
          "2",
          "6",
          "1"
        ],
        "correct": 0,
        "sol": "<p>For k=4 the equation gives n²=4c+6, so n² leaves remainder 2 upon division by 4. An even square leaves remainder 0 and an odd square remainder 1, making this impossible. The other choices do occur: (k,n,c)=(1,1,1),(2,3,4),(3,3,2),(5,5,3),(6,9,11), respectively.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 1(iii). Catalogue: Supply.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S021",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "1(iii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-1",
        "templateFamily": "2024-2-1"
      },
      {
        "n": 9,
        "stem": "Write \\(\\lfloor t\\rfloor\\) for the greatest integer not exceeding \\(t\\). What is the complete set of real \\(x\\) satisfying \\[\\sum_{r=0}^{11}\\left\\lfloor x+\\frac r{12}\\right\\rfloor=17?\\]",
        "opts": [
          "\\(\\{17/12\\}\\)",
          "\\([17/12,19/12)\\)",
          "\\([3/2,19/12)\\)",
          "\\((17/12,3/2]\\)",
          "\\([17/12,3/2)\\)",
          "\\([4/3,17/12)\\)"
        ],
        "correct": 4,
        "sol": "<p>Write \\(x=m+t\\), where m is an integer and 0≤t&lt;1. Put j=⌊12t⌋. Of the twelve fractions t+r/12, exactly j reach or exceed 1, so the sum is 12m+j=⌊12x⌋. Consequently the equation is equivalent to \\(17\\le12x&lt;18\\). Dividing by 12 gives the half-open interval shown. The left endpoint is included because floor changes value there; the right is excluded.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 4(ii). Catalogue: Direct.</a></p>",
        "topic": "Number Theory / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S004",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "4(ii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-4",
        "templateFamily": "floor-systems"
      },
      {
        "n": 10,
        "stem": "You are given \\[x^4-10x^2+12x-2=(x^2+\\sqrt2x-4-3\\sqrt2)(x^2-\\sqrt2x-4+3\\sqrt2).\\] What is the largest real root of the quartic?",
        "opts": [
          "\\((2\\sqrt3+\\sqrt6-\\sqrt2)/2\\)",
          "\\((2\\sqrt3-\\sqrt6+\\sqrt2)/2\\)",
          "\\((2\\sqrt3+\\sqrt6+\\sqrt2)/2\\)",
          "\\((\\sqrt6+\\sqrt2)/2\\)",
          "\\((3\\sqrt2+2)/2\\)"
        ],
        "correct": 0,
        "sol": "<p>The first quadratic has discriminant 18+12√2=(2√3+√6)², and the second has discriminant 18−12√2=(2√3−√6)². Their larger roots are respectively (−√2+2√3+√6)/2 and (√2+2√3−√6)/2. The first exceeds the second by √6−√2&gt;0, so it is the largest of all four roots.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 4(ii), final solving stage. Catalogue: Supply.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S097",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "4(ii), final solving stage",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-4",
        "templateFamily": "2019-1-4"
      },
      {
        "n": 11,
        "stem": "Polynomials p and q satisfy p(x)&gt;0 for all real x and \\(q\\prime(x)=q(x)-p(x)\\). Also q(x) tends to positive infinity as x tends to either positive or negative infinity. How many real roots can q have?",
        "opts": [
          "The information is insufficient",
          "0",
          "Any nonnegative even number",
          "Exactly 1",
          "Any positive even number",
          "Exactly 2"
        ],
        "correct": 1,
        "sol": "<p>The positive tails ensure that q attains a global minimum at some finite real a. At that point q′(a)=0, so the stated identity gives q(a)=p(a)&gt;0. Every value of q is at least this positive minimum. Consequently q never reaches zero. This uses only polynomial continuity and the stationary-point condition, without exponential differentiation.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 3(ii)(a). Catalogue: Supply.</a></p>",
        "topic": "Differentiation / Functions and Graphs",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S043",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "3(ii)(a)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-3",
        "templateFamily": "2023-2-3"
      },
      {
        "n": 12,
        "stem": "Points O,A,B,C form a tetrahedron. Write \\(\\overrightarrow{OA}=\\mathbf a\\), \\(\\overrightarrow{OB}=\\mathbf b\\), \\(\\overrightarrow{OC}=\\mathbf c\\). A point P satisfies \\(\\overrightarrow{OP}=\\mathbf a/6+\\mathbf b/4+\\mathbf c/3\\). Points L on OA and X on BC are chosen so that L,P,X are collinear. What are \\(OL/OA\\) and \\(BX:XC\\)?",
        "opts": [
          "\\(2/5,\\ 3:4\\)",
          "\\(1/4,\\ 4:3\\)",
          "\\(2/7,\\ 4:3\\)",
          "\\(1/6,\\ 4:3\\)",
          "\\(3/5,\\ 3:4\\)",
          "\\(2/5,\\ 4:3\\)"
        ],
        "correct": 5,
        "sol": "<p>Write X=(1-s)b+sc and L=ta. Then P=(1-u)L+uX. Comparing b,c coefficients gives u=1/4+1/3=7/12 and s=(1/3)/(7/12)=4/7. Thus BX:XC=s:(1-s)=4:3. Comparing a coefficients gives (5/12)t=1/6, so t=2/5. The non-coplanarity ensures these coefficient comparisons are valid.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 5(i). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S017",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "5(i)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-5",
        "templateFamily": "2025-3-5"
      },
      {
        "n": 13,
        "stem": "For every positive integer m put \\(C=\\binom{2m+1}{m}\\). Which pair of strict inequalities holds for every such m?",
        "opts": [
          "\\(2^{2m}/(2m+1)&lt;C&lt;2^{2m}/(m+1)\\)",
          "\\(2^{2m}/(m+1)&lt;C&lt;2^{2m-1}\\)",
          "\\(2^{2m}/(m+1)&lt;C&lt;2^{2m}\\)",
          "\\(2^{2m}&lt;C&lt;2^{2m+1}\\)",
          "\\(2^{2m}/m&lt;C&lt;2^{2m}\\)"
        ],
        "correct": 2,
        "sol": "<p>The binomial coefficients in row 2m+1 sum to 2²ᵐ⁺¹. The two equal central coefficients are C; other positive terms give 2C&lt;2²ᵐ⁺¹. All 2m+2 coefficients are at most C and some are strictly smaller, so 2²ᵐ⁺¹&lt;(2m+2)C. Combine the two inequalities. The second choice fails already at m=1; the fourth fails there too.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper III, question 5(i). Catalogue: Direct.</a></p>",
        "topic": "Binomial expansions / Inequalities",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S158",
        "stepSource": {
          "year": 2016,
          "paper": "III",
          "part": "5(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%203.pdf"
        },
        "sourceGroup": "2016-3-5",
        "templateFamily": "2016-3-5"
      },
      {
        "n": 14,
        "stem": "A coin gives heads independently with probability 2/3. It is tossed until HH or TT first occurs consecutively. What is the probability that HH occurs first?",
        "opts": [
          "2/3",
          "4/5",
          "5/7",
          "16/21",
          "4/7",
          "8/9"
        ],
        "correct": 3,
        "sol": "<p>Let H and T be the eventual HH-winning probabilities when the last toss is H and T respectively. Then H=2/3+T/3 and T=2H/3. Thus H=6/7 and T=4/7. Before any toss the winning probability is (2/3)H+(1/3)T=16/21. Repeated alternating tosses have probability tending to zero, so these cover the eventual outcomes.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 11(i). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S088",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "11(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-11",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 15,
        "stem": "Let p be real with p²≠1. Two real numbers u,v satisfy \\[u+v=\\frac{-4p}{p^2-1},\\qquad uv=\\frac{5-p^2}{p^2-1}.\\] What is the value of \\((u+v)^2-u^2v^2-6uv\\)?",
        "opts": [
          "It depends on p",
          "5",
          "0",
          "−5",
          "\\(5/(p^2-1)^2\\)",
          "1"
        ],
        "correct": 1,
        "sol": "<p>Set t=p² and use the common denominator (t−1)². The numerator is \\(16t-(5-t)^2-6(5-t)(t-1)\\). Expansion gives 5t²−10t+5=5(t−1)². Since p²≠1, cancellation is allowed and the value is 5. This is the algebraic tangency condition for the third side in the source construction.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 1(iii). Catalogue: Supply.</a></p>",
        "topic": "General algebra / Geometry",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S052",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "1(iii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-1",
        "templateFamily": "2023-3-1"
      },
      {
        "n": 16,
        "stem": "A sequence has t₂ₙ=x and t₂ₙ₊₁=y for all n≥0, with x,y nonzero and x≠y. It satisfies tₙ₊₂=ptₙ₊₁+qtₙ. Which describes all possibilities?",
        "opts": [
          "q=1+p with arbitrary nonzero x,y",
          "q=1−p and y=−x",
          "p=0,q=−1 with any such x,y",
          "p=0,q=1 with any such x,y; or p≠0,q=1+p and y=−x",
          "p=q=1 and y=−x"
        ],
        "correct": 3,
        "sol": "<p>The equations are (1−q)x=py and (1−q)y=px. Subtracting and using x≠y gives 1−q=−p, so q=1+p. Substitution then gives p(x+y)=0. If p=0, q=1 and any permitted pair works; otherwise y=−x. These conditions also directly satisfy the recurrence.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper I, question 7(ii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S216",
        "stepSource": {
          "year": 2012,
          "paper": "I",
          "part": "7(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf"
        },
        "sourceGroup": "2012-1-7",
        "templateFamily": "two-cycle"
      },
      {
        "n": 17,
        "stem": "Let \\(0&lt;\\theta&lt;\\pi\\), x real and x≠θ. You may use that \\(x^2/(x-\\theta)\\) lies in \\((−\\infty,0]\\cup[4\\theta,\\infty)\\). Which (x,θ) satisfies \\[\\frac{x^2}{4\\theta(x-\\theta)}=\\frac{\\sin^2\\theta\\cos^2x}{1+\\cos^2\\theta\\sin^2x}?\\]",
        "opts": [
          "(0,π/2) only",
          "(π/2,π/4) only",
          "(π,π/2) and (0,π/2)",
          "(π,π/2) only",
          "No solutions"
        ],
        "correct": 3,
        "sol": "<p>The right side is between 0 and 1. The left side is at most 0 or at least 1, so equality requires a shared endpoint. At left side 0, x=0, but the right side is sin²θ&gt;0. At left side 1, x²=4θ(x−θ), so x=2θ. The right side equals 1 only if sin²θ=1 and cos²x=1; hence θ=π/2 and x=π. These values do satisfy the equation.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 6(ii), final equality. Catalogue: Supply.</a></p>",
        "topic": "Trigonometry / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S099",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "6(ii), final equality",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-6",
        "templateFamily": "2019-1-6"
      },
      {
        "n": 18,
        "stem": "Let u₀=sin²(π/7) and uₙ₊₁=4uₙ(1−uₙ). You may use 4sin²θ(1−sin²θ)=sin²(2θ). What is u₂₀₂₆?",
        "opts": [
          "\\(\\sin^2(3\\pi/7)\\)",
          "\\(\\sin^2(2\\pi/7)\\)",
          "\\(3/4\\)",
          "\\(\\sin^2(\\pi/7)\\)",
          "\\(1/4\\)"
        ],
        "correct": 1,
        "sol": "<p>The identity gives uₙ=sin²(2ⁿπ/7). Since sin² has period π, reduce 2ⁿ modulo 7. The powers have repeating residues 1,2,4 with period 3. As 2026 leaves remainder 1 on division by 3, 2²⁰²⁶ leaves remainder 2 modulo 7. Thus u₂₀₂₆=sin²(2π/7).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 6(i). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry / Sequences and Series",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S184",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "6(i)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-6",
        "templateFamily": "trig-iteration"
      },
      {
        "n": 19,
        "stem": "Let S be the positive integers leaving remainder 1 on division by 4. Call s&gt;1 in S an S-prime if s cannot be written as a product of two members of S both greater than 1. Which integer has two different factorizations into S-primes (changing the order alone does not count)?",
        "opts": [
          "169",
          "45",
          "441",
          "125",
          "81"
        ],
        "correct": 2,
        "sol": "<p>441=9·49=21·21. The numbers 9,21 and 49 are S-primes: their ordinary proper factors greater than 1 are all 3 modulo 4. For 45 the only S-prime factorization is 5·9; for 81 it is 9·9; for 125 it is 5³; and 169=13·13 is also unique. Thus only 441 works.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper I, question 7(iv)(b). Catalogue: Direct.</a></p>",
        "topic": "Number theory",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S146",
        "stepSource": {
          "year": 2016,
          "paper": "I",
          "part": "7(iv)(b)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf"
        },
        "sourceGroup": "2016-1-7",
        "templateFamily": "2016-1-7"
      },
      {
        "n": 20,
        "stem": "Three circles have non-collinear centres with position vectors a,b,c and distinct positive radii r₁,r₂,r₃. Their pairwise external-tangent intersections are \\(P=(r_1b-r_2a)/(r_1-r_2)\\), \\(Q=(r_1c-r_3a)/(r_1-r_3)\\), \\(R=(r_2c-r_3b)/(r_2-r_3)\\). Under what condition is Q the midpoint of PR?",
        "opts": [
          "\\(r_2=2r_1r_3/(r_1+r_3)\\)",
          "\\(r_3=r_1+r_2\\)",
          "\\(r_2^2=r_1r_3\\)",
          "\\(r_2=(r_1+r_3)/2\\)",
          "\\(r_1=2r_2r_3/(r_2+r_3)\\)"
        ],
        "correct": 0,
        "sol": "<p>The condition is 2Q=P+R. Since the centres are non-collinear, coefficients in these affine combinations must match. Comparing the a coefficients gives 2r₃/(r₁−r₃)=r₂/(r₁−r₂), hence 2r₁r₃=r₂(r₁+r₃). Substituting this relation also makes the b and c coefficients agree, so the condition is sufficient as well as necessary.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper II, question 8(iii). Catalogue: Supply.</a></p>",
        "topic": "General algebra / Geometry",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S173",
        "stepSource": {
          "year": 2015,
          "paper": "II",
          "part": "8(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf"
        },
        "sourceGroup": "2015-2-8",
        "templateFamily": "2015-2-8"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice10p1v2",
    "title": "STEP practice · Year 10 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "Positive integers c,n,k satisfy the following condition: the sum of the n+k consecutive integers starting at c equals the sum of the next n integers. You may use the equivalent equation \\(2n^2+k=2ck+k^2\\). Which option describes all solutions when k=1 and when k=2?",
        "opts": [
          "k=1: odd n only, c=n²; k=2: odd n≥1, c=(n²−1)/2",
          "k=1: any n≥1, c=n²; k=2: any n≥2, c=(n²−1)/2",
          "k=1: any n≥1, c=n²−1; k=2: odd n≥3, c=(n²−1)/2",
          "k=1: any n≥1, c=n²; k=2: even n≥2, c=(n²−1)/2",
          "k=1: any n≥1, c=n²; k=2: odd n≥3, c=(n²−1)/2"
        ],
        "correct": 4,
        "sol": "<p>For k=1 the equation reduces to c=n², which is positive for every positive n. For k=2 it becomes c=(n²−1)/2. This is integral exactly when n is odd. The value n=1 gives c=0 and is forbidden, so the odd values must start at 3. Both integrality and positivity are necessary.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 1(ii)(a)–(b). Catalogue: Supply.</a></p>",
        "topic": "Sequences and Series / Number Theory",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S020",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "1(ii)(a)–(b)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-1",
        "templateFamily": "2024-2-1"
      },
      {
        "n": 2,
        "stem": "For 0≤x,y≤π, which describes all solutions of \\(\\cos(x+y)+\\cos(x-y)-\\cos2x=1\\)? You may use \\(\\cos(A+B)+\\cos(A-B)=2\\cos A\\cos B\\).",
        "opts": [
          "x=y or y=π/2",
          "x=y only",
          "x+y=π only",
          "x=π/2 only",
          "x=y, or x=π/2 with any y in [0,π]"
        ],
        "correct": 4,
        "sol": "<p>The supplied identity gives 2cos x cos y on the left for the first two terms. Setting B=A in the identity gives cos2x=2cos²x−1. The equation therefore reduces to 2cos x(cos y−cos x)=0. Either cos x=0, so x=π/2 and y is arbitrary, or cos y=cos x. Cosine is one-to-one on [0,π], so the latter gives y=x.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 4(ii). Catalogue: Direct.</a></p>",
        "topic": "Trigonometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S122",
        "stepSource": {
          "year": 2018,
          "paper": "II",
          "part": "4(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"
        },
        "sourceGroup": "2018-2-4",
        "templateFamily": "2018-2-4"
      },
      {
        "n": 3,
        "stem": "Write \\(\\lfloor t\\rfloor\\) for the greatest integer at most t and \\(\\{t\\}=t-\\lfloor t\\rfloor\\). Real x,y,z satisfy \\[x+\\lfloor y\\rfloor+\\{z\\}=3.9,\\quad\\{x\\}+y+\\lfloor z\\rfloor=5.3,\\quad\\lfloor x\\rfloor+\\{y\\}+z=5.\\] What is (x,y,z)?",
        "opts": [
          "(1.9,2.8,2.4)",
          "(1.2,2.1,3.8)",
          "(1.1,2.2,3.8)",
          "(2.1,1.2,3.8)",
          "(1.1,3.2,2.8)"
        ],
        "correct": 2,
        "sol": "<p>Adding and halving gives x+y+z=7.1. Subtracting the first equation yields ⌊z⌋+{y}=3.2, so ⌊z⌋=3 and {y}=0.2. Similarly subtracting the second yields ⌊x⌋+{z}=1.8, while subtracting the third yields ⌊y⌋+{x}=2.1. Thus x=1.1,y=2.2,z=3.8.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 3(ii). Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S075",
        "stepSource": {
          "year": 2021,
          "paper": "II",
          "part": "3(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"
        },
        "sourceGroup": "2021-2-3",
        "templateFamily": "floor-systems"
      },
      {
        "n": 4,
        "stem": "Let x₀=9,y₀=1 and \\[x_{n+1}=(x_n+y_n)/2,\\qquad y_{n+1}=\\sqrt{x_ny_n}.\\] These sequences converge to the same limit L. Which is the narrowest of the following intervals that contains every xₙ and yₙ for n≥2?",
        "opts": [
          "\\([\\sqrt{15},(4+\\sqrt{15})/2]\\)",
          "\\([\\sqrt{15},4]\\)",
          "\\([1,9]\\)",
          "\\([4,5]\\)",
          "\\([3,\\sqrt{15}]\\)",
          "\\([3,5]\\)"
        ],
        "correct": 1,
        "sol": "<p>The first pair is (5,3), and the second is (4,√15). If 0&lt;y&lt;x, then y&lt;√xy&lt;(x+y)/2&lt;x; the middle inequality follows by expanding (√x−√y)²&gt;0. Therefore subsequent pairs remain between √15 and 4. Any interval containing every term for n≥2 must include both x₂=4 and y₂=√15, so this is the narrowest possible interval.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 8(i), sequence comparison. Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / Surds",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S028",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "8(i), sequence comparison",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-8",
        "templateFamily": "convergence-estimate"
      },
      {
        "n": 5,
        "stem": "An n-sided die has face probabilities \\(1/n+\\varepsilon_i\\), with \\(\\sum_{i=1}^n\\varepsilon_i=0\\) and at least one εᵢ nonzero. Two rolls are independent. Compared with a fair n-sided die, by how much is the probability of two identical scores changed?",
        "opts": [
          "Decreased by \\(\\sum\\varepsilon_i^2\\)",
          "Increased by \\(\\sum|\\varepsilon_i|/n\\)",
          "Increased by \\(2\\sum\\varepsilon_i^2\\)",
          "Increased by \\(\\sum\\varepsilon_i^2\\)",
          "Unchanged"
        ],
        "correct": 3,
        "sol": "<p>The repeat probability is Σ(1/n+εᵢ)²=1/n+(2/n)Σεᵢ+Σεᵢ²=1/n+Σεᵢ². A fair die gives 1/n. At least one nonzero εᵢ makes the added sum strictly positive. The comparison holds for every admissible bias, not just a particular face distribution.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 12(i). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S089",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "12(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-12",
        "templateFamily": "2020-2-12"
      },
      {
        "n": 6,
        "stem": "Let m&gt;0 and c be real. The solution set of \\[\\sqrt{4x^2-5x+4}\\le|mx+c|\\] is exactly \\([3,\\infty)\\). What are m and c?",
        "opts": [
          "\\(m=2,c=11\\)",
          "\\(m=1,c=-2\\)",
          "\\(m=3,c=-2\\)",
          "\\(m=2,c=1\\)",
          "\\(m=2,c=-1\\)",
          "\\(m=2,c=-11\\)"
        ],
        "correct": 4,
        "sol": "<p>The radicand is positive for all x because its discriminant is 25−64&lt;0. After squaring, \\((m^2-4)x^2+(2mc+5)x+c^2-4\\ge0\\). A nonzero quadratic cannot have exactly one half-line as its solution set, so m²=4 and m=2. To have boundary 3 requires 3(4c+5)+c²−4=0, or (c+1)(c+11)=0. For c=-1 the inequality is x−3≥0. For c=-11 it instead selects x≤3. Thus only c=-1 works.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 2(iii). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S033",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "2(iii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-2",
        "templateFamily": "2024-3-2"
      },
      {
        "n": 7,
        "stem": "For a polynomial f define Df(x)=xf′(x). The notation D⁴ means apply this operation four times. What is \\(D^4[(1-x)^3]\\)?",
        "opts": [
          "\\(1-3x+48x^2-81x^3\\)",
          "\\(-3x+48x^2-81x^3\\)",
          "\\(-3x+24x^2-27x^3\\)",
          "\\(0\\)",
          "\\(-12x+48x^2-108x^3\\)"
        ],
        "correct": 1,
        "sol": "<p>Expand first: (1−x)³=1−3x+3x²−x³. A monomial xʲ is multiplied by j under D, so by j⁴ under four applications. The constant disappears, and the remaining terms become −3·1⁴x+3·2⁴x²−3⁴x³=−3x+48x²−81x³. D⁴ is not the ordinary fourth derivative.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper III, question 7(i). Catalogue: Direct.</a></p>",
        "topic": "Differentiation / Sequences and Series",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.0,
        "selectionId": "S178",
        "stepSource": {
          "year": 2015,
          "paper": "III",
          "part": "7(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%203.pdf"
        },
        "sourceGroup": "2015-3-7",
        "templateFamily": "2015-3-7"
      },
      {
        "n": 8,
        "stem": "Let R rotate points anticlockwise through 60° about the origin, and let F reflect them in the line y=x. A transformation applies R, then F, then the inverse rotation \\(R^{-1}\\), in that order. What is the resulting transformation?",
        "opts": [
          "Reflection in the line making angle −15° with the positive x-axis",
          "Reflection in the line making angle 15° with the positive x-axis",
          "Rotation clockwise through 120°",
          "Rotation anticlockwise through 30°",
          "Reflection in the line making angle 75° with the positive x-axis",
          "Reflection in y=x"
        ],
        "correct": 0,
        "sol": "<p>A point whose polar direction is θ is sent successively to θ+60°, 90°−(θ+60°), and 90°−θ−120°=−30°−θ. Reflection in a line of direction α sends θ to 2α−θ, so α=−15°. All three transformations preserve distance from the origin, and the origin is fixed. This determines the reflection, rather than only its effect on one ray.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 3(iii)(c). Catalogue: Supply.</a></p>",
        "topic": "Geometry / Trigonometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S022",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "3(iii)(c)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-3",
        "templateFamily": "2024-2-3"
      },
      {
        "n": 9,
        "stem": "Let \\(k&gt;0\\) and \\(r&gt;0\\). For which choices of \\(a,k,r\\) does the circle \\[x^2+(y-a)^2=r^2\\] touch the parabola \\(x^2=2ky\\) at two distinct points?",
        "opts": [
          "\\(a&gt;k\\) and \\(r^2=k(2a-k)\\)",
          "\\(a&lt;k\\) and \\(r^2=k(2a-k)\\)",
          "\\(a&gt;0\\) and \\(r^2=a^2+k^2\\)",
          "\\(a&gt;k/2\\) and \\(r^2=k(2a-k)\\)",
          "\\(a\\ge k\\) and \\(r^2=k(2a-k)\\)",
          "\\(a&gt;k\\) and \\(r^2=2ak\\)"
        ],
        "correct": 0,
        "sol": "<p>Substituting x²=2ky gives \\(y^2+2(k-a)y+a^2-r^2=0\\). Two symmetric tangencies require one repeated y-value, so its discriminant vanishes: r²=2ak-k². The repeated value is y=a-k, with x²=2k(a-k). Thus two distinct points require a&gt;k; equality gives only the vertex. Conversely the substituted equation is then \\((y-a+k)^2=0\\), yielding two contacts, with matching tangent slopes from the circle radius or the repeated-intersection condition.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 6(i). Catalogue: Direct.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S006",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "6(i)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-6",
        "templateFamily": "2025-2-6"
      },
      {
        "n": 10,
        "stem": "Three circles lie above and touch the x-axis. Two have radii 9 and 4 and touch externally. The third touches both externally, and its point of contact with the x-axis lies between theirs. What is its radius?",
        "opts": [
          "6/5",
          "36/25",
          "144/25",
          "36",
          "13/4"
        ],
        "correct": 1,
        "sol": "<p>If radii u,v touch externally, the horizontal separation of their centres is √((u+v)²−(u−v)²)=2√(uv). If the middle radius is b, the horizontal separations add: 2√(9b)+2√(4b)=2√36. Thus 10√b=12, so b=36/25. The between condition selects the small circle rather than the external configuration.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper I, question 5(i), circle relation. Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S144",
        "stepSource": {
          "year": 2016,
          "paper": "I",
          "part": "5(i), circle relation",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%201.pdf"
        },
        "sourceGroup": "2016-1-5",
        "templateFamily": "2016-1-5"
      },
      {
        "n": 11,
        "stem": "A linear function g(x)=a+bx satisfies \\[\\int_0^1g(x)\\,dx=1,\\quad\\int_0^1xg(x)\\,dx=\\alpha,\\quad\\int_0^1x^2g(x)\\,dx=\\alpha^2\\] for some real α. Which gives all possible functions g?",
        "opts": [
          "\\(1\\) only",
          "\\(1+\\sqrt3x\\) and \\(1-\\sqrt3x\\)",
          "No such function",
          "\\(1+\\sqrt3(2x-1)\\) and \\(1-\\sqrt3(2x-1)\\)",
          "\\(1+3(2x-1)\\) and \\(1-3(2x-1)\\)"
        ],
        "correct": 3,
        "sol": "<p>Integration gives a+b/2=1, a/2+b/3=α and a/3+b/4=α². Substitute a=1−b/2: α=1/2+b/12 and α²=1/3+b/12=α−1/6. Thus α=(1±1/√3)/2, b=±2√3 and a=1∓√3. Both resulting functions satisfy all three constraints.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper I, question 6(ii), linear g. Catalogue: Direct.</a></p>",
        "topic": "Integration / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S130",
        "stepSource": {
          "year": 2017,
          "paper": "I",
          "part": "6(ii), linear g",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf"
        },
        "sourceGroup": "2017-1-6",
        "templateFamily": "2017-1-6"
      },
      {
        "n": 12,
        "stem": "With \\(\\binom nr=0\\) if r&lt;0 or r&gt;n, what is \\(\\sum_{j=0}^6\\binom8j\\binom7{6-j}\\)?",
        "opts": [
          "5005",
          "12870",
          "1716",
          "6435",
          "3003"
        ],
        "correct": 0,
        "sol": "<p>The sum is the coefficient of x⁶ in (1+x)⁸(1+x)⁷=(1+x)¹⁵. It equals C(15,6)=15·14·13·12·11·10/720=5005. Adding the exponents, rather than the lower coefficient indices, is the key step.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper II, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "Binomial expansions",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S153",
        "stepSource": {
          "year": 2016,
          "paper": "II",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf"
        },
        "sourceGroup": "2016-2-5",
        "templateFamily": "binomial-convolution"
      },
      {
        "n": 13,
        "stem": "Which is the complete real solution set of \\(x^2-4x+\\sqrt{2x^2-8x-3}-9=0\\)?",
        "opts": [
          "\\(\\{2+\\sqrt{10}\\}\\)",
          "\\(\\{2-\\sqrt{18},2+\\sqrt{18}\\}\\)",
          "No real solutions",
          "\\(\\{2-\\sqrt{10},2+\\sqrt{10}\\}\\)",
          "\\(\\{2\\pm\\sqrt{10},2\\pm\\sqrt{18}\\}\\)"
        ],
        "correct": 3,
        "sol": "<p>Put u=x²−4x. The equation becomes √(2u−3)=9−u, so 3/2≤u≤9. Squaring gives u²−20u+84=0, hence u=6 or 14. Only 6 meets the restriction. Solving x²−4x=6 gives x=2±√10, and each satisfies the original equation.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 1(ii)(b). Catalogue: Direct.</a></p>",
        "topic": "General algebra / Surds",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S197",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "1(ii)(b)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-1",
        "templateFamily": "2013-1-1"
      },
      {
        "n": 14,
        "stem": "The circle x²+y²=a² has a&gt;0. A second circle has radius r, centre on the positive x-axis, and meets the first at the endpoints of a diameter of the first. Which describes exactly the possibilities?",
        "opts": [
          "\\((x-\\sqrt{r^2+a^2})^2+y^2=r^2\\), with r&gt;0",
          "No such circle exists",
          "\\((x-\\sqrt{r^2-a^2})^2+y^2=r^2\\), with r&gt;a",
          "\\((x-r+a)^2+y^2=r^2\\), with r&gt;a",
          "\\((x-\\sqrt{r^2-a^2})^2+y^2=r^2\\), with r≥a"
        ],
        "correct": 2,
        "sol": "<p>Write the second centre as (c,0), c&gt;0. Subtracting the circle equations gives 2cx=c²+a²−r² at their intersections. For this chord to be a diameter, its line must pass through (0,0), so c²=r²−a². Since c&gt;0, r&gt;a. The two intersections are then (0,±a). At r=a,c=0 the circles coincide and do not meet in exactly two points.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper II, question 7(i). Catalogue: Direct.</a></p>",
        "topic": "Coordinate geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S170",
        "stepSource": {
          "year": 2015,
          "paper": "II",
          "part": "7(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf"
        },
        "sourceGroup": "2015-2-7",
        "templateFamily": "2015-2-7"
      },
      {
        "n": 15,
        "stem": "For which real a does \\(x^4+ax^3+(2a-2)x^2+ax+1=0\\) have exactly three distinct real roots?",
        "opts": [
          "a≤0 or a≥4",
          "0&lt;a&lt;4",
          "a&lt;−4 or a&gt;0",
          "a&lt;0 or a&gt;4",
          "Every a≠0"
        ],
        "correct": 3,
        "sol": "<p>The quartic factors as (x+1)²[x²+(a−2)x+1]. The quadratic must supply two distinct real roots, neither equal to −1. Its discriminant is (a−2)²−4=a(a−4), positive exactly for a&lt;0 or a&gt;4. A root −1 would require a=4, excluded already. At a=0 the quadratic is (x−1)², giving only two distinct roots; at a=4 all roots coincide at −1.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 1(ii)–(iii). Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S120",
        "stepSource": {
          "year": 2018,
          "paper": "II",
          "part": "1(ii)–(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"
        },
        "sourceGroup": "2018-2-1",
        "templateFamily": "2018-2-1"
      },
      {
        "n": 16,
        "stem": "Let 0&lt;a&lt;b. The line y=a²x meets y=x(b−x)² at the origin and two further points. What is the area enclosed between the curve and the line segment from the origin to the nearer intersection?",
        "opts": [
          "\\((b-a)^4/4\\)",
          "\\((b-a)^3(b+3a)/6\\)",
          "\\((b-a)^3(b+3a)/12\\)",
          "\\((b-a)^3(b+a)/12\\)",
          "\\((b+a)^3(b-3a)/12\\)"
        ],
        "correct": 2,
        "sol": "<p>The nearer intersection is at x=b−a. On 0&lt;x&lt;b−a the curve lies above the line, so integrate x³−2bx²+(b²−a²)x from 0 to b−a. Put L=b−a. The result is L⁴/4−2bL³/3+(b²−a²)L²/2. Factoring L³ and combining terms gives L³[(b−a)/4−2b/3+(b+a)/2]=L³(b+3a)/12.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 1, area S. Catalogue: Direct.</a></p>",
        "topic": "Integration",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S113",
        "stepSource": {
          "year": 2018,
          "paper": "I",
          "part": "1, area S",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"
        },
        "sourceGroup": "2018-1-1",
        "templateFamily": "2018-1-1"
      },
      {
        "n": 17,
        "stem": "You are given that A={1,3,4,5,9,11} and B={2,6,7,8,10} have equal sums and equal square sums. For every positive integer n, let \\(S=\\{n^2,(n+1)^2,\\ldots,(n+11)^2\\}\\). Which set of offsets T makes the sum of \\(\\{(n+t)^2:t\\in T\\}\\) equal to the sum of its complement in S for every n?",
        "opts": [
          "\\(\\{0,1,2,3,4,5\\}\\)",
          "\\(\\{2,6,7,8,10\\}\\)",
          "\\(\\{0,2,4,6,8,10\\}\\)",
          "\\(\\{0,1,3,4,5,9,11\\}\\)",
          "\\(\\{0,2,6,7,8,10\\}\\)"
        ],
        "correct": 4,
        "sol": "<p>For a set of offsets T, the sum is |T|n²+2n∑t+∑t². The given A and B have matching last two sums but different sizes. Adding offset 0 to B changes neither of these sums and makes both sizes six. Hence B∪{0} and A yield equal quadratic expressions for every n. This includes n² exactly once and covers all twelve offsets.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 8(iv). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S010",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "8(iv)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-8",
        "templateFamily": "2025-2-8"
      },
      {
        "n": 18,
        "stem": "For a&gt;0 and p&gt;0, what is the shortest distance from (p,0) to y²=4ax?",
        "opts": [
          "p if p≤2a; \\(2\\sqrt{a(p-a)}\\) if p≥2a",
          "p if p≤2a; \\(2\\sqrt{a(p+a)}\\) if p≥2a",
          "\\(2\\sqrt{ap}\\) for all p",
          "p if p≤a; \\(2\\sqrt{ap}\\) if p≥a",
          "\\(\\sqrt{p^2+4a^2}\\) for all p"
        ],
        "correct": 0,
        "sol": "<p>Write a point as (at²,2at) and put u=t²≥0. The squared distance is (au−p)²+4a²u=a²u²+(4a²−2ap)u+p². The unconstrained minimum is at u=p/a−2. If p≤2a this is nonpositive, so the minimum over u≥0 is p² at u=0. If p≥2a substitute u=p/a−2 to get 4a(p−a). Taking the positive square roots gives the result.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper III, question 3(ii), point distance. Catalogue: Direct.</a></p>",
        "topic": "Coordinate geometry / Optimisation",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S194",
        "stepSource": {
          "year": 2014,
          "paper": "III",
          "part": "3(ii), point distance",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf"
        },
        "sourceGroup": "2014-3-3",
        "templateFamily": "parabola-distance"
      },
      {
        "n": 19,
        "stem": "A gambler starts with one token and stops at zero or four tokens. Each independent bet wins with probability 3/5. A cautious strategy stakes one token each time, gaining or losing one. A bold strategy stakes all current tokens, either doubling them or losing them all. You may use that a cautious gambler starting at two tokens reaches four before zero with probability \\(p^2/[p^2+(1-p)^2]\\). Which gives the success probabilities (cautious, bold)?",
        "opts": [
          "(27/125,9/25)",
          "(9/25,27/65)",
          "(27/65,9/25)",
          "(9/13,9/25)",
          "(27/65,3/5)"
        ],
        "correct": 2,
        "sol": "<p>The cautious gambler must win the first bet to reach two tokens, then succeeds with the supplied probability. This gives (3/5)·[(9/25)/(9/25+4/25)]=27/65. The bold gambler must win two successive bets, giving (3/5)²=9/25. In particular the cautious probability is larger, despite requiring more possible bets.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 12(iii). Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S080",
        "stepSource": {
          "year": 2021,
          "paper": "II",
          "part": "12(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"
        },
        "sourceGroup": "2021-2-12",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 20,
        "stem": "As x and θ vary over all real numbers, what is the range of \\(y=(x^2+x\\sin\\theta+1)/(x^2+x\\cos\\theta+1)\\)?",
        "opts": [
          "\\([1/2,2]\\)",
          "\\([(4-\\sqrt7)/3,(4+\\sqrt7)/3]\\)",
          "\\([(3-\\sqrt5)/2,(3+\\sqrt5)/2]\\)",
          "\\([1/3,3]\\)",
          "\\((0,\\infty)\\)"
        ],
        "correct": 1,
        "sol": "<p>The denominator is positive: x²+x cosθ+1≥x²−|x|+1&gt;0. Rearrangement gives (y−1)x²+(y cosθ−sinθ)x+y−1=0. Its discriminant must be nonnegative, hence 4(y−1)²≤(y cosθ−sinθ)²≤y²+1. The last inequality follows from (y sinθ+cosθ)²≥0. Thus 3y²−8y+3≤0, giving the stated bounds. Conversely, for every y in this positive interval choose cosθ=y/√(y²+1), sinθ=−1/√(y²+1); the quadratic has a real solution (and y=1 follows from x=0). Both endpoints are attained.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper II, question 4(i). Catalogue: Direct.</a></p>",
        "topic": "Trigonometry / General algebra",
        "estimatedDifficulty": 8,
        "estimatedMinutes": 5.0,
        "selectionId": "S152",
        "stepSource": {
          "year": 2016,
          "paper": "II",
          "part": "4(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf"
        },
        "sourceGroup": "2016-2-4",
        "templateFamily": "2016-2-4"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice11p1v2",
    "title": "STEP practice · Year 11 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "What is the length of the chord cut from \\(x^2+y^2-6x+4y-12=0\\) by the line 3x+4y=16?",
        "opts": [
          "\\(2\\sqrt{21}\\)",
          "10",
          "\\(2\\sqrt{34}\\)",
          "6",
          "8"
        ],
        "correct": 4,
        "sol": "<p>Complete squares to obtain centre (3,−2) and radius 5. The perpendicular from the centre has direction (3,4); its foot is (3+3t,−2+4t). Substitution into the line gives 1+25t=16, so t=3/5 and the centre-to-line distance is 5t=3. A perpendicular through a circle’s centre bisects the chord, whose half-length is √(25−9)=4. Hence the chord length is 8.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Geometry",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "O003",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O003",
        "templateFamily": "O003"
      },
      {
        "n": 2,
        "stem": "An affine function f(x)=ax+b satisfies f(f(x))=9x+8 for every real x. Which is the complete set of possible values of f(0)?",
        "opts": [
          "{2} only",
          "{−2,4}",
          "{−3,3}",
          "{−4,2}",
          "{−4} only"
        ],
        "correct": 3,
        "sol": "<p>Composition gives a²x+b(a+1)=9x+8. Thus a=3 or −3. For a=3, 4b=8 gives b=2; for a=−3, −2b=8 gives b=−4. Since f(0)=b, both listed values and no others are possible.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Functions and Graphs",
        "estimatedDifficulty": 4.5,
        "estimatedMinutes": 2.5,
        "selectionId": "O010",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O010",
        "templateFamily": "O010"
      },
      {
        "n": 3,
        "stem": "How many pairs of integers (a,b) satisfy a&gt;b≥0 and a²−b²=675?",
        "opts": [
          "4",
          "5",
          "8",
          "6",
          "12"
        ],
        "correct": 3,
        "sol": "<p>Write (a−b)(a+b)=675=3³·5². All factors are odd, so every positive factor pair u&lt;v gives integers a=(u+v)/2,b=(v−u)/2. There are (3+1)(2+1)=12 positive divisors and hence six unordered factor pairs, since 675 is not a square. Each gives exactly one allowed pair (a,b).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper I, question 1(v)–(vi). Catalogue: Direct.</a></p>",
        "topic": "Number theory",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3.5,
        "selectionId": "S179",
        "stepSource": {
          "year": 2014,
          "paper": "I",
          "part": "1(v)–(vi)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%201.pdf"
        },
        "sourceGroup": "2014-1-1",
        "templateFamily": "2014-1-1"
      },
      {
        "n": 4,
        "stem": "Let \\(0&lt;a&lt;b\\) and let f be positive for x&gt;0. The line through \\((a,f(a))\\) and \\((b,-f(b))\\) meets the x-axis at \\((m,0)\\). Which choice of f ensures \\[m=\\frac{a^{n+1}+b^{n+1}}{a^n+b^n}\\] for every a,b&gt;0, where n is a fixed positive integer?",
        "opts": [
          "\\(f(x)=1\\)",
          "\\(f(x)=x^{-(n+1)}\\)",
          "\\(f(x)=x^n\\)",
          "\\(f(x)=x^{n+1}\\)",
          "\\(f(x)=x^{1-n}\\)",
          "\\(f(x)=x^{-n}\\)"
        ],
        "correct": 5,
        "sol": "<p>Similar triangles, or the line equation, give \\(m=[af(b)+bf(a)]/[f(a)+f(b)]\\). For f(x)=x^-n, multiply numerator and denominator by a^n b^n; this gives exactly the required ratio. The reversal of f(a),f(b) in the numerator matters. The other powers give different expressions for general a,b; the claim is for every pair, not one coincidental equality.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 3(i)–(ii). Catalogue: Direct.</a></p>",
        "topic": "Geometry / Functions and Graphs",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S015",
        "stepSource": {
          "year": 2025,
          "paper": "III",
          "part": "3(i)–(ii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-3-3",
        "templateFamily": "2025-3-3"
      },
      {
        "n": 5,
        "stem": "For a&gt;0 and real p≠0, a geometric distance D satisfies \\(D^2=16a^2(p^2+1)^3/p^4\\). What is the minimum possible D?",
        "opts": [
          "\\(6\\sqrt3a\\)",
          "\\(3\\sqrt3a\\)",
          "\\(8a\\)",
          "\\(4\\sqrt3a\\)",
          "\\(12a\\)"
        ],
        "correct": 0,
        "sol": "<p>Put t=p²&gt;0. The factor to minimise is t+3+3/t+1/t². Its derivative is (t³−3t−2)/t³=(t−2)(t+1)²/t³, negative below 2 and positive above 2. At t=2 the factor is 27/4, so D²=108a². Since D and a are positive, D=6√3a.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper II, question 5(ii). Catalogue: Supply.</a></p>",
        "topic": "Differentiation",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.0,
        "selectionId": "S136",
        "stepSource": {
          "year": 2017,
          "paper": "II",
          "part": "5(ii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf"
        },
        "sourceGroup": "2017-2-5",
        "templateFamily": "2017-2-5"
      },
      {
        "n": 6,
        "stem": "A bag contains n≥2 keys, exactly one correct. After each failed attempt the selected key is replaced and one extra incorrect key is added. Each selection is uniform. What is the probability that the first successful attempt is attempt k≥1?",
        "opts": [
          "\\((n-1)^{k-1}/n^k\\)",
          "\\(1/[k(n+k-1)]\\)",
          "\\((n-1)/[(n+k-2)(n+k-1)]\\)",
          "\\(1/(n+k-1)\\)",
          "\\(n/[(n+k-1)(n+k)]\\)"
        ],
        "correct": 2,
        "sol": "<p>The failure probabilities before attempt k are (n−1)/n,n/(n+1),…,(n+k−3)/(n+k−2). Their product telescopes to (n−1)/(n+k−2). Multiply by the success probability 1/(n+k−1). For k=1 the formula also reduces to 1/n, as required.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper II, question 13(iii), probability only. Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S137",
        "stepSource": {
          "year": 2017,
          "paper": "II",
          "part": "13(iii), probability only",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf"
        },
        "sourceGroup": "2017-2-13",
        "templateFamily": "2017-2-13"
      },
      {
        "n": 7,
        "stem": "How many integer triples (a,b,c), with each coordinate between -1000 and 1000 inclusive, satisfy \\(a^3+2b^3+4c^3=0\\)?",
        "opts": [
          "2",
          "0",
          "3",
          "7",
          "2001",
          "1"
        ],
        "correct": 5,
        "sol": "<p>The equation first forces a even. Write a=2p and divide by 2: 4p³+b³+2c³=0, forcing b even. Substituting b=2q and dividing by 2 forces c even as well. All three coordinates are therefore even. Dividing the original equation by 8 gives another triple satisfying the same equation. A nonzero integer triple cannot be divided by 2 indefinitely while remaining integral. Only (0,0,0) remains, so the count is one.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 2(i). Catalogue: Direct.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S068",
        "stepSource": {
          "year": 2022,
          "paper": "III",
          "part": "2(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"
        },
        "sourceGroup": "2022-3-2",
        "templateFamily": "integer-descent"
      },
      {
        "n": 8,
        "stem": "Two people repeatedly toss independent coins, each with head probability p. They stop on the first round in which both show the same face. For a fixed positive integer n, what is the minimum, over 0≤p≤1, of the probability they have stopped by round n?",
        "opts": [
          "\\(1/2\\)",
          "\\(1-4^{-n}\\)",
          "\\(2^{-n}\\)",
          "\\(1-2^{-n}\\)",
          "\\(1-(3/4)^n\\)"
        ],
        "correct": 3,
        "sol": "<p>A round fails to decide precisely when the coins differ, with probability 2p(1−p). Independence gives probability 1−[2p(1−p)]ⁿ of deciding by round n. Since 2p(1−p)=1/2−2(p−1/2)²≤1/2, this is at least 1−2⁻ⁿ. Equality occurs at p=1/2, proving it is the minimum.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 11(i). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S102",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "11(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-11",
        "templateFamily": "2019-1-11"
      },
      {
        "n": 9,
        "stem": "Which is the complete real solution set of \\((x+6)^3-6(x+6)(x^2+14)+8(x^3+36)=0\\)?",
        "opts": [
          "{−2,0,2}",
          "{−4,−2,0}",
          "{0,4}",
          "{2,4,6}",
          "{0,2,4}"
        ],
        "correct": 4,
        "sol": "<p>Expansion gives 3x³−18x²+24x=3x(x²−6x+8)=3x(x−2)(x−4). Thus the roots are exactly 0,2,4. The constant terms cancel; omitting that cancellation can incorrectly exclude zero.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2016, Paper II, question 2(ii), final equation. Catalogue: Direct.</a></p>",
        "topic": "General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S150",
        "stepSource": {
          "year": 2016,
          "paper": "II",
          "part": "2(ii), final equation",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2016%20STEP%202.pdf"
        },
        "sourceGroup": "2016-2-2",
        "templateFamily": "2016-2-2"
      },
      {
        "n": 10,
        "stem": "The three roots of \\(t^3-3t+1=0\\) are a,b,c. Which degree-six polynomial has \\(a+\\sqrt2,b+\\sqrt2,c+\\sqrt2\\) among its roots?",
        "opts": [
          "\\((x^3+3x+1)^2-2(3x^2-1)^2\\)",
          "\\((x^3+3x+1)^2-(3x^2-1)^2\\)",
          "\\((x^3+3x+1)^2-2(3x^2+1)^2\\)",
          "\\((x^3+3x-1)^2-2(3x^2-1)^2\\)",
          "\\((x^3-3x+1)^2-2(3x^2-1)^2\\)"
        ],
        "correct": 0,
        "sol": "<p>Replace t by x−√2. The cubic becomes \\(x^3+3x+1+\\sqrt2(1-3x^2)\\). For each requested x this is zero, so \\(x^3+3x+1=\\sqrt2(3x^2-1)\\). Squaring and moving the right side to the left yields the displayed answer. Its leading term is x⁶, so it has the required degree.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 4(iii). Catalogue: Direct.</a></p>",
        "topic": "Surds / General algebra",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S045",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "4(iii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-4",
        "templateFamily": "polynomial-surds"
      },
      {
        "n": 11,
        "stem": "What is the shortest distance between the line y=2x+3 and the parabola y²=4x? You may use that the distance from (u,v) to this line is |2u−v+3|/√5.",
        "opts": [
          "\\(3/\\sqrt5\\)",
          "\\(\\sqrt5/2\\)",
          "\\(1/\\sqrt5\\)",
          "\\(5/2\\)",
          "\\(2/\\sqrt5\\)"
        ],
        "correct": 1,
        "sol": "<p>Every point on the parabola can be written (t²,2t). Its distance is |2t²−2t+3|/√5. Completing the square gives 2(t−1/2)²+5/2, always positive, so the minimum is (5/2)/√5=√5/2, attained at t=1/2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2014, Paper III, question 3(i). Catalogue: Supply.</a></p>",
        "topic": "Coordinate geometry / Optimisation",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S193",
        "stepSource": {
          "year": 2014,
          "paper": "III",
          "part": "3(i)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2014%20STEP%203.pdf"
        },
        "sourceGroup": "2014-3-3",
        "templateFamily": "parabola-distance"
      },
      {
        "n": 12,
        "stem": "A function equals 10x for x≤0, 2x² for 0≤x≤5, and 50 for x≥5. Which single formula represents it for every real x?",
        "opts": [
          "\\(x^2-|x(x-5)|-5|x-5|+25\\)",
          "\\(x^2-|x(x-5)|-5|x|+25\\)",
          "\\(x^2-|x(x-5)|+5|x-5|-25\\)",
          "\\(x^2-|x(x-5)|-5|x-5|\\)",
          "\\(x^2+|x(x-5)|-5|x-5|+25\\)"
        ],
        "correct": 0,
        "sol": "<p>For the correct expression, when x≤0 the two moduli are x²−5x and 5−x, giving 10x. When 0≤x≤5 they are -x²+5x and 5−x, giving 2x². When x≥5 they are x²−5x and x−5, giving 50. Each requested formula is therefore recovered, including both endpoints.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 4(iv). Catalogue: Direct.</a></p>",
        "topic": "Functions and Graphs",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S064",
        "stepSource": {
          "year": 2022,
          "paper": "II",
          "part": "4(iv)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"
        },
        "sourceGroup": "2022-2-4",
        "templateFamily": "modulus-piecewise"
      },
      {
        "n": 13,
        "stem": "Let X,Y be distinct points and 0&lt;λ&lt;1. Define P₁=λX+(1−λ)Y in position-vector notation and Pₙ=λPₙ₋₁+(1−λ)Y for n≥2. In what ratio XPₙ:PₙY does Pₙ divide XY?",
        "opts": [
          "\\((1-\\lambda):\\lambda\\)",
          "\\(\\lambda^n:(1-\\lambda^n)\\)",
          "\\((1-\\lambda)^n:[1-(1-\\lambda)^n]\\)",
          "\\((1-\\lambda^n):\\lambda^n\\)",
          "\\(n(1-\\lambda):\\lambda\\)"
        ],
        "correct": 3,
        "sol": "<p>Subtract y from the recurrence: pₙ−y=λ(pₙ₋₁−y)=λⁿ(x−y). Thus PₙY=λⁿXY while XPₙ=(1−λⁿ)XY. The order of the requested distances therefore gives (1−λⁿ):λⁿ.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2013, Paper I, question 3(iv). Catalogue: Direct.</a></p>",
        "topic": "Vectors / Sequences and Series",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S201",
        "stepSource": {
          "year": 2013,
          "paper": "I",
          "part": "3(iv)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2013%20STEP%201.pdf"
        },
        "sourceGroup": "2013-1-3",
        "templateFamily": "2013-1-3"
      },
      {
        "n": 14,
        "stem": "Real numbers x,y,z satisfy \\[y=\\frac{2x}{1-x^2},\\quad z=\\frac{2y}{1-y^2},\\quad x=\\frac{2z}{1-z^2},\\] with every denominator nonzero. You may use \\(\\tan(2t)=2\\tan t/(1-\\tan^2t)\\). How many ordered triples (x,y,z) satisfy the system?",
        "opts": [
          "9",
          "8",
          "7",
          "3",
          "14",
          "6"
        ],
        "correct": 2,
        "sol": "<p>Write x=tan α, with -π/2&lt;α&lt;π/2. The equations give y=tan 2α,z=tan 4α and tan 8α=tan α. Thus 7α=kπ, with k=-3,…,3. None of these seven starting values or their iterates has tangent ±1: that would require a multiple of π/7 to be an odd multiple of π/4. The relevant tangents are finite as well. Each of the seven x-values determines exactly one ordered triple.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 2(i). Catalogue: Supply.</a></p>",
        "topic": "Trigonometry / Sequences and Series",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S040",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "2(i)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-2",
        "templateFamily": "trig-iteration"
      },
      {
        "n": 15,
        "stem": "A and B independently toss a coin with head probability p until each first gets a head. Put q=1−p, with 0&lt;p&lt;1. For integer t≥1, what is the probability that the larger of their two toss counts is exactly t?",
        "opts": [
          "\\(p^2q^{2t-2}\\)",
          "\\((1-q^t)^2\\)",
          "\\(pq^{t-1}(2-q^t)\\)",
          "\\(2pq^{t-1}\\)",
          "\\(pq^{t-1}(2-q^{t-1}-q^t)\\)"
        ],
        "correct": 4,
        "sol": "<p>The probability both finish within t tosses is (1−qᵗ)². Subtract the probability both finish within t−1: (1−qᵗ⁻¹)². The difference is 2qᵗ⁻¹(1−q)−q²ᵗ⁻²(1−q²)=pqᵗ⁻¹[2−qᵗ⁻¹−qᵗ]. For t=1 this also gives p², as required.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 12(i), T. Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S093",
        "stepSource": {
          "year": 2020,
          "paper": "III",
          "part": "12(i), T",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"
        },
        "sourceGroup": "2020-3-12",
        "templateFamily": "2020-3-12"
      },
      {
        "n": 16,
        "stem": "Let a&gt;0. Two distinct tangents to \\(x^2=4ay\\), at x-coordinates p and q, meet at (X,Y). You may use \\(X=(p+q)/2\\), \\(Y=pq/(4a)\\), and \\(\\tan\\theta=|(m_1-m_2)/(1+m_1m_2)|\\) for the acute angle between lines. If the tangents meet at 45°, which equation must (X,Y) satisfy?",
        "opts": [
          "\\(Y^2=X^2+8a^2\\)",
          "\\((Y+3a)^2=X^2+8a^2\\)",
          "\\((Y+3a)^2=2X^2+8a^2\\)",
          "\\((Y-3a)^2=X^2+8a^2\\)",
          "\\((Y+a)^2=X^2+4a^2\\)"
        ],
        "correct": 1,
        "sol": "<p>The gradients are p/(2a) and q/(2a). Squaring the angle relation gives \\(4a^2(p-q)^2=(4a^2+pq)^2\\). Use (p−q)²=4X²−16aY and pq=4aY, then divide by 16a². This gives X²−4aY=(a+Y)². Rearranging and completing the square gives (Y+3a)²=X²+8a².</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 4(ii), tangent locus. Catalogue: Supply.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S035",
        "stepSource": {
          "year": 2024,
          "paper": "III",
          "part": "4(ii), tangent locus",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-3-4",
        "templateFamily": "2024-3-4"
      },
      {
        "n": 17,
        "stem": "Which list gives all real polynomials p satisfying p(p(p(x)))−3p(x)=−2x for every real x?",
        "opts": [
          "p(x)=x+b for arbitrary real b only",
          "p(x)=x and p(x)=−2x only",
          "p(x)=x+b or p(x)=−2x+b, for arbitrary real b",
          "p(x)=x+b and p(x)=−2x for arbitrary real b",
          "p(x)=−x only"
        ],
        "correct": 2,
        "sol": "<p>A constant polynomial cannot produce −2x. If degree d&gt;1, the composition has degree d³&gt;d and cannot be cancelled by 3p. Hence p=ax+b, a≠0. The equation becomes (a³−3a)x+b(a²+a−2)=−2x. Thus (a−1)²(a+2)=0, so a=1 or −2. For each of these, a²+a−2=0, so b is unrestricted. Direct substitution verifies both families.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper II, question 2(i). Catalogue: Direct.</a></p>",
        "topic": "Polynomials / Functions",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.0,
        "selectionId": "S221",
        "stepSource": {
          "year": 2012,
          "paper": "II",
          "part": "2(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf"
        },
        "sourceGroup": "2012-2-2",
        "templateFamily": "functional-equation"
      },
      {
        "n": 18,
        "stem": "A fair die is rolled until the first 6. Let D mean exactly one 5 occurs before that 6, and E mean exactly one 4 occurs before it. What is P(D∪E)?",
        "opts": [
          "5/12",
          "23/54",
          "25/54",
          "1/2",
          "2/27"
        ],
        "correct": 1,
        "sol": "<p>Ignoring all faces other than 5 and 6 gives P(D)=P(5 then 6)=1/4; similarly P(E)=1/4. For both events, the sequence of relevant faces 4,5,6 must be exactly 456 or 546. Each has probability (1/3)³, so P(D∩E)=2/27. Inclusion–exclusion gives 1/2−2/27=23/54.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper I, question 13(iv)–(v). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S167",
        "stepSource": {
          "year": 2015,
          "paper": "I",
          "part": "13(iv)–(v)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf"
        },
        "sourceGroup": "2015-1-13",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 19,
        "stem": "For a≥0, let M(a) be the maximum of 3ax²−6x³ on −1/3≤x≤1. Which formula gives M(a)?",
        "opts": [
          "\\(a/3+2/9\\) for 0≤a≤1; \\(a^3/9\\) for 1≤a≤3; \\(3a-6\\) for a≥3",
          "\\(a^3/9\\) for 0≤a≤3; \\(3a-6\\) for a≥3",
          "\\(a/3+2/9\\) for 0≤a≤2; \\(a^3/9\\) for 2≤a≤3; \\(3a-6\\) for a≥3",
          "\\(3a-6\\) for all a≥0",
          "\\(a/3+2/9\\) for 0≤a≤3; \\(3a-6\\) for a≥3"
        ],
        "correct": 2,
        "sol": "<p>The derivative is 6x(a−3x). Candidate maxima are x=−1/3, x=1, and x=a/3 when a≤3; x=0 contributes only 0. Their values are a/3+2/9, 3a−6, and a³/9. For 0≤a≤3 the interior maximum is at least the right endpoint, and its difference from the left endpoint is (a−2)(a+1)²/9. This changes sign at a=2. For a≥3 the positive portion increases to x=1, whose value exceeds the left endpoint. The formulas agree at both joins.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper I, question 7. Catalogue: Direct.</a></p>",
        "topic": "Differentiation / Optimisation",
        "estimatedDifficulty": 8,
        "estimatedMinutes": 5.0,
        "selectionId": "S164",
        "stepSource": {
          "year": 2015,
          "paper": "I",
          "part": "7",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%201.pdf"
        },
        "sourceGroup": "2015-1-7",
        "templateFamily": "2015-1-7"
      },
      {
        "n": 20,
        "stem": "Two distinct circles have centres \\((0,a_1),(0,a_2)\\). Their common tangents are \\(y=c\\pm x\\). You are given \\[a_1+a_2=2c+4k,\\qquad a_1a_2=c^2+2k^2\\] with \\(k&gt;0\\). On circle i the contact points are \\((\\pm(a_i-c)/2,(a_i+c)/2)\\). A circle with centre \\((0,d)\\) and radius p passes through all four contact points. What are \\(d\\) and \\(p^2\\)?",
        "opts": [
          "\\(d=c+k,\\ p^2=2kc+k^2\\)",
          "\\(d=c+2k,\\ p^2=2kc+3k^2\\)",
          "\\(d=c+2k,\\ p^2=c^2+2k^2\\)",
          "\\(d=c+2k,\\ p^2=2kc+4k^2\\)",
          "\\(d=2c+4k,\\ p^2=4kc+6k^2\\)"
        ],
        "correct": 1,
        "sol": "<p>The squared distance for circle i is \\(a_i^2/2-a_id+c^2/2-cd+d^2\\). Equality for i=1,2, followed by division by a1-a2, gives d=(a1+a2)/2=c+2k. Each ai satisfies \\(a_i^2-2da_i+c^2+2k^2=0\\). Substitution therefore gives \\(p^2=-k^2-cd+d^2=2kc+3k^2\\).</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 6(iii)(b). Catalogue: Supply.</a></p>",
        "topic": "Geometry / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 5,
        "selectionId": "S008",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "6(iii)(b)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-6",
        "templateFamily": "2025-2-6"
      }
    ],
    "standardMinutes": 75
  },
  {
    "id": "steppractice12p1v2",
    "title": "STEP practice · Year 12 · Paper 1",
    "sub": "Applications of Mathematical Knowledge · STEP adaptations",
    "type": 1,
    "group": 6,
    "stepAdapted": true,
    "questions": [
      {
        "n": 1,
        "stem": "The trapezium rule with four equal strips approximates \\(\\int_0^2(x^2+1)\\,dx\\). By how much does the approximation exceed the exact integral?",
        "opts": [
          "1/24",
          "0",
          "1/6",
          "1/12",
          "1/3"
        ],
        "correct": 3,
        "sol": "<p>The strip width is 1/2 and the five function values are 1,5/4,2,13/4,5. The trapezium estimate is (1/4)[1+2(5/4+2+13/4)+5]=19/4. The exact integral is [x³/3+x]₀²=14/3. The excess is 19/4−14/3=1/12.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Integration",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "O009",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O009",
        "templateFamily": "O009"
      },
      {
        "n": 2,
        "stem": "The two lines \\(y=c+x\\) and \\(y=c-x\\) touch a circle with centre \\((0,a)\\), where \\(a&gt;c\\). Which option gives the squared radius and the two contact points?",
        "opts": [
          "\\(r^2=(a-c)^2;\\ (\\pm(a-c)/2,(a+c)/2)\\)",
          "\\(r^2=(a-c)^2/2;\\ (\\pm(a+c)/2,(a-c)/2)\\)",
          "\\(r^2=(a-c)^2/2;\\ (\\pm(a-c)/2,(a+c)/2)\\)",
          "\\(r^2=(a+c)^2/2;\\ (\\pm(a-c)/2,(a+c)/2)\\)",
          "\\(r^2=(a-c)^2/4;\\ (\\pm(a-c),(a+c)/2)\\)"
        ],
        "correct": 2,
        "sol": "<p>The radius to the contact on y=c+x is perpendicular to this line, so it lies on y=a-x. Their intersection is \\(((a-c)/2,(a+c)/2)\\). Its squared distance from (0,a) is two copies of ((a-c)/2)², giving (a-c)²/2. Reflection in the y-axis gives the other contact. No point-to-line distance formula is required.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 6(ii). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S007",
        "stepSource": {
          "year": 2025,
          "paper": "II",
          "part": "6(ii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"
        },
        "sourceGroup": "2025-2-6",
        "templateFamily": "2025-2-6"
      },
      {
        "n": 3,
        "stem": "Outward equilateral triangles are built on the sides of a triangle of sides 3,4,5 and area 6. L,M,N are their centres. You may use that the squared distance between any two of these centres equals \\((a^2+b^2+c^2+4\\sqrt3\\Delta)/6\\), where a,b,c and Δ are the original side lengths and area. What is the area of LMN?",
        "opts": [
          "\\(3+25\\sqrt3/12\\)",
          "\\(6\\)",
          "\\(3+25\\sqrt3/6\\)",
          "\\(6+25\\sqrt3/6\\)",
          "\\(25\\sqrt3/12\\)"
        ],
        "correct": 0,
        "sol": "<p>The supplied expression is symmetric, so all three centre-to-centre distances are equal. LMN is therefore equilateral, with squared side length (50+24√3)/6. Its area is √3/4 times this squared length, giving (50√3+72)/24=3+25√3/12.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper I, question 7(ii), equilateral conclusion. Catalogue: Supply.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.0,
        "selectionId": "S131",
        "stepSource": {
          "year": 2017,
          "paper": "I",
          "part": "7(ii), equilateral conclusion",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%201.pdf"
        },
        "sourceGroup": "2017-1-7",
        "templateFamily": "2017-1-7"
      },
      {
        "n": 4,
        "stem": "A and B independently toss a coin whose head probability is p, where 0&lt;p&lt;1. Each stops at their first head. For integer s≥2, what is the probability that their combined number of tosses is s?",
        "opts": [
          "\\(p^2(1-p)^{s-2}\\)",
          "\\((s-1)p^2(1-p)^{s-2}\\)",
          "\\(sp^2(1-p)^{s-2}\\)",
          "\\((s-1)p(1-p)^{s-1}\\)",
          "\\((s-1)p^2(1-p)^s\\)"
        ],
        "correct": 1,
        "sol": "<p>If A takes i tosses, B must take s−i, with i=1,…,s−1. Each case has two final heads and s−2 preceding tails, of probability p²(1−p)^(s−2). These s−1 cases are disjoint, giving the stated product.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 12(i), S. Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 5,
        "estimatedMinutes": 3,
        "selectionId": "S092",
        "stepSource": {
          "year": 2020,
          "paper": "III",
          "part": "12(i), S",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"
        },
        "sourceGroup": "2020-3-12",
        "templateFamily": "2020-3-12"
      },
      {
        "n": 5,
        "stem": "In a nondegenerate triangle OXY write \\(\\overrightarrow{OX}=\\mathbf x\\), \\(\\overrightarrow{OY}=\\mathbf y\\), with lengths p and q. The internal angle-bisector at O meets XY at B, and \\(\\overrightarrow{OB}=\\lambda(p\\mathbf y+q\\mathbf x)\\). Which option gives λ, the ratio XB:BY, and the condition for OB to be perpendicular to XY?",
        "opts": [
          "\\(\\lambda=1/(p+q),\\ XB:BY=p:q,\\ p=2q\\)",
          "\\(\\lambda=1/(p-q),\\ XB:BY=p:q,\\ p=q\\)",
          "\\(\\lambda=1/(pq),\\ XB:BY=p:q,\\ p=q\\)",
          "\\(\\lambda=1/(p+q),\\ XB:BY=q:p,\\ p=q\\)",
          "\\(\\lambda=1/(p+q),\\ XB:BY=p:q,\\ p=q\\)"
        ],
        "correct": 4,
        "sol": "<p>A point on XY has coefficients of x and y summing to one, so λ(p+q)=1. The coefficient of y is p/(p+q), which gives XB:BY=p:q. If the bisector is also perpendicular to XY, the two right triangles OXB and OYB share an acute angle and side OB, so they are congruent and p=q. Conversely, an isosceles triangle has its internal bisector perpendicular to its base.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 4(i)(b)–(c). Catalogue: Direct.</a></p>",
        "topic": "Geometry",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S023",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "4(i)(b)–(c)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-4",
        "templateFamily": "2024-2-4"
      },
      {
        "n": 6,
        "stem": "Define \\(h(x)=x^2-x-4|x|+|x(x-5)|\\). Which list gives its formulas on x≤0, 0≤x≤5 and x≥5, in that order?",
        "opts": [
          "\\(2x^2-2x;\\ 0;\\ 2x^2-10x\\)",
          "\\(0;\\ 2x^2-10x;\\ 0\\)",
          "\\(2x^2-2x;\\ 2x^2;\\ 2x^2-10x\\)",
          "\\(2x^2+2x;\\ 0;\\ 2x^2-10x\\)",
          "\\(2x^2-10x;\\ 0;\\ 2x^2-2x\\)"
        ],
        "correct": 0,
        "sol": "<p>For x≤0, |x|=-x and x(x−5)≥0, giving 2x²−2x. Between 0 and 5, |x|=x and |x(x−5)|=-x²+5x, so all terms cancel. For x≥5 both quantities inside moduli are nonnegative, giving 2x²−10x. The endpoint formulas agree at 0 and 5, so the piecewise description is complete.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 4(iii). Catalogue: Direct.</a></p>",
        "topic": "Functions and Graphs",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3.5,
        "selectionId": "S063",
        "stepSource": {
          "year": 2022,
          "paper": "II",
          "part": "4(iii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"
        },
        "sourceGroup": "2022-2-4",
        "templateFamily": "modulus-piecewise"
      },
      {
        "n": 7,
        "stem": "In triangle ABC, ∠A=α, ∠B=2α&lt;90°, and BC=x. You may use AB=(3−4sin²α)x. D is the midpoint of AB and E is the foot of the perpendicular from C to AB. What is DE? You may also use cos2α=1−2sin²α.",
        "opts": [
          "xcosα/2",
          "xcos2α",
          "xsinα",
          "x",
          "x/2"
        ],
        "correct": 4,
        "sol": "<p>BE=xcos2α=(1−2sin²α)x. Also DB=AB/2=(3/2−2sin²α)x. Their difference is x/2. Both D and E lie on the ray from B toward A, so DE=|DB−BE|=x/2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2015, Paper II, question 2, DE. Catalogue: Supply.</a></p>",
        "topic": "Geometry / Trigonometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.5,
        "selectionId": "S168",
        "stepSource": {
          "year": 2015,
          "paper": "II",
          "part": "2, DE",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2015%20STEP%202.pdf"
        },
        "sourceGroup": "2015-2-2",
        "templateFamily": "2015-2-2"
      },
      {
        "n": 8,
        "stem": "AB is a diameter of a horizontal circular path. D lies strictly between A and B. A vertical pole of height h has base D. C lies on the circle with DC perpendicular to AB. The angles of elevation of the pole top from A,B,C are α,β,φ. Which relation holds?",
        "opts": [
          "\\(\\tan^2\\phi=\\tan^2\\alpha+\\tan^2\\beta\\)",
          "\\(2\\tan^2\\phi=\\tan\\alpha\\tan\\beta\\)",
          "\\(\\tan^2\\phi=\\tan\\alpha\\tan\\beta\\)",
          "\\(\\tan\\phi=\\tan\\alpha+\\tan\\beta\\)",
          "\\(\\tan\\phi=(\\tan\\alpha+\\tan\\beta)/2\\)"
        ],
        "correct": 2,
        "sol": "<p>Let AD=u, DB=v and DC=w. Since angle ACB is a right angle and CD is the altitude to its hypotenuse, similar triangles give w²=uv. Also tanα=h/u,tanβ=h/v,tanφ=h/w. Thus tanα tanβ=h²/(uv)=h²/w²=tan²φ. No compound-angle identity is needed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper I, question 6, flagpole relation. Catalogue: Direct.</a></p>",
        "topic": "Geometry / Trigonometry",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.0,
        "selectionId": "S215",
        "stepSource": {
          "year": 2012,
          "paper": "I",
          "part": "6, flagpole relation",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%201.pdf"
        },
        "sourceGroup": "2012-1-6",
        "templateFamily": "2012-1-6"
      },
      {
        "n": 9,
        "stem": "For real t, the number of tangents from (1,t²−1) to x²/4+y²=1 equals the number of distinct real roots z of 3z²−4(t²−1)z+1=0. Put a=√(1−√3/2) and b=√(1+√3/2). Which classification is correct?",
        "opts": [
          "Two if |t|&lt;a; one if |t|=a; none otherwise",
          "Two for all t except ±a,±b, where there is one",
          "Two if |t|&gt;b; one if |t|=b; none otherwise",
          "Two if a&lt;|t|&lt;b; one at the endpoints; none otherwise",
          "Two if |t|&lt;a or |t|&gt;b; one if |t|=a or b; none otherwise"
        ],
        "correct": 4,
        "sol": "<p>The discriminant is 16(t²−1)²−12. It is positive when |t²−1|&gt;√3/2, which means t²&lt;1−√3/2 or t²&gt;1+√3/2. These are |t|&lt;a or |t|&gt;b. A zero discriminant at |t|=a or b gives one distinct root and one tangent; between a and b there are no real roots.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper III, question 7(i), tangent count. Catalogue: Supply.</a></p>",
        "topic": "General algebra / Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.0,
        "selectionId": "S140",
        "stepSource": {
          "year": 2017,
          "paper": "III",
          "part": "7(i), tangent count",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%203.pdf"
        },
        "sourceGroup": "2017-3-7",
        "templateFamily": "2017-3-7"
      },
      {
        "n": 10,
        "stem": "What is the exact value of \\[\\int_{-2}^{2}\\frac{x^4+3x^2+1}{1+e^{x^3}}\\,dx?\\] You may use that, for continuous even h and positive f satisfying f(x)f(−x)=1, \\(\\int_{-a}^a h(x)/(1+f(x))\\,dx=\\int_0^a h(x)\\,dx\\).",
        "opts": [
          "62/5",
          "72/5",
          "41/5",
          "164/5",
          "0",
          "82/5"
        ],
        "correct": 5,
        "sol": "<p>The numerator h(x)=x⁴+3x²+1 is even, and f(x)=e^(x³) has f(x)f(−x)=1. Apply the supplied result to replace the original integral by ∫₀²(x⁴+3x²+1)dx. Power integration gives [x⁵/5+x³+x]₀²=32/5+8+2=82/5. No exponential antiderivative is needed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 5(iii). Catalogue: Supply.</a></p>",
        "topic": "Integration",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "S073",
        "stepSource": {
          "year": 2022,
          "paper": "III",
          "part": "5(iii)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"
        },
        "sourceGroup": "2022-3-5",
        "templateFamily": "symmetric-integral"
      },
      {
        "n": 11,
        "stem": "What is the coefficient of x⁶ in \\((1+x)^8(1-x)^6\\)?",
        "opts": [
          "35",
          "5",
          "−20",
          "15",
          "−5"
        ],
        "correct": 4,
        "sol": "<p>Rewrite the product as (1−x²)⁶(1+x)². To produce x⁶, use the x⁶ term from the first factor with 1, or its x⁴ term with x². The term 2x cannot contribute since the first factor has only even powers. The coefficient is −C(6,3)+C(6,2)=−20+15=−5.</p><p class=\"step-source\">Original TMUA-style completion question.</p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 5.5,
        "estimatedMinutes": 3,
        "selectionId": "O012",
        "stepSource": {
          "original": true
        },
        "sourceGroup": "O012",
        "templateFamily": "O012"
      },
      {
        "n": 12,
        "stem": "Four players independently choose a uniformly random integer from 1 to n, where n≥3. There is a winner only if one player’s number is strictly smaller than each of the other three. What is the probability that the game has a winner? You may use \\(\\sum_{r=1}^m r^3=m^2(m+1)^2/4\\).",
        "opts": [
          "\\((n-1)/n\\)",
          "\\((n-1)^2/(4n^2)\\)",
          "\\((n-1)^3/n^3\\)",
          "\\((n-1)(n-2)/n^2\\)",
          "\\(1-1/n^3\\)",
          "\\((n-1)^2/n^2\\)"
        ],
        "correct": 5,
        "sol": "<p>For one named player to win with number a, its probability is (1/n)((n−a)/n)³. Sum over a=1,…,n−1. The events that the four players win are disjoint, so multiply this sum by 4. This gives \\(4n^{-4}\\sum_{r=1}^{n-1}r^3=4n^{-4}(n-1)^2n^2/4=(n-1)^2/n^2\\). Ties at the minimum correctly contribute no winner.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 12(i), four players. Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4,
        "selectionId": "S029",
        "stepSource": {
          "year": 2024,
          "paper": "II",
          "part": "12(i), four players",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"
        },
        "sourceGroup": "2024-2-12",
        "templateFamily": "2024-2-12"
      },
      {
        "n": 13,
        "stem": "Inside the closed square −π≤x,y≤π, the locus sin y=sin x contains the segment y=x. What other points must be added to give the complete locus?",
        "opts": [
          "The same two segments and the whole segment y=−x",
          "The segment y=−x only",
          "Only the two points (−π,π),(π,−π)",
          "The segments y=π−x for 0≤x≤π and y=−π−x for −π≤x≤0, and the points (−π,π),(π,−π)",
          "The same two segments only"
        ],
        "correct": 3,
        "sol": "<p>The general possibilities are y=x+2kπ and y=π−x+2kπ. The first gives y=x plus two isolated opposite corners for k=±1. The second gives the stated two segments for k=0 and −1. All other integer k put the point outside the square. In particular the two corner solutions would be lost by listing only the three visible line segments.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2017, Paper II, question 3(i). Catalogue: Direct.</a></p>",
        "topic": "Trigonometry / Geometry",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 3.0,
        "selectionId": "S135",
        "stepSource": {
          "year": 2017,
          "paper": "II",
          "part": "3(i)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2017%20STEP%202.pdf"
        },
        "sourceGroup": "2017-2-3",
        "templateFamily": "2017-2-3"
      },
      {
        "n": 14,
        "stem": "Let \\(\\alpha=\\sqrt2+\\sqrt3+\\sqrt5\\). You may use that \\(f(\\sqrt2+\\sqrt3)=0\\), where \\(f(t)=t^4-10t^2+1\\). Which polynomial has α as a root?",
        "opts": [
          "\\((x^4+20x^2-24)^2-80x^6\\)",
          "\\((x^4-20x^2-24)^2-80x^6\\)",
          "\\((x^4+20x^2-24)^2-20x^6\\)",
          "\\((x^4+20x^2-24)^2-80x^2\\)",
          "\\((x^4+20x^2+24)^2-80x^6\\)"
        ],
        "correct": 0,
        "sol": "<p>Substitute t=x−√5 into f. Expansion gives \\(f(x-\\sqrt5)=x^4+20x^2-24-4\\sqrt5x^3\\). This vanishes at x=α. Isolate the surd term and square, obtaining \\((x^4+20x^2-24)^2=80x^6\\). Squaring may add roots, but the question asks only for a polynomial having α as a root, so that does not invalidate the construction.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 4(ii). Catalogue: Supply.</a></p>",
        "topic": "Surds / General algebra",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4,
        "selectionId": "S044",
        "stepSource": {
          "year": 2023,
          "paper": "II",
          "part": "4(ii)",
          "catalogueType": "Supply",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-2-4",
        "templateFamily": "polynomial-surds"
      },
      {
        "n": 15,
        "stem": "An aircraft has n≥3 passengers with distinct assigned seats. Passenger 1 chooses a seat uniformly at random. In order, each later passenger takes their assigned seat if free, otherwise chooses uniformly among free seats. What is the probability that passenger n−1 gets their assigned seat?",
        "opts": [
          "(n−1)/n",
          "1/2",
          "2/3",
          "1/3",
          "(n−2)/(n−1)"
        ],
        "correct": 2,
        "sol": "<p>Consider the three distinguished seats numbered 1,n−1,n. Until one is chosen by the displacement chain, all three remain free and are symmetric. If seat 1 is reached first the chain ends; if seat n is reached first the chain pauses until the last passenger. Either case leaves seat n−1 free for its owner. If seat n−1 is reached first, its owner will be displaced. Symmetry between the three distinguished seats makes the three first-hit events equiprobable, giving 2/3.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 11(iv). Catalogue: Supply.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6,
        "estimatedMinutes": 4.5,
        "selectionId": "S078",
        "stepSource": {
          "year": 2021,
          "paper": "II",
          "part": "11(iv)",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"
        },
        "sourceGroup": "2021-2-11",
        "templateFamily": "coin-stopping"
      },
      {
        "n": 16,
        "stem": "Which ordered pairs of primes (p,q) make \\(p^2+pq+q^2\\) the square of an integer?",
        "opts": [
          "(3,5) and (5,3) only",
          "No pairs",
          "(2,3) and (3,2) only",
          "Infinitely many pairs",
          "(2,7) and (7,2) only",
          "(3,3) only"
        ],
        "correct": 0,
        "sol": "<p>Write the square as n². Then max(p,q)&lt;n&lt;p+q, and \\((p+q-n)(p+q+n)=pq\\). The first positive integer factor is smaller than both primes, so it is 1. Hence n=p+q−1. Substituting and simplifying gives (p−2)(q−2)=3. Its positive integer factor pairs are (1,3),(3,1), giving (3,5),(5,3). Neither prime can be 2 since that would make the product zero. Both pairs give n=7.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S056",
        "stepSource": {
          "year": 2023,
          "paper": "III",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"
        },
        "sourceGroup": "2023-3-5",
        "templateFamily": "2023-3-5"
      },
      {
        "n": 17,
        "stem": "For a positive integer x let d(x) be its decimal digit sum. You are given that every solution of x=44d(x) has at most four digits. Which is the complete set of solutions?",
        "opts": [
          "{396,792}",
          "{792}",
          "{198,396}",
          "{396,792,1188}",
          "{396}"
        ],
        "correct": 1,
        "sol": "<p>The numbers x and d(x) have the same remainder modulo 9. Hence x=44d(x) forces 43d(x), and therefore d(x), to be divisible by 9. The four-digit bound gives d(x)≤36. The only possible x values are 396,792,1188,1584, corresponding to digit sums 9,18,27,36. Their actual digit sums are all 18. Thus only x=44·18=792 works.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 5(ii), digit equation. Catalogue: Supply.</a></p>",
        "topic": "Number Theory",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 5,
        "selectionId": "S086",
        "stepSource": {
          "year": 2020,
          "paper": "II",
          "part": "5(ii), digit equation",
          "catalogueType": "Supply",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"
        },
        "sourceGroup": "2020-2-5",
        "templateFamily": "2020-2-5"
      },
      {
        "n": 18,
        "stem": "Three people toss independent coins with head probability p. If all agree they stop. Otherwise, the two whose coins agree toss again, while the third turns their coin over. They stop if the three now agree. What is the minimum probability of stopping within these two rounds, as p varies from 0 to 1?",
        "opts": [
          "1/2",
          "7/16",
          "3/8",
          "1/4",
          "9/16"
        ],
        "correct": 1,
        "sol": "<p>Put q=1−p. Immediate agreement has probability p³+q³. Starting with two heads and one tail, the flipped coin becomes H, so agreement in round two adds 3p²q·p². The reverse pattern adds 3pq²·q². The total is p³+q³+3pq(p³+q³). Put t=pq: this becomes (1−3t)(1+3t)=1−9t². Since 0≤t≤1/4, its minimum is 1−9/16=7/16, attained at p=q=1/2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 11(ii). Catalogue: Direct.</a></p>",
        "topic": "Probability and Statistics",
        "estimatedDifficulty": 6.5,
        "estimatedMinutes": 4.5,
        "selectionId": "S103",
        "stepSource": {
          "year": 2019,
          "paper": "I",
          "part": "11(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"
        },
        "sourceGroup": "2019-1-11",
        "templateFamily": "2019-1-11"
      },
      {
        "n": 19,
        "stem": "Let f(x)=x²−px+q, with real p,q. You may use \\[f(f(x))-x=[f(x)-x]\\,[x^2+(1-p)x+q-p+1].\\] For which p,q does iteration of f have at least one real constant sequence, but no real nonconstant sequence of period two?",
        "opts": [
          "\\((p+1)^2-4q&gt;4\\)",
          "\\((p+1)^2-4q&lt;0\\)",
          "\\((p+1)^2-4q=0\\) only",
          "\\(0\\le(p+1)^2-4q\\le4\\)",
          "\\(0&lt;(p-1)^2-4q&lt;4\\)"
        ],
        "correct": 3,
        "sol": "<p>Fixed points solve x²−(p+1)x+q=0, so exist exactly when D=(p+1)²−4q≥0. The second factor has discriminant D−4. For D&lt;4 it has no real roots; at D=4 it has a repeated root which is also fixed. For D&gt;4 its two distinct roots are not fixed: a common root would be (p−1)/2, and substitution forces D=4. Thus nonconstant two-cycles exist exactly when D&gt;4. Combining the conditions gives 0≤D≤4.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 5(ii). Catalogue: Direct.</a></p>",
        "topic": "Sequences and Series / General algebra",
        "estimatedDifficulty": 7,
        "estimatedMinutes": 4.5,
        "selectionId": "S107",
        "stepSource": {
          "year": 2019,
          "paper": "II",
          "part": "5(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"
        },
        "sourceGroup": "2019-2-5",
        "templateFamily": "two-cycle"
      },
      {
        "n": 20,
        "stem": "Which is the complete list of real polynomials p satisfying \\(2p(p(x))+3p(x)^2-4p(x)=x^4\\) for every real x?",
        "opts": [
          "\\(p(x)=x^2+1\\) or \\(p(x)=-x^2-2\\)",
          "\\(p(x)=x^2\\) only",
          "\\(p(x)=2-x^2\\) only",
          "\\(p(x)=2-x^2\\) or \\(p(x)=(x^2+1)/2\\)",
          "\\(p(x)=(x^2+1)/2\\) only"
        ],
        "correct": 3,
        "sol": "<p>Degree 0 or 1 cannot yield degree 4. If degree d&gt;2, p(p(x)) has degree d²&gt;2d, so its leading term cannot cancel. Thus p=ax²+bx+c. The left side is (2a+3)p²+(2b−4)p+2c. Comparing x⁴ gives a²(2a+3)=1, or (a+1)²(2a−1)=0, so a=−1 or 1/2. The x³ coefficient forces b=0. The x² coefficient gives c=2/(2a+3), hence c=2 or 1/2 respectively. In both cases the constant coefficient vanishes, verifying the two polynomials.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2012, Paper II, question 2(ii). Catalogue: Direct.</a></p>",
        "topic": "Polynomials / Functions",
        "estimatedDifficulty": 8.5,
        "estimatedMinutes": 5.5,
        "selectionId": "S222",
        "stepSource": {
          "year": 2012,
          "paper": "II",
          "part": "2(ii)",
          "catalogueType": "Direct",
          "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2012%20STEP%202.pdf"
        },
        "sourceGroup": "2012-2-2",
        "templateFamily": "functional-equation"
      }
    ],
    "standardMinutes": 75
  }
];
const STEP_LEGACY_PAPERS = [{"id": "steppractice01p1v1", "title": "STEP practice · Year 01 · Paper 1", "sub": "Applications of Mathematical Knowledge · STEP adaptations", "type": 1, "group": 6, "stepAdapted": true, "questions": [{"n": 1, "stem": "An n-sided die has face probabilities \\(1/n+\\varepsilon_i\\), with \\(\\sum_{i=1}^n\\varepsilon_i=0\\) and at least one εᵢ nonzero. Two rolls are independent. Compared with a fair n-sided die, by how much is the probability of two identical scores changed?", "opts": ["Increased by \\(\\sum\\varepsilon_i^2\\)", "Increased by \\(\\sum|\\varepsilon_i|/n\\)", "Increased by \\(2\\sum\\varepsilon_i^2\\)", "Unchanged", "Decreased by \\(\\sum\\varepsilon_i^2\\)"], "correct": 0, "sol": "<p>The repeat probability is Σ(1/n+εᵢ)²=1/n+(2/n)Σεᵢ+Σεᵢ²=1/n+Σεᵢ². A fair die gives 1/n. At least one nonzero εᵢ makes the added sum strictly positive. The comparison holds for every admissible bias, not just a particular face distribution.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 12(i). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S089", "stepSource": {"year": 2020, "paper": "II", "part": "12(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-12", "templateFamily": "2020-2-12"}, {"n": 2, "stem": "An acute triangle has side lengths 5,6,7 and area \\(6\\sqrt6\\). A point inside or on it has perpendicular distances x,y,z to those sides. What is the minimum of x²+y²+z²? You may use \\[(a^2+b^2+c^2)(x^2+y^2+z^2)=(ax+by+cz)^2+(bx-ay)^2+(cy-bz)^2+(az-cx)^2.\\]", "opts": ["\\(864/49\\)", "\\(216/49\\)", "\\(432/55\\)", "\\(72/5\\)", "\\(432/49\\)", "\\(216/55\\)"], "correct": 2, "sol": "<p>Area decomposition gives 5x+6y+7z=12√6. The identity therefore bounds x²+y²+z² below by (12√6)²/(25+36+49)=864/110=432/55. Equality requires x:y:z=5:6:7. Such a point is inside the triangle: choose its three subtriangle areas in ratios 25:36:49, all positive and summing to the total; their altitudes then have the required ratios. Hence the bound is attainable.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 5(iii)(b). Catalogue: Supply.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S066", "stepSource": {"year": 2022, "paper": "II", "part": "5(iii)(b)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"}, "sourceGroup": "2022-2-5", "templateFamily": "2022-2-5"}, {"n": 3, "stem": "What is the length of the chord cut from \\(x^2+y^2-6x+4y-12=0\\) by the line 3x+4y=16?", "opts": ["10", "6", "8", "\\(2\\sqrt{21}\\)", "\\(2\\sqrt{34}\\)"], "correct": 2, "sol": "<p>Complete squares to obtain centre (3,−2) and radius 5. The perpendicular from the centre has direction (3,4); its foot is (3+3t,−2+4t). Substitution into the line gives 1+25t=16, so t=3/5 and the centre-to-line distance is 5t=3. A perpendicular through a circle’s centre bisects the chord, whose half-length is √(25−9)=4. Hence the chord length is 8.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Geometry", "estimatedDifficulty": 5, "estimatedMinutes": 3.5, "selectionId": "O003", "stepSource": {"original": true}, "sourceGroup": "O003", "templateFamily": "O003"}, {"n": 4, "stem": "Let \\(f(x)=A(x-p)(x-q)(x-r)\\), with p&lt;q&lt;r and A≠0. A tangent at x=a≠p passes through (p,0). What is its gradient?", "opts": ["\\(A(q+r)^2/4\\)", "\\(-A(q-r)^2/2\\)", "\\(A(q-r)^2/4\\)", "\\(A(p-q)(p-r)\\)", "\\(-A(q-r)^2/4\\)"], "correct": 4, "sol": "<p>The tangent condition is f′(a)=f(a)/(a−p). Expanding the cubic before differentiating and simplifying gives (a−p)(2a−q−r)=0; since a≠p, a=(q+r)/2. The tangent gradient is then A(a−q)(a−r)=A[(r−q)/2][(q−r)/2]=−A(q−r)²/4.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 1(i). Catalogue: Direct.</a></p>", "topic": "Differentiation / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S104", "stepSource": {"year": 2019, "paper": "II", "part": "1(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"}, "sourceGroup": "2019-2-1", "templateFamily": "2019-2-1"}, {"n": 5, "stem": "For positive integers n, two real numbers Fₙ,Gₙ satisfy \\(0&lt;F_n&lt;1/(2n)\\) and \\(0&lt;G_n&lt;1/(2n+1)\\). Let \\(H_n=4F_n+7G_n\\). What is the smallest n for which these bounds alone guarantee that Hₙ cannot be an integer?", "opts": ["5", "6", "10", "4", "7", "11"], "correct": 1, "sol": "<p>The bounds imply \\(0&lt;H_n&lt;4/(2n)+7/(2n+1)\\). This upper bound decreases with n. At n=5 it is 2/5+7/11=57/55&gt;1, so the bounds still permit H₅=1. At n=6 it is 1/3+7/13=34/39&lt;1, excluding every integer. Thus 6 is first. More explicitly, when the upper bound exceeds 1, the positive open ranges of the summands have an open interval sum containing 1, so no earlier n is guaranteed.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 7(v). Catalogue: Supply.</a></p>", "topic": "Sequences and Series / Number Theory", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S037", "stepSource": {"year": 2024, "paper": "III", "part": "7(v)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-7", "templateFamily": "2024-3-7"}, {"n": 6, "stem": "A real sequence is defined by \\(x_1=a\\) and \\(x_{n+1}=x_n^2-2\\). For exactly which real a does \\(x_n\\to+\\infty\\)?", "opts": ["a≤−2 or a≥2", "a&gt;2 only", "a&lt;0 or a&gt;2", "a≠0", "a&lt;−2 or a&gt;2"], "correct": 4, "sol": "<p>If |a|≤2, squaring and subtracting 2 maps [−2,2] into itself, so the sequence stays bounded. If x&gt;2, then (x²−2)−2=(x−2)(x+2)&gt;4(x−2); repeated application makes the distance above 2 grow without bound. Thus a&gt;2 works. If a&lt;−2, the second term exceeds 2, so that case also works. The endpoints remain bounded: −2 maps to 2, which is fixed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper III, question 8(ii). Catalogue: Direct.</a></p>", "topic": "Sequences and Series", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S081", "stepSource": {"year": 2021, "paper": "III", "part": "8(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%203.pdf"}, "sourceGroup": "2021-3-8", "templateFamily": "2021-3-8"}, {"n": 7, "stem": "Let \\(0&lt;a&lt;b\\) and \\(U,V&gt;0\\). A curve \\(y=p(c-x)^3\\), with \\(p&gt;0\\), passes through \\((a,U)\\) and \\((b,-V)\\). What is c?", "opts": ["\\(\\dfrac{a\\sqrt[3]U+b\\sqrt[3]V}{\\sqrt[3]U+\\sqrt[3]V}\\)", "\\(\\dfrac{aU+bV}{U+V}\\)", "\\(\\dfrac{aV+bU}{U+V}\\)", "\\(\\dfrac{a\\sqrt[3]V+b\\sqrt[3]U}{\\sqrt[3]U+\\sqrt[3]V}\\)", "\\(\\dfrac{b\\sqrt[3]U-a\\sqrt[3]V}{\\sqrt[3]U-\\sqrt[3]V}\\)"], "correct": 3, "sol": "<p>The signs and p&gt;0 force a&lt;c&lt;b. The two conditions are p(c-a)³=U and p(b-c)³=V. Divide and take the positive cube root: (c-a)/(b-c)=∛U/∛V. Cross-multiplication gives c(∛U+∛V)=a∛V+b∛U. The denominator is positive, so the displayed expression is valid also when U=V; then c=(a+b)/2.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 3(iv). Catalogue: Direct.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S016", "stepSource": {"year": 2025, "paper": "III", "part": "3(iv)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-3", "templateFamily": "2025-3-3"}, {"n": 8, "stem": "A monic quartic f has distinct roots 0&lt;a&lt;b&lt;c together with 0. The unsigned areas between its graph and the x-axis on [0,a], [a,b], [b,c] are K,2K,K respectively, where K&gt;0. Let \\(F(x)=\\int_0^x f(t)\\,dt\\). Which describes the turning points of F?", "opts": ["Maximum at b only; minima at a and c; F(c)=0", "Maxima at 0 and b; minima at a and c; F(a)=−K, F(b)=2K, F(c)=K", "Minima at 0 and b; maxima at a and c; F(a)=K, F(b)=−K, F(c)=0", "Maxima at 0 and b; minima at a and c; F(a)=−K, F(b)=K, F(c)=0", "Maxima at a and c; minima at 0 and b; F(a)=−K, F(b)=K"], "correct": 3, "sol": "<p>Because f is monic with four simple roots, its signs from left to right are +,−,+,−,+. These are the signs of F′, giving maxima at 0,b and minima at a,c. Signed integration gives F(a)=−K, F(b)=−K+2K=K and F(c)=−K+2K−K=0.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 8(i), graph only. Catalogue: Direct.</a></p>", "topic": "Integration / Functions and Graphs", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S087", "stepSource": {"year": 2020, "paper": "II", "part": "8(i), graph only", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-8", "templateFamily": "2020-2-8"}, {"n": 9, "stem": "In a nondegenerate triangle OXY write \\(\\overrightarrow{OX}=\\mathbf x\\), \\(\\overrightarrow{OY}=\\mathbf y\\), with lengths p and q. The internal angle-bisector at O meets XY at B, and \\(\\overrightarrow{OB}=\\lambda(p\\mathbf y+q\\mathbf x)\\). Which option gives λ, the ratio XB:BY, and the condition for OB to be perpendicular to XY?", "opts": ["\\(\\lambda=1/(p+q),\\ XB:BY=p:q,\\ p=q\\)", "\\(\\lambda=1/(p-q),\\ XB:BY=p:q,\\ p=q\\)", "\\(\\lambda=1/(p+q),\\ XB:BY=q:p,\\ p=q\\)", "\\(\\lambda=1/(p+q),\\ XB:BY=p:q,\\ p=2q\\)", "\\(\\lambda=1/(pq),\\ XB:BY=p:q,\\ p=q\\)"], "correct": 0, "sol": "<p>A point on XY has coefficients of x and y summing to one, so λ(p+q)=1. The coefficient of y is p/(p+q), which gives XB:BY=p:q. If the bisector is also perpendicular to XY, the two right triangles OXB and OYB share an acute angle and side OB, so they are congruent and p=q. Conversely, an isosceles triangle has its internal bisector perpendicular to its base.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 4(i)(b)–(c). Catalogue: Direct.</a></p>", "topic": "Geometry", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S023", "stepSource": {"year": 2024, "paper": "II", "part": "4(i)(b)–(c)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-4", "templateFamily": "2024-2-4"}, {"n": 10, "stem": "Polynomials p and q satisfy p(x)&gt;0 for all real x and \\(q\\prime(x)=q(x)-p(x)\\). Also q(x) tends to positive infinity as x tends to either positive or negative infinity. How many real roots can q have?", "opts": ["Any positive even number", "Exactly 1", "Any nonnegative even number", "0", "Exactly 2", "The information is insufficient"], "correct": 3, "sol": "<p>The positive tails ensure that q attains a global minimum at some finite real a. At that point q′(a)=0, so the stated identity gives q(a)=p(a)&gt;0. Every value of q is at least this positive minimum. Consequently q never reaches zero. This uses only polynomial continuity and the stationary-point condition, without exponential differentiation.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 3(ii)(a). Catalogue: Supply.</a></p>", "topic": "Differentiation / Functions and Graphs", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S043", "stepSource": {"year": 2023, "paper": "II", "part": "3(ii)(a)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-3", "templateFamily": "2023-2-3"}, {"n": 11, "stem": "M₄ and T₄ approximate \\(\\int_0^\\pi\\sin x\\,dx\\), using respectively four equal-width midpoint rectangles and four equal-width trapezia. You may use \\(\\sum_{r=1}^n\\sin((2r-1)t)=(1-\\cos2nt)/(2\\sin t)\\) , \\(\\sin2t=2\\sin t\\cos t\\), and \\(\\cos2t=2\\cos^2t-1\\). What is M₄/T₄?", "opts": ["\\(\\cos(\\pi/8)\\)", "\\(1/\\cos(\\pi/8)\\)", "\\(1\\)", "\\(1/\\cos(\\pi/4)\\)", "\\(2\\cos(\\pi/8)\\)"], "correct": 1, "sol": "<p>The midpoint formula gives M₄=(π/4)[1/sin(π/8)]. The trapezium rule, whose endpoint contributions vanish, gives T₄=(π/4)(sin(π/4)+1+sin(3π/4))=(π/4)(1+√2). From sin(π/4)=2sin(π/8)cos(π/8) and the usual half-angle relation, (1+√2)sin(π/8)=cos(π/8). Therefore M₄/T₄=1/cos(π/8). Alternatively, the same result follows by pairing adjacent midpoint and endpoint sines with the supplied sum identity.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 6(i) or (ii). Catalogue: Supply.</a></p>", "topic": "Integration / Trigonometry", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S117", "stepSource": {"year": 2018, "paper": "I", "part": "6(i) or (ii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-6", "templateFamily": "2018-1-6"}, {"n": 12, "stem": "For k&gt;0, what is \\(\\displaystyle\\int_{\\pi/6}^{\\pi/3}\\frac1{1+\\tan^k x}\\,dx\\)? You may use that pairing values at x and a+b−x preserves an integral over [a,b].", "opts": ["π/6", "π/4", "π/(12k)", "π/(6k)", "π/12"], "correct": 4, "sol": "<p>Let f(x)=1/(1+tanᵏx). Since tan(π/2−x)=1/tan x on the interval, f(π/2−x)=tanᵏx/(1+tanᵏx). Thus the paired values sum to 1. The integral equals one half the integral of 1 over [π/6,π/3], hence (1/2)(π/6)=π/12. No trigonometric antiderivative is needed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 3(iii). Catalogue: Direct.</a></p>", "topic": "Integration / Trigonometry", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S121", "stepSource": {"year": 2018, "paper": "II", "part": "3(iii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"}, "sourceGroup": "2018-2-3", "templateFamily": "symmetric-integral"}, {"n": 13, "stem": "A non-degenerate triangle has sides a,b,c. Which statement about \\(a^2+bc,b^2+ca,c^2+ab\\) is true?", "opts": ["They always form a non-degenerate triangle", "They do so only when two original sides are equal", "They do so exactly when the original triangle is not obtuse", "They never form a non-degenerate triangle", "They do so exactly when the original triangle is acute"], "correct": 0, "sol": "<p>Assume c is an original largest side. Then (c²+ab)−(a²+bc)=(c−a)(c+a−b)≥0, and similarly it is at least b²+ca. It suffices to check the other two sum to more than c²+ab. Put c=a+b−t, with 0&lt;t≤min(a,b). Their sum minus the largest is (a−b)²+ab+t(a+b−t)&gt;0. All three transformed sides are positive, so they always form a triangle.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 4(iii)(D). Catalogue: Direct.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S085", "stepSource": {"year": 2020, "paper": "II", "part": "4(iii)(D)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-4", "templateFamily": "2020-2-4"}, {"n": 14, "stem": "Nonzero real u,v satisfy \\(u+v+1/(uv)=3\\). You may use that their product P=uv must satisfy \\((P-1)^2(4P-1)\\le0\\). What is the greatest possible value of \\(1/u+1/v+uv\\)?", "opts": ["There is no upper bound", "3", "15/4", "1", "−15/4"], "correct": 1, "sol": "<p>The supplied inequality gives P≤1/4 or P=1, so in all cases P≤1. The target is (u+v)/P+P=3/P−1/P²+P=3+(P−1)³/P². Since P²&gt;0 and P−1≤0, it is at most 3. Equality is attained with P=1 and u+v=2, namely u=v=1, which also satisfies the original constraint.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper III, question 1(iv). Catalogue: Supply.</a></p>", "topic": "General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S126", "stepSource": {"year": 2018, "paper": "III", "part": "1(iv)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf"}, "sourceGroup": "2018-3-1", "templateFamily": "2018-3-1"}, {"n": 15, "stem": "For 0≤x,y≤π, find all pairs satisfying \\(\\cos x+\\cos y-\\cos(x+y)=3/2\\). You may use \\(\\cos x+\\cos y=2\\cos((x+y)/2)\\cos((x-y)/2)\\) and \\(\\cos2t=2\\cos^2t-1\\).", "opts": ["(π/6,π/6) only", "(π/3,2π/3) and (2π/3,π/3)", "No pairs", "(π/3,π/3) and (2π/3,2π/3)", "(π/3,π/3) only"], "correct": 4, "sol": "<p>Put u=(x+y)/2, v=(x−y)/2, t=cos u. The expression is 1+2t cos v−2t². Here cos v≥0. If t≤0 the expression is at most 1. If t&gt;0, cos v≤1 gives an upper bound 1+2t−2t²=3/2−2(t−1/2)². Equality requires t=1/2 and cos v=1. The allowed ranges then force u=π/3 and v=0, hence x=y=π/3.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 4(iii). Catalogue: Supply.</a></p>", "topic": "Trigonometry / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S123", "stepSource": {"year": 2018, "paper": "II", "part": "4(iii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"}, "sourceGroup": "2018-2-4", "templateFamily": "2018-2-4"}, {"n": 16, "stem": "Let \\(\\lfloor t\\rfloor\\) and \\(\\{t\\}=t-\\lfloor t\\rfloor\\) denote the integer and fractional parts. Suppose \\[x+2\\lfloor y\\rfloor+\\{z\\}=3.9,\\quad\\{x\\}+2y+\\lfloor z\\rfloor=5.3,\\quad\\lfloor x\\rfloor+2\\{y\\}+z=5.\\] Which list contains every possible pair (y,z)?", "opts": ["(1.6,2.8) and (1.1,3.8)", "(2.6,1.8) and (2.1,2.8)", "(1.2,3.8) only", "(1.6,2.8) only", "(1.1,3.8) only"], "correct": 0, "sol": "<p>Half the sum is x+2y+z=7.1. Subtracting each equation in turn gives ⌊z⌋+2{y}=3.2, ⌊x⌋+{z}=1.8 and 2⌊y⌋+{x}=2.1. The last two force ⌊x⌋=1,{z}=0.8,⌊y⌋=1,{x}=0.1. Since 0≤2{y}&lt;2, the first allows ⌊z⌋=2 or 3, giving {y}=0.6 or 0.1 respectively. Both pairs satisfy all three equations.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 3(iii). Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S076", "stepSource": {"year": 2021, "paper": "II", "part": "3(iii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"}, "sourceGroup": "2021-2-3", "templateFamily": "floor-systems"}, {"n": 17, "stem": "The three roots of \\(t^3-3t+1=0\\) are a,b,c. Which degree-six polynomial has \\(a+\\sqrt2,b+\\sqrt2,c+\\sqrt2\\) among its roots?", "opts": ["\\((x^3-3x+1)^2-2(3x^2-1)^2\\)", "\\((x^3+3x+1)^2-2(3x^2-1)^2\\)", "\\((x^3+3x+1)^2-(3x^2-1)^2\\)", "\\((x^3+3x+1)^2-2(3x^2+1)^2\\)", "\\((x^3+3x-1)^2-2(3x^2-1)^2\\)"], "correct": 1, "sol": "<p>Replace t by x−√2. The cubic becomes \\(x^3+3x+1+\\sqrt2(1-3x^2)\\). For each requested x this is zero, so \\(x^3+3x+1=\\sqrt2(3x^2-1)\\). Squaring and moving the right side to the left yields the displayed answer. Its leading term is x⁶, so it has the required degree.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 4(iii). Catalogue: Direct.</a></p>", "topic": "Surds / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S045", "stepSource": {"year": 2023, "paper": "II", "part": "4(iii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-4", "templateFamily": "polynomial-surds"}, {"n": 18, "stem": "Let \\(u_0=a\\) and \\(u_{n+1}=7-2|u_n|\\). The sequence has genuine period two if \\(u_{n+2}=u_n\\) for every n≥0 but it is not constant. What are all possible a?", "opts": ["\\(\\{-21/5,-7/5\\}\\)", "\\(\\{-7,7/3\\}\\)", "\\(\\{-7/5,7/5,21/5\\}\\)", "\\(\\{-7/5,21/5\\}\\)", "\\(\\{7/3,21/5\\}\\)", "\\(\\{-7,7/3,7/5,21/5\\}\\)"], "correct": 3, "sol": "<p>Solve f(f(a))=a for f(x)=7−2|x|, splitting at a=0 and |a|=7/2. The roots are −7,7/3,−7/5,21/5. The first two are fixed points and must be excluded. The remaining values form the genuine two-cycle −7/5→21/5→−7/5. In particular +7/5 is not in that cycle: it reaches 21/5 and then −7/5.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 2(i)(b)–(c). Catalogue: Direct.</a></p>", "topic": "Functions and Graphs / Sequences and Series", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S012", "stepSource": {"year": 2025, "paper": "III", "part": "2(i)(b)–(c)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-2", "templateFamily": "two-cycle"}, {"n": 19, "stem": "For real x and \\(0&lt;\\theta&lt;\\pi\\), which is the complete set of solutions of \\[9x^4+(9-12\\sin\\theta)x^2-12x\\cos\\theta+4=0?\\]", "opts": ["\\((1/\\sqrt3,\\pi/3),(-1/\\sqrt3,2\\pi/3)\\)", "\\((2/3,\\pi/2),(-2/3,\\pi/2)\\)", "\\((x,\\theta)=(1/\\sqrt3,\\pi/6),(-1/\\sqrt3,5\\pi/6)\\)", "\\((1/\\sqrt3,\\pi/6)\\) only", "No solutions"], "correct": 2, "sol": "<p>The left side equals (3x−2cosθ)²+(3x²−2sinθ)², using sin²θ+cos²θ=1. Both squares must vanish. Thus x=2cosθ/3 and x²=2sinθ/3. Eliminating x gives 2sin²θ+3sinθ−2=0, so sinθ=1/2 (the other root is −2). Within the stated interval θ=π/6 or 5π/6, giving x=±1/√3 with the corresponding signs.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 6(i). Catalogue: Direct.</a></p>", "topic": "Trigonometry / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 5, "selectionId": "S098", "stepSource": {"year": 2019, "paper": "I", "part": "6(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-6", "templateFamily": "2019-1-6"}, {"n": 20, "stem": "Real numbers x,y,z lie in [-1,1] and satisfy \\(y=2x^2-1\\), \\(z=2y^2-1\\), \\(x=2z^2-1\\). You may use \\(\\cos(2\\theta)=2\\cos^2\\theta-1\\). How many ordered triples are possible?", "opts": ["9", "7", "8", "15", "16", "4"], "correct": 2, "sol": "<p>Write x=cos θ uniquely with 0≤θ≤π. The system is equivalent to cos 8θ=cos θ. Its solutions have θ=2kπ/7 or θ=2kπ/9. The first family has k=0,1,2,3 and the second k=0,1,2,3,4. Their only overlap in [0,π] is θ=0: equality requires 9k=7j. Hence there are 4+5−1=8 distinct x-values, each determining one y,z pair, both still in [-1,1].</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 2(iii)(a). Catalogue: Supply.</a></p>", "topic": "Trigonometry / Functions and Graphs", "estimatedDifficulty": 7, "estimatedMinutes": 4.5, "selectionId": "S042", "stepSource": {"year": 2023, "paper": "II", "part": "2(iii)(a)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-2", "templateFamily": "trig-iteration"}], "standardMinutes": 75, "archived": true, "resumeArchived": true}, {"id": "steppractice02p1v1", "title": "STEP practice · Year 02 · Paper 1", "sub": "Applications of Mathematical Knowledge · STEP adaptations", "type": 1, "group": 6, "stepAdapted": true, "questions": [{"n": 1, "stem": "An acute triangle ABC has side lengths a=BC&gt;b=CA&gt;c=AB and area Δ. A point P may lie anywhere inside or on the triangle. Its perpendicular distances to BC,CA,AB are x,y,z. What is the least possible x+y+z?", "opts": ["\\(2\\Delta/(a+b+c)\\)", "\\(0\\)", "\\(2\\Delta/a\\)", "\\(2\\Delta/b\\)", "\\(6\\Delta/(a+b+c)\\)", "\\(2\\Delta/c\\)"], "correct": 2, "sol": "<p>Splitting the triangle into the three triangles with vertex P gives ax+by+cz=2Δ. Since all distances are nonnegative and a is the largest side, a(x+y+z)≥2Δ. Equality requires y=z=0, which occurs at P=A. Its remaining distance is the altitude 2Δ/a. Thus the lower bound is attained.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 5(ii). Catalogue: Direct.</a></p>", "topic": "Geometry", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S065", "stepSource": {"year": 2022, "paper": "II", "part": "5(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"}, "sourceGroup": "2022-2-5", "templateFamily": "2022-2-5"}, {"n": 2, "stem": "What is the solution set of \\(\\log_2(x-1)+\\log_2(x+1)\\le3+\\log_2x\\)?", "opts": ["\\(1\\le x\\le4+\\sqrt{17}\\)", "\\(4-\\sqrt{17}\\le x\\le4+\\sqrt{17}\\)", "\\(1&lt;x\\le4+\\sqrt{17}\\)", "\\(0&lt;x\\le4+\\sqrt{17}\\)", "\\(x\\ge4+\\sqrt{17}\\)"], "correct": 2, "sol": "<p>The logarithms require x&gt;1. Combining logs and using that base 2 is increasing gives x²−1≤8x, or (x−4)²≤17. This gives 4−√17≤x≤4+√17 before the domain is imposed. Since 4−√17&lt;0, intersection with x&gt;1 gives the stated interval.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Exponentials and Logarithms", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "O001", "stepSource": {"original": true}, "sourceGroup": "O001", "templateFamily": "O001"}, {"n": 3, "stem": "What remainder is left when \\(10^{100}+10^{50}+1\\) is divided by 7?", "opts": ["1", "5", "2", "0", "3"], "correct": 3, "sol": "<p>Powers of 10 have the same remainders as powers of 3. The first six are 3,2,6,4,5,1, so the pattern repeats every six powers. Since 100 leaves remainder 4 and 50 remainder 2 upon division by 6, the two powers leave remainders 4 and 2 modulo 7. Adding the final 1 gives 7, hence remainder 0.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Number Theory", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "O007", "stepSource": {"original": true}, "sourceGroup": "O007", "templateFamily": "O007"}, {"n": 4, "stem": "Write \\(\\lfloor t\\rfloor\\) for the greatest integer not exceeding \\(t\\). What is the complete set of real \\(x\\) satisfying \\[\\sum_{r=0}^{11}\\left\\lfloor x+\\frac r{12}\\right\\rfloor=17?\\]", "opts": ["\\((17/12,3/2]\\)", "\\([4/3,17/12)\\)", "\\([3/2,19/12)\\)", "\\([17/12,19/12)\\)", "\\(\\{17/12\\}\\)", "\\([17/12,3/2)\\)"], "correct": 5, "sol": "<p>Write \\(x=m+t\\), where m is an integer and 0≤t&lt;1. Put j=⌊12t⌋. Of the twelve fractions t+r/12, exactly j reach or exceed 1, so the sum is 12m+j=⌊12x⌋. Consequently the equation is equivalent to \\(17\\le12x&lt;18\\). Dividing by 12 gives the half-open interval shown. The left endpoint is included because floor changes value there; the right is excluded.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 4(ii). Catalogue: Direct.</a></p>", "topic": "Number Theory / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S004", "stepSource": {"year": 2025, "paper": "II", "part": "4(ii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-4", "templateFamily": "floor-systems"}, {"n": 5, "stem": "Which list gives all ordered pairs of positive integers (x,y) satisfying \\[\\frac1x+\\frac2y=\\frac27?\\]", "opts": ["(4,28),(7,14),(56,8)", "(4,56),(7,14)", "(4,56),(14,7),(28,8)", "There are infinitely many pairs", "(7,7),(14,14)", "(4,56),(7,14),(28,8)"], "correct": 5, "sol": "<p>Multiplying by 7xy and rearranging gives (2x−7)(y−7)=49. Positive factor pairs (1,49),(7,7),(49,1) give (4,56),(7,14),(28,8). Negative factor pairs give either a nonpositive x or y, so none is allowed. There are no other integer divisors of 49. Substitution confirms each listed positive pair.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 5(i). Catalogue: Direct.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S055", "stepSource": {"year": 2023, "paper": "III", "part": "5(i)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-5", "templateFamily": "2023-3-5"}, {"n": 6, "stem": "A monic quartic S with integer coefficients takes the value 2001 at four distinct integers. Which value can it never take at an integer?", "opts": ["2018", "2010", "2025", "2001", "2017"], "correct": 0, "sol": "<p>If the four integers are a,b,c,d, then S(e)−2001=(e−a)(e−b)(e−c)(e−d), a product of four distinct integers. A product of 17 cannot occur: its absolute factors must be 17,1,1,1, but only two distinct integers have absolute value 1. The other differences are possible: 9=(−3)(−1)(1)(3), 16=(−4)(−2)(1)(2), and 24=1·2·3·4. Difference zero occurs at a root of S−2001. Thus 2018 alone is impossible.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 5(iii)(a). Catalogue: Direct.</a></p>", "topic": "Number Theory / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S115", "stepSource": {"year": 2018, "paper": "I", "part": "5(iii)(a)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-5", "templateFamily": "2018-1-5"}, {"n": 7, "stem": "For which nonnegative y is there at least one nonnegative x satisfying \\(y^2(y^2-5)=x^2(x^2-4)\\)?", "opts": ["0≤y≤2", "1≤y≤2", "y≤1 or y≥√5", "Every y≥0", "0≤y≤1 or y≥2"], "correct": 4, "sol": "<p>Put z=x²≥0. The equation becomes z²−4z−y⁴+5y²=0, with roots z=2±√[(y²−1)(y²−4)]. They are real exactly when y²≤1 or y²≥4. Whenever they are real, the plus root is at least 2 and hence supplies a nonnegative x. With y≥0 the complete range is [0,1]∪[2,∞).</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper III, question 7(ii)(a). Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S111", "stepSource": {"year": 2019, "paper": "III", "part": "7(ii)(a)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf"}, "sourceGroup": "2019-3-7", "templateFamily": "2019-3-7"}, {"n": 8, "stem": "A circle centred at (a,b) touches xy=c², c&gt;0, at two distinct points. Their nonzero parameters t,u use coordinates (ct,c/t). You are given that the intersection parameters are roots of \\[c^2z^4-2acz^3+(a^2+b^2-r^2)z^2-2bcz+c^2=0,\\] and the two contacts correspond to double roots. Which relation must hold?", "opts": ["\\(ab=c^2\\)", "\\(a^2+b^2=c^2\\)", "\\(a=b\\) only", "\\(a=b\\) or \\(a=-b\\)", "\\(a+b=c\\)", "\\(a=-b\\) only"], "correct": 3, "sol": "<p>The quartic is c²(z−t)²(z−u)². Its constant term gives t²u²=1, so tu=±1. Comparing cubic coefficients gives a=c(t+u), and comparing linear coefficients gives b=ctu(t+u). Thus b=±a. This argument also covers t+u=0, when both a and b are zero.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 1(iv). Catalogue: Supply.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S067", "stepSource": {"year": 2022, "paper": "III", "part": "1(iv)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"}, "sourceGroup": "2022-3-1", "templateFamily": "2022-3-1"}, {"n": 9, "stem": "Define \\(h(x)=x^2-x-4|x|+|x(x-5)|\\). Which list gives its formulas on x≤0, 0≤x≤5 and x≥5, in that order?", "opts": ["\\(2x^2+2x;\\ 0;\\ 2x^2-10x\\)", "\\(2x^2-2x;\\ 2x^2;\\ 2x^2-10x\\)", "\\(2x^2-10x;\\ 0;\\ 2x^2-2x\\)", "\\(0;\\ 2x^2-10x;\\ 0\\)", "\\(2x^2-2x;\\ 0;\\ 2x^2-10x\\)"], "correct": 4, "sol": "<p>For x≤0, |x|=-x and x(x−5)≥0, giving 2x²−2x. Between 0 and 5, |x|=x and |x(x−5)|=-x²+5x, so all terms cancel. For x≥5 both quantities inside moduli are nonnegative, giving 2x²−10x. The endpoint formulas agree at 0 and 5, so the piecewise description is complete.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 4(iii). Catalogue: Direct.</a></p>", "topic": "Functions and Graphs", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S063", "stepSource": {"year": 2022, "paper": "II", "part": "4(iii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"}, "sourceGroup": "2022-2-4", "templateFamily": "modulus-piecewise"}, {"n": 10, "stem": "Let x₀=9,y₀=1 and \\[x_{n+1}=(x_n+y_n)/2,\\qquad y_{n+1}=\\sqrt{x_ny_n}.\\] These sequences converge to the same limit L. Which is the narrowest of the following intervals that contains every xₙ and yₙ for n≥2?", "opts": ["\\([\\sqrt{15},(4+\\sqrt{15})/2]\\)", "\\([1,9]\\)", "\\([\\sqrt{15},4]\\)", "\\([3,5]\\)", "\\([4,5]\\)", "\\([3,\\sqrt{15}]\\)"], "correct": 2, "sol": "<p>The first pair is (5,3), and the second is (4,√15). If 0&lt;y&lt;x, then y&lt;√xy&lt;(x+y)/2&lt;x; the middle inequality follows by expanding (√x−√y)²&gt;0. Therefore subsequent pairs remain between √15 and 4. Any interval containing every term for n≥2 must include both x₂=4 and y₂=√15, so this is the narrowest possible interval.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 8(i), sequence comparison. Catalogue: Direct.</a></p>", "topic": "Sequences and Series / Surds", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S028", "stepSource": {"year": 2024, "paper": "II", "part": "8(i), sequence comparison", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-8", "templateFamily": "convergence-estimate"}, {"n": 11, "stem": "A test has five questions, each with three options and one correct answer. A correct guess scores 2, a wrong guess −1 and an omission 0. The pass mark is 5. A candidate selects in advance exactly k questions to guess independently and uniformly. Which k maximises the probability of passing?", "opts": ["4", "3 and 4 equally", "3", "4 and 5 equally", "5"], "correct": 0, "sol": "<p>For k attempts and c correct answers, the score is 3c−k. Passing is impossible for k≤2. For k=3 all three must be right, probability 1/27=9/243. For k=4 at least three must be right, probability 4(1/3)³(2/3)+(1/3)⁴=1/9=27/243. For k=5 at least four must be right, probability 5(1/3)⁴(2/3)+(1/3)⁵=11/243. The largest is attained uniquely at k=4.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 13(i). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S118", "stepSource": {"year": 2018, "paper": "I", "part": "13(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-13", "templateFamily": "2018-1-13"}, {"n": 12, "stem": "Let \\(0&lt;a&lt;b\\) and let f be positive for x&gt;0. The line through \\((a,f(a))\\) and \\((b,-f(b))\\) meets the x-axis at \\((m,0)\\). Which choice of f ensures \\[m=\\frac{a^{n+1}+b^{n+1}}{a^n+b^n}\\] for every a,b&gt;0, where n is a fixed positive integer?", "opts": ["\\(f(x)=x^{-(n+1)}\\)", "\\(f(x)=x^{n+1}\\)", "\\(f(x)=x^{1-n}\\)", "\\(f(x)=x^{-n}\\)", "\\(f(x)=1\\)", "\\(f(x)=x^n\\)"], "correct": 3, "sol": "<p>Similar triangles, or the line equation, give \\(m=[af(b)+bf(a)]/[f(a)+f(b)]\\). For f(x)=x^-n, multiply numerator and denominator by a^n b^n; this gives exactly the required ratio. The reversal of f(a),f(b) in the numerator matters. The other powers give different expressions for general a,b; the claim is for every pair, not one coincidental equality.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 3(i)–(ii). Catalogue: Direct.</a></p>", "topic": "Geometry / Functions and Graphs", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S015", "stepSource": {"year": 2025, "paper": "III", "part": "3(i)–(ii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-3", "templateFamily": "2025-3-3"}, {"n": 13, "stem": "There are nine rods of distinct lengths 1,2,…,9. Two are chosen uniformly at random, without replacement, and joined with a rod of length 10. What is the probability the three lengths form a non-degenerate triangle?", "opts": ["7/18", "5/12", "4/9", "1/2", "5/9"], "correct": 2, "sol": "<p>There are 9·8/2=36 unordered choices. Write the selected lengths a&lt;b. The only needed inequality is a+b&gt;10. For b≤5 no pair works. For b=6,7,8,9 the allowed a values number 1,3,5,7 respectively. Thus there are 16 valid pairs and the probability is 16/36=4/9.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 11(i) or (ii). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics / Geometry", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S109", "stepSource": {"year": 2019, "paper": "II", "part": "11(i) or (ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"}, "sourceGroup": "2019-2-11", "templateFamily": "2019-2-11"}, {"n": 14, "stem": "How many integer triples (a,b,c), with each coordinate between -1000 and 1000 inclusive, satisfy \\(a^3+2b^3+4c^3=0\\)?", "opts": ["2001", "2", "3", "1", "0", "7"], "correct": 3, "sol": "<p>The equation first forces a even. Write a=2p and divide by 2: 4p³+b³+2c³=0, forcing b even. Substituting b=2q and dividing by 2 forces c even as well. All three coordinates are therefore even. Dividing the original equation by 8 gives another triple satisfying the same equation. A nonzero integer triple cannot be divided by 2 indefinitely while remaining integral. Only (0,0,0) remains, so the count is one.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 2(i). Catalogue: Direct.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S068", "stepSource": {"year": 2022, "paper": "III", "part": "2(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"}, "sourceGroup": "2022-3-2", "templateFamily": "integer-descent"}, {"n": 15, "stem": "The curves \\(x=y^2+2sy+s(s+1)\\) and \\(y=x^2\\) have real parameter s. You may use that every common point lies on \\((y-x+s)(y+x+s+1)=0\\). For which s do the curves have four distinct common points?", "opts": ["\\(s&lt;-1\\)", "\\(-3/4&lt;s&lt;1/4\\)", "\\(s&lt;1/4\\)", "\\(s\\le-3/4\\)", "\\(s&gt;3/4\\)", "\\(s&lt;-3/4\\)"], "correct": 5, "sol": "<p>On the first line, substituting y=x² gives x²−x+s=0 with discriminant 1−4s. On the second it gives x²+x+s+1=0 with discriminant -3−4s. Both must be positive, requiring s&lt;-3/4. Conversely, under this condition each line gives two roots. A shared root of the two quadratics would be x=-1/2 and require s=-3/4, excluded here. Thus all four points are distinct. Substituting either factor with y=x² also satisfies the other original curve, so no extraneous points have been introduced.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 8(iii)–(iv). Catalogue: Supply.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S039", "stepSource": {"year": 2024, "paper": "III", "part": "8(iii)–(iv)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-8", "templateFamily": "2024-3-8"}, {"n": 16, "stem": "Which of these polynomials has \\(\\sqrt[3]2+\\sqrt[3]3\\) as a root?", "opts": ["\\(x^9-15x^6+75x^3-125\\)", "\\(x^9-15x^6-87x^3-125\\)", "\\(x^9-5x^6-87x^3-125\\)", "\\(x^6-10x^3-6x+25\\)", "\\(x^9-15x^6-162x^3-125\\)"], "correct": 1, "sol": "<p>Put x=∛2+∛3. Cubing gives x³=5+3∛6x. Thus (x³−5)³=27·6x³=162x³. Expanding the left side gives x⁹−15x⁶+75x³−125. Subtracting 162x³ produces x⁹−15x⁶−87x³−125. No complex numbers or generalised binomial expansion is required.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 4(iv). Catalogue: Direct.</a></p>", "topic": "Surds / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S046", "stepSource": {"year": 2023, "paper": "II", "part": "4(iv)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-4", "templateFamily": "polynomial-surds"}, {"n": 17, "stem": "A monic cubic \\(P(x)=x^3-ax^2+bx-c\\) has roots a,b,c, including multiplicity, where a,b,c are real. Which is the complete list of possible polynomials?", "opts": ["\\(x^3-ax^2\\) for any real a, and \\(x^3-x^2-x+1\\)", "\\(x^3-ax^2\\) for any real a, and \\(x^3+x^2-x-1\\)", "\\(x^3\\) only", "\\(x^3+x^2-x-1\\) only", "\\(x^3-ax^2\\) for any real a only"], "correct": 1, "sol": "<p>Comparing (x−a)(x−b)(x−c) with the stated coefficients gives b+c=0, ab+ac+bc=b and abc=c. Thus c=−b and −b²=b, so b=0 or −1. If b=0 then c=0 and a is arbitrary, giving x³−ax². If b=−1 then c=1 and the product condition gives a=−1, producing x³+x²−x−1=(x+1)²(x−1). Both families satisfy the requirements.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper III, question 4(i), cubic case. Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S110", "stepSource": {"year": 2019, "paper": "III", "part": "4(i), cubic case", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%203.pdf"}, "sourceGroup": "2019-3-4", "templateFamily": "2019-3-4"}, {"n": 18, "stem": "Define \\(T(x)=(3x-x^3)/(1-3x^2)\\) wherever its denominator is nonzero. How many real x satisfy \\(T(T(T(x)))=x\\), with all three evaluations defined? You may use \\(T(\\tan\\theta)=\\tan(3\\theta)\\) wherever both sides are defined.", "opts": ["26", "25", "27", "52", "13", "24"], "correct": 1, "sol": "<p>Use x=tan θ with -π/2&lt;θ&lt;π/2. Equality requires 26θ=kπ, giving k=-12,…,12, hence 25 candidates. A forbidden pole during iteration would require 3^j kπ/26 to be an odd multiple of π/2 for j=1,2,3. This would give an even integer 2·3^j k equal to 26 times an odd integer, equivalently 3^j k=13 times an odd integer. In the stated range the only multiple of 13 is zero, which cannot be odd. Thus no candidate is lost. Each finite x has one θ in the chosen interval.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 2(ii). Catalogue: Supply.</a></p>", "topic": "Trigonometry / Sequences and Series", "estimatedDifficulty": 7, "estimatedMinutes": 4.5, "selectionId": "S041", "stepSource": {"year": 2023, "paper": "II", "part": "2(ii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-2", "templateFamily": "trig-iteration"}, {"n": 19, "stem": "Let \\(f(x)=7-2|x|\\). You are given that the graph of \\(y=f(f(f(x)))\\) consists of eight straight-line pieces, none of gradient 1. The starting values 1 and -7/9 each generate a cycle of length three under f. What is the sum of all distinct real solutions of \\(f(f(f(x)))=x\\)?", "opts": ["\\(-8/9\\)", "\\(-14/3\\)", "\\(7/9\\)", "\\(34/9\\)", "\\(8/9\\)", "\\(0\\)"], "correct": 0, "sol": "<p>The cycles are 1→5→-3→1 and -7/9→49/9→-35/9→-7/9. Also f has the two fixed points -7 and 7/3. These eight distinct numbers all satisfy f³(x)=x. Each straight piece can meet y=x at most once, so there are no further solutions. Their sum is \\((1+5-3)+(-7+49-35)/9-7+7/3=-8/9\\).</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 2(ii)(b). Catalogue: Direct.</a></p>", "topic": "Functions and Graphs / Sequences and Series", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S013", "stepSource": {"year": 2025, "paper": "III", "part": "2(ii)(b)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-2", "templateFamily": "2025-3-2"}, {"n": 20, "stem": "Let \\(0&lt;\\theta&lt;\\pi\\), x real and x≠θ. You may use that \\(x^2/(x-\\theta)\\) lies in \\((−\\infty,0]\\cup[4\\theta,\\infty)\\). Which (x,θ) satisfies \\[\\frac{x^2}{4\\theta(x-\\theta)}=\\frac{\\sin^2\\theta\\cos^2x}{1+\\cos^2\\theta\\sin^2x}?\\]", "opts": ["(π/2,π/4) only", "No solutions", "(0,π/2) only", "(π,π/2) and (0,π/2)", "(π,π/2) only"], "correct": 4, "sol": "<p>The right side is between 0 and 1. The left side is at most 0 or at least 1, so equality requires a shared endpoint. At left side 0, x=0, but the right side is sin²θ&gt;0. At left side 1, x²=4θ(x−θ), so x=2θ. The right side equals 1 only if sin²θ=1 and cos²x=1; hence θ=π/2 and x=π. These values do satisfy the equation.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 6(ii), final equality. Catalogue: Supply.</a></p>", "topic": "Trigonometry / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 4.5, "selectionId": "S099", "stepSource": {"year": 2019, "paper": "I", "part": "6(ii), final equality", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-6", "templateFamily": "2019-1-6"}], "standardMinutes": 75, "archived": true, "resumeArchived": true}, {"id": "steppractice03p1v1", "title": "STEP practice · Year 03 · Paper 1", "sub": "Applications of Mathematical Knowledge · STEP adaptations", "type": 1, "group": 6, "stepAdapted": true, "questions": [{"n": 1, "stem": "What is the product of all real roots of \\(|x-1|+2|x+2|=9\\)?", "opts": ["−4", "8", "4", "−8", "−12"], "correct": 3, "sol": "<p>Split at −2 and 1. For x&lt;−2 the equation is −3x−3=9, giving −4. For −2≤x≤1 it is x+5=9, giving 4 outside that interval. For x&gt;1 it is 3x+3=9, giving 2. The endpoints do not solve it, so the product is (−4)·2=−8.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Functions and Graphs", "estimatedDifficulty": 4.5, "estimatedMinutes": 2.5, "selectionId": "O004", "stepSource": {"original": true}, "sourceGroup": "O004", "templateFamily": "O004"}, {"n": 2, "stem": "For a positive integer n define \\[F_n(x)=\\sum_{r=0}^n(r+1)\\binom nr x^r.\\] Which expression equals \\(F_n(x)\\) for every real x?", "opts": ["\\((n+1)(1+x)^n\\)", "\\((1+x)^{n+1}\\)", "\\((1+x)^{n-1}(1+nx)\\)", "\\(nx(1+x)^{n-1}\\)", "\\((1+x)^{n-1}(1+(n+1)x)\\)", "\\((1+x)^n+nx^n\\)"], "correct": 4, "sol": "<p>Split r+1 into r and 1. The part without r is (1+x)^n. For r≥1 use \\(r\\binom nr=n\\binom{n-1}{r-1}\\). The remaining sum is nx(1+x)^(n-1) by the binomial theorem. Adding and factoring gives the stated answer. The identity also holds at x=-1 because both sides are polynomials, including the case n=1.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 11(iii). Catalogue: Direct.</a></p>", "topic": "Sequences and Series", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S011", "stepSource": {"year": 2025, "paper": "II", "part": "11(iii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-11", "templateFamily": "2025-2-11"}, {"n": 3, "stem": "For 0≤x,y≤π, which describes all solutions of \\(\\cos(x+y)+\\cos(x-y)-\\cos2x=1\\)? You may use \\(\\cos(A+B)+\\cos(A-B)=2\\cos A\\cos B\\).", "opts": ["x+y=π only", "x=π/2 only", "x=y only", "x=y or y=π/2", "x=y, or x=π/2 with any y in [0,π]"], "correct": 4, "sol": "<p>The supplied identity gives 2cos x cos y on the left for the first two terms. Setting B=A in the identity gives cos2x=2cos²x−1. The equation therefore reduces to 2cos x(cos y−cos x)=0. Either cos x=0, so x=π/2 and y is arbitrary, or cos y=cos x. Cosine is one-to-one on [0,π], so the latter gives y=x.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 4(ii). Catalogue: Direct.</a></p>", "topic": "Trigonometry", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S122", "stepSource": {"year": 2018, "paper": "II", "part": "4(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"}, "sourceGroup": "2018-2-4", "templateFamily": "2018-2-4"}, {"n": 4, "stem": "What is the exact value of \\[\\int_{-2}^{2}\\frac{x^4+3x^2+1}{1+e^{x^3}}\\,dx?\\] You may use that, for continuous even h and positive f satisfying f(x)f(−x)=1, \\(\\int_{-a}^a h(x)/(1+f(x))\\,dx=\\int_0^a h(x)\\,dx\\).", "opts": ["0", "72/5", "41/5", "164/5", "62/5", "82/5"], "correct": 5, "sol": "<p>The numerator h(x)=x⁴+3x²+1 is even, and f(x)=e^(x³) has f(x)f(−x)=1. Apply the supplied result to replace the original integral by ∫₀²(x⁴+3x²+1)dx. Power integration gives [x⁵/5+x³+x]₀²=32/5+8+2=82/5. No exponential antiderivative is needed.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 5(iii). Catalogue: Supply.</a></p>", "topic": "Integration", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S073", "stepSource": {"year": 2022, "paper": "III", "part": "5(iii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"}, "sourceGroup": "2022-3-5", "templateFamily": "symmetric-integral"}, {"n": 5, "stem": "A family of lines is \\(y=tx-t^3\\), with real parameter t. Two distinct perpendicular members meet at (x,y). What is the complete locus of their intersection?", "opts": ["\\(x=1-y^2\\)", "\\(y=x^2+1\\)", "\\(x=y^2+1\\)", "\\(x=y^2-1\\)", "\\(x=y^2+1,\\ y\\ge0\\)"], "correct": 2, "sol": "<p>For parameters p≠q, subtract the line equations: x=(p³−q³)/(p−q)=p²+pq+q². Perpendicularity gives pq=−1. Put u=p+q; then x=u²+1 and y=px−p³=pq(p+q)=−u. Hence x=y²+1. Every real u is possible because p,q are the distinct real roots of t²−ut−1=0, whose discriminant is u²+4&gt;0.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 2, tangent intersection. Catalogue: Supply.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S096", "stepSource": {"year": 2019, "paper": "I", "part": "2, tangent intersection", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-2", "templateFamily": "2019-1-2"}, {"n": 6, "stem": "Let A be the solution set of \\(\\sqrt{4x^2-8x+64}\\le|x+8|\\), and B the solution set of \\(\\sqrt{4x^2-8x+64}\\le|3x-8|\\). What is \\(A\\cap B\\)?", "opts": ["\\((0,8)\\)", "The empty set", "All real numbers", "\\(( -\\infty,0]\\cup[8,\\infty)\\)", "\\(\\{0,8\\}\\)", "\\([0,8]\\)"], "correct": 4, "sol": "<p>The radicand is 4(x−1)²+60&gt;0, and both right sides are nonnegative, so squaring preserves each inequality. The first becomes 3x(x−8)≤0, giving A=[0,8]. The second becomes 5x(x−8)≥0, giving B=(-∞,0]∪[8,∞). Only the two endpoints belong to both. They satisfy equality in the original inequalities.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 2(i)(a)–(b). Catalogue: Direct.</a></p>", "topic": "General algebra / Surds", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S032", "stepSource": {"year": 2024, "paper": "III", "part": "2(i)(a)–(b)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-2", "templateFamily": "2024-3-2"}, {"n": 7, "stem": "Every face of a tetrahedron ABCD has the same perimeter. Its edges AB, AC and AD have lengths 5,6 and 7 respectively. What are the lengths CD, BD and BC, in that order?", "opts": ["7,5,6", "They are not uniquely determined", "6,7,5", "5,6,7", "6,5,7", "7,6,5"], "correct": 3, "sol": "<p>Write BC=x,BD=y,CD=z. The face perimeters are 11+x,12+y,13+z,x+y+z. The first three equalities give x−y=1 and y−z=1, so x=z+2,y=z+1. Equating 13+z with 3z+3 gives z=5, and consequently y=6,x=7. Thus opposite edges agree. The data are consistent with a nondegenerate tetrahedron: the face triangle 5,6,7 is acute.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 8(i). Catalogue: Direct.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S050", "stepSource": {"year": 2023, "paper": "II", "part": "8(i)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-8", "templateFamily": "2023-2-8"}, {"n": 8, "stem": "Let \\(x_0=1\\) and \\(x_{n+1}=(x_n+2)/(x_n+1)\\). Which interval is guaranteed to contain \\(x_{10}^2\\)?", "opts": ["\\([2-10^{-6},2)\\)", "\\([2-10^{-10},2)\\)", "\\([1,1+10^{-6}]\\)", "\\((2,2+10^{-10}]\\)", "\\((2,2+10^{-6}]\\)"], "correct": 0, "sol": "<p>All terms are at least 1. Direct algebra gives \\(x_{n+1}^2-2=-(x_n^2-2)/(x_n+1)^2\\). Hence the error changes sign and its magnitude decreases by at least a factor 4 each step. Since the initial error is -1, the tenth error is negative and has magnitude at most 4^-10=1/1048576&lt;10^-6. It is nonzero because the recurrence never turns a nonzero error into zero. The stronger 10^-10 bound does not follow and is false for this term.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 5(i)(b)–(c). Catalogue: Direct.</a></p>", "topic": "Sequences and Series", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S047", "stepSource": {"year": 2023, "paper": "II", "part": "5(i)(b)–(c)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-5", "templateFamily": "convergence-estimate"}, {"n": 9, "stem": "For x≠0,2, an identity has the form \\[\\frac1{x^4(x-2)}=\\frac A{x-2}+\\frac{f(x)}{x^4},\\] where f is a polynomial of degree at most 3. What is f(x)?", "opts": ["\\((x^3+2x^2+4x+8)/16\\)", "\\(-(x^3+2x^2+4x+8)/16\\)", "\\(-(x^3+2x^2+4x+8)/8\\)", "\\(-(x^3+4x^2+8x+16)/16\\)", "\\(-(x^3-2x^2+4x-8)/16\\)"], "correct": 1, "sol": "<p>Multiply through by x⁴(x−2): 1=Ax⁴+(x−2)f(x), a polynomial identity which also holds at x=2. Hence A=1/16. Now f(x)=(16−x⁴)/[16(x−2)]=−(x+2)(x²+4)/16. Expanding gives the answer.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 5(i)(a). Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S090", "stepSource": {"year": 2020, "paper": "III", "part": "5(i)(a)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"}, "sourceGroup": "2020-3-5", "templateFamily": "2020-3-5"}, {"n": 10, "stem": "A and B independently toss a coin with head probability p until each first gets a head. Put q=1−p, with 0&lt;p&lt;1. For integer t≥1, what is the probability that the larger of their two toss counts is exactly t?", "opts": ["\\(pq^{t-1}(2-q^{t-1}-q^t)\\)", "\\(p^2q^{2t-2}\\)", "\\(pq^{t-1}(2-q^t)\\)", "\\(2pq^{t-1}\\)", "\\((1-q^t)^2\\)"], "correct": 0, "sol": "<p>The probability both finish within t tosses is (1−qᵗ)². Subtract the probability both finish within t−1: (1−qᵗ⁻¹)². The difference is 2qᵗ⁻¹(1−q)−q²ᵗ⁻²(1−q²)=pqᵗ⁻¹[2−qᵗ⁻¹−qᵗ]. For t=1 this also gives p², as required.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 12(i), T. Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S093", "stepSource": {"year": 2020, "paper": "III", "part": "12(i), T", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"}, "sourceGroup": "2020-3-12", "templateFamily": "2020-3-12"}, {"n": 11, "stem": "A drawer contains n pairs of socks, each pair a different colour. A set of 2k individual socks is chosen uniformly from all such sets, where 2k≤n. For 0≤r≤k, what is the probability that exactly r complete pairs occur among the chosen socks?", "opts": ["\\(\\dfrac{\\binom kr2^{2k-2r}}{\\binom{2n}{2k}}\\)", "\\(\\dfrac{\\binom nr\\binom{n-r}{2k-r}2^{2k-r}}{\\binom{2n}{2k}}\\)", "\\(\\dfrac{\\binom nr\\binom{n-r}{2k-2r}2^{2k-2r}}{\\binom{2n}{2k}}\\)", "\\(\\dfrac{\\binom nr\\binom{n}{2k-2r}2^{2k-2r}}{\\binom{2n}{2k}}\\)", "\\(\\dfrac{\\binom nr\\binom{n-r}{2k-2r}}{\\binom{2n}{2k}}\\)"], "correct": 2, "sol": "<p>Choose the r colours appearing as complete pairs in C(n,r) ways. The remaining 2k−2r socks must have different colours, chosen from the n−r unused colours, giving C(n−r,2k−2r). For each such colour either individual sock may be selected, giving 2^(2k−2r) choices. Divide by the C(2n,2k) equally likely selections of individual socks. No selection is counted twice because its paired colours and singleton colours are uniquely determined.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 12(i) or (ii). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S059", "stepSource": {"year": 2023, "paper": "III", "part": "12(i) or (ii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-12", "templateFamily": "2023-3-12"}, {"n": 12, "stem": "Let p be real with p²≠1. Two real numbers u,v satisfy \\[u+v=\\frac{-4p}{p^2-1},\\qquad uv=\\frac{5-p^2}{p^2-1}.\\] What is the value of \\((u+v)^2-u^2v^2-6uv\\)?", "opts": ["It depends on p", "−5", "\\(5/(p^2-1)^2\\)", "1", "0", "5"], "correct": 5, "sol": "<p>Set t=p² and use the common denominator (t−1)². The numerator is \\(16t-(5-t)^2-6(5-t)(t-1)\\). Expansion gives 5t²−10t+5=5(t−1)². Since p²≠1, cancellation is allowed and the value is 5. This is the algebraic tangency condition for the third side in the source construction.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 1(iii). Catalogue: Supply.</a></p>", "topic": "General algebra / Geometry", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S052", "stepSource": {"year": 2023, "paper": "III", "part": "1(iii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-1", "templateFamily": "2023-3-1"}, {"n": 13, "stem": "A coin gives heads independently with probability 2/3. It is tossed until HH or TT first occurs consecutively. What is the probability that HH occurs first?", "opts": ["16/21", "2/3", "4/7", "4/5", "8/9", "5/7"], "correct": 0, "sol": "<p>Let H and T be the eventual HH-winning probabilities when the last toss is H and T respectively. Then H=2/3+T/3 and T=2H/3. Thus H=6/7 and T=4/7. Before any toss the winning probability is (2/3)H+(1/3)T=16/21. Repeated alternating tosses have probability tending to zero, so these cover the eventual outcomes.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 11(i). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S088", "stepSource": {"year": 2020, "paper": "II", "part": "11(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-11", "templateFamily": "coin-stopping"}, {"n": 14, "stem": "You may use \\(\\sum_{r=1}^{\\infty}r^{-2}=\\pi^2/6\\) and \\[\\frac1{r^2(r+1)}=\\frac1{r^2}-\\frac1r+\\frac1{r+1}.\\] What is \\[\\sum_{r=1}^{\\infty}\\frac1{r^2(r+1)(r+2)}?\\]", "opts": ["\\(\\pi^2/12-1/2\\)", "\\(\\pi^2/6-5/4\\)", "\\(\\pi^2/12-3/4\\)", "\\(\\pi^2/12-5/8\\)", "\\(\\pi^2/6-1\\)", "\\(5/8-\\pi^2/12\\)"], "correct": 3, "sol": "<p>Partial fractions give \\(1/[r^2(r+1)(r+2)]=1/(2r^2)-3/(4r)+1/(r+1)-1/[4(r+2)]\\). In the sum through N the last three terms telescope, leaving \\(-5/8+3/[4(N+1)]-1/[4(N+2)]\\). The reciprocal-square part tends to π²/12 and the boundary fractions tend to zero. The result is π²/12−5/8. Only finite rearrangement and the supplied convergent sum are used.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 1(ii). Catalogue: Supply.</a></p>", "topic": "Sequences and Series", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S031", "stepSource": {"year": 2024, "paper": "III", "part": "1(ii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-1", "templateFamily": "2024-3-1"}, {"n": 15, "stem": "You are given that A={1,3,4,5,9,11} and B={2,6,7,8,10} have equal sums and equal square sums. For every positive integer n, let \\(S=\\{n^2,(n+1)^2,\\ldots,(n+11)^2\\}\\). Which set of offsets T makes the sum of \\(\\{(n+t)^2:t\\in T\\}\\) equal to the sum of its complement in S for every n?", "opts": ["\\(\\{2,6,7,8,10\\}\\)", "\\(\\{0,2,6,7,8,10\\}\\)", "\\(\\{0,1,3,4,5,9,11\\}\\)", "\\(\\{0,1,2,3,4,5\\}\\)", "\\(\\{0,2,4,6,8,10\\}\\)"], "correct": 1, "sol": "<p>For a set of offsets T, the sum is |T|n²+2n∑t+∑t². The given A and B have matching last two sums but different sizes. Adding offset 0 to B changes neither of these sums and makes both sizes six. Hence B∪{0} and A yield equal quadratic expressions for every n. This includes n² exactly once and covers all twelve offsets.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 8(iv). Catalogue: Direct.</a></p>", "topic": "Sequences and Series / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S010", "stepSource": {"year": 2025, "paper": "II", "part": "8(iv)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-8", "templateFamily": "2025-2-8"}, {"n": 16, "stem": "Let 0&lt;a&lt;b. The line y=a²x meets y=x(b−x)² at the origin and two further points. What is the area enclosed between the curve and the line segment from the origin to the nearer intersection?", "opts": ["\\((b+a)^3(b-3a)/12\\)", "\\((b-a)^3(b+3a)/6\\)", "\\((b-a)^4/4\\)", "\\((b-a)^3(b+3a)/12\\)", "\\((b-a)^3(b+a)/12\\)"], "correct": 3, "sol": "<p>The nearer intersection is at x=b−a. On 0&lt;x&lt;b−a the curve lies above the line, so integrate x³−2bx²+(b²−a²)x from 0 to b−a. Put L=b−a. The result is L⁴/4−2bL³/3+(b²−a²)L²/2. Factoring L³ and combining terms gives L³[(b−a)/4−2b/3+(b+a)/2]=L³(b+3a)/12.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 1, area S. Catalogue: Direct.</a></p>", "topic": "Integration", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S113", "stepSource": {"year": 2018, "paper": "I", "part": "1, area S", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-1", "templateFamily": "2018-1-1"}, {"n": 17, "stem": "A degree-11 polynomial P has leading coefficients \\[P(x)=1024x^{11}+0x^{10}-2816x^9+\\text{lower powers}.\\] It is known that \\(P(x)=(x+1)Q(x)^2\\), where Q has degree 5 and positive leading coefficient. What is the coefficient of x³ in Q?", "opts": ["−48", "32", "−64", "16", "−16", "−32"], "correct": 5, "sol": "<p>Write Q=ax⁵+bx⁴+cx³+…. Comparing x¹¹ gives a²=1024, so a=32. Comparing x¹⁰ gives 2ab+a²=0, hence b=-16. Comparing x⁹ gives b²+2ac+2ab=-2816. Thus 256+64c−1024=-2816, so 64c=-2048 and c=-32. Lower coefficients cannot contribute to these three leading comparisons.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 4(iv). Catalogue: Supply.</a></p>", "topic": "General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S054", "stepSource": {"year": 2023, "paper": "III", "part": "4(iv)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-4", "templateFamily": "2023-3-4"}, {"n": 18, "stem": "A sequence satisfies \\(u_{n+1}=u_n^2-pu_n+p\\), where p is real. For which p can a real starting value give a nonconstant sequence of period two?", "opts": ["p≠1", "p&lt;−1 or p&gt;3", "p≤−1 or p≥3", "p&lt;1 or p&gt;3", "−1&lt;p&lt;3"], "correct": 1, "sol": "<p>Write f(x)=x²−px+p. Expansion and factorisation gives f(f(x))−x=(x−1)(x−p)[x²+(1−p)x+1]. The first two factors give fixed points, which must be excluded. The last quadratic has two distinct real roots exactly when (p−1)²−4=(p−3)(p+1)&gt;0. Its roots coincide with fixed points only at boundary values p=−1 or 3, where it has a repeated root. Thus precisely p&lt;−1 or p&gt;3 gives a nonconstant two-cycle.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 5(i), period two. Catalogue: Direct.</a></p>", "topic": "Sequences and Series / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 4.5, "selectionId": "S106", "stepSource": {"year": 2019, "paper": "II", "part": "5(i), period two", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"}, "sourceGroup": "2019-2-5", "templateFamily": "two-cycle"}, {"n": 19, "stem": "Three people toss independent coins with head probability p. If all agree they stop. Otherwise, the two whose coins agree toss again, while the third turns their coin over. They stop if the three now agree. What is the minimum probability of stopping within these two rounds, as p varies from 0 to 1?", "opts": ["1/2", "3/8", "1/4", "9/16", "7/16"], "correct": 4, "sol": "<p>Put q=1−p. Immediate agreement has probability p³+q³. Starting with two heads and one tail, the flipped coin becomes H, so agreement in round two adds 3p²q·p². The reverse pattern adds 3pq²·q². The total is p³+q³+3pq(p³+q³). Put t=pq: this becomes (1−3t)(1+3t)=1−9t². Since 0≤t≤1/4, its minimum is 1−9/16=7/16, attained at p=q=1/2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 11(ii). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S103", "stepSource": {"year": 2019, "paper": "I", "part": "11(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-11", "templateFamily": "2019-1-11"}, {"n": 20, "stem": "Let a&gt;0. Two distinct tangents to \\(x^2=4ay\\), at x-coordinates p and q, meet at (X,Y). You may use \\(X=(p+q)/2\\), \\(Y=pq/(4a)\\), and \\(\\tan\\theta=|(m_1-m_2)/(1+m_1m_2)|\\) for the acute angle between lines. If the tangents meet at 45°, which equation must (X,Y) satisfy?", "opts": ["\\((Y-3a)^2=X^2+8a^2\\)", "\\((Y+a)^2=X^2+4a^2\\)", "\\((Y+3a)^2=X^2+8a^2\\)", "\\(Y^2=X^2+8a^2\\)", "\\((Y+3a)^2=2X^2+8a^2\\)"], "correct": 2, "sol": "<p>The gradients are p/(2a) and q/(2a). Squaring the angle relation gives \\(4a^2(p-q)^2=(4a^2+pq)^2\\). Use (p−q)²=4X²−16aY and pq=4aY, then divide by 16a². This gives X²−4aY=(a+Y)². Rearranging and completing the square gives (Y+3a)²=X²+8a².</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 4(ii), tangent locus. Catalogue: Supply.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 4.5, "selectionId": "S035", "stepSource": {"year": 2024, "paper": "III", "part": "4(ii), tangent locus", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-4", "templateFamily": "2024-3-4"}], "standardMinutes": 75, "archived": true, "resumeArchived": true}, {"id": "steppractice04p1v1", "title": "STEP practice · Year 04 · Paper 1", "sub": "Applications of Mathematical Knowledge · STEP adaptations", "type": 1, "group": 6, "stepAdapted": true, "questions": [{"n": 1, "stem": "An affine function f(x)=ax+b satisfies f(f(x))=9x+8 for every real x. Which is the complete set of possible values of f(0)?", "opts": ["{2} only", "{−4} only", "{−4,2}", "{−3,3}", "{−2,4}"], "correct": 2, "sol": "<p>Composition gives a²x+b(a+1)=9x+8. Thus a=3 or −3. For a=3, 4b=8 gives b=2; for a=−3, −2b=8 gives b=−4. Since f(0)=b, both listed values and no others are possible.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Functions and Graphs", "estimatedDifficulty": 4.5, "estimatedMinutes": 2.5, "selectionId": "O010", "stepSource": {"original": true}, "sourceGroup": "O010", "templateFamily": "O010"}, {"n": 2, "stem": "The two lines \\(y=c+x\\) and \\(y=c-x\\) touch a circle with centre \\((0,a)\\), where \\(a&gt;c\\). Which option gives the squared radius and the two contact points?", "opts": ["\\(r^2=(a-c)^2;\\ (\\pm(a-c)/2,(a+c)/2)\\)", "\\(r^2=(a-c)^2/4;\\ (\\pm(a-c),(a+c)/2)\\)", "\\(r^2=(a-c)^2/2;\\ (\\pm(a-c)/2,(a+c)/2)\\)", "\\(r^2=(a-c)^2/2;\\ (\\pm(a+c)/2,(a-c)/2)\\)", "\\(r^2=(a+c)^2/2;\\ (\\pm(a-c)/2,(a+c)/2)\\)"], "correct": 2, "sol": "<p>The radius to the contact on y=c+x is perpendicular to this line, so it lies on y=a-x. Their intersection is \\(((a-c)/2,(a+c)/2)\\). Its squared distance from (0,a) is two copies of ((a-c)/2)², giving (a-c)²/2. Reflection in the y-axis gives the other contact. No point-to-line distance formula is required.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 6(ii). Catalogue: Direct.</a></p>", "topic": "Geometry", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S007", "stepSource": {"year": 2025, "paper": "II", "part": "6(ii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-6", "templateFamily": "2025-2-6"}, {"n": 3, "stem": "Four people choose independent uniform integers from 1 to n, n≥3. A person wins if they are the unique smallest or the unique largest. You are given that the probability of a unique smallest is \\(A=(n-1)^2/n^2\\), and the probability of two winners is \\(B=(n-2)(n-1)^2/n^3\\). What is the least n for which two winners are more likely than exactly one winner?", "opts": ["6", "4", "8", "5", "9", "7"], "correct": 5, "sol": "<p>By symmetry the probability of a unique largest is also A. Adding these two probabilities counts a two-winner outcome twice and a one-winner outcome once. Hence P(exactly one)=2A−2B=4(n−1)²/n³. Compare this with B and cancel the positive factor (n−1)²/n³. The condition is n−2&gt;4, or n&gt;6. The least integer is 7; equality at 6 is insufficient.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 12(ii), final comparison. Catalogue: Supply.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S030", "stepSource": {"year": 2024, "paper": "II", "part": "12(ii), final comparison", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-12", "templateFamily": "2024-2-12"}, {"n": 4, "stem": "For which real t does \\[y^2-x^2+2ty+(t+3)x+4=0\\] represent a pair of perpendicular straight lines?", "opts": ["\\(t=1\\pm\\sqrt{21}/3\\)", "\\(t=\\pm\\sqrt{21}\\)", "\\(t=1\\pm2\\sqrt3\\)", "No real t", "\\(t=1\\pm2\\sqrt{21}/3\\)", "\\(t=-1\\pm2\\sqrt{21}/3\\)"], "correct": 4, "sol": "<p>Complete squares: \\((y+t)^2-(x-(t+3)/2)^2=t^2-(t+3)^2/4-4\\). This is a pair of lines precisely when the constant on the right is zero; the difference of squares then factors into lines of gradients ±1. Thus 4t²−(t+3)²=16, or 3t²−6t−25=0. The quadratic formula gives t=1±2√21/3.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 8(i). Catalogue: Direct.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S038", "stepSource": {"year": 2024, "paper": "III", "part": "8(i)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-8", "templateFamily": "2024-3-8"}, {"n": 5, "stem": "A line of negative gradient passes through (1,k), where k&gt;0, and meets the positive coordinate axes at X and Y. O is the origin. As the line varies, what is the minimum area of triangle OXY?", "opts": ["\\((k+1)^2/2\\)", "k/2", "2k", "4k", "k"], "correct": 2, "sol": "<p>Write the gradient as −m, m&gt;0. The intercepts are 1+k/m and k+m. The area is [2k+m+k²/m]/2. Since m+k²/m−2k=(m−k)²/m≥0, the area is at least 2k, attained when m=k. Both intercepts are then positive, so the minimum is admissible.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 1(i). Catalogue: Direct.</a></p>", "topic": "Geometry / Differentiation", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S095", "stepSource": {"year": 2019, "paper": "I", "part": "1(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-1", "templateFamily": "2019-1-1"}, {"n": 6, "stem": "How many integer triples (a,b,c), with \\(|a|,|b|,|c|\\le100\\), satisfy \\(a^2+b^2=3c^2\\)?", "opts": ["1", "201", "9", "0", "401", "3"], "correct": 0, "sol": "<p>A square leaves remainder 0 or 1 modulo 3. For a²+b² to be divisible by 3, both squares must leave remainder 0, so a and b are divisible by 3. Substituting a=3u,b=3v gives c²=3(u²+v²), hence c is divisible by 3 too. Division of all coordinates by 3 produces another solution. Infinite repetition excludes every nonzero integer triple. The zero triple is allowed and is the sole solution.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 2(iii). Catalogue: Direct.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S069", "stepSource": {"year": 2022, "paper": "III", "part": "2(iii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"}, "sourceGroup": "2022-3-2", "templateFamily": "integer-descent"}, {"n": 7, "stem": "For x≠0 let \\(f(x)=x-x^{-1}-x^{-2}\\). Which describes its stationary point and its straight-line asymptotes?", "opts": ["No stationary point; asymptotes x=0 and y=x", "Local minimum (−1,−1); asymptotes x=0 and y=x", "Local maximum (−1,−1); asymptotes x=0 and y=0", "Local maximum (−1,−1); asymptotes x=0 and y=x", "Local maximum (1,−1); asymptotes x=0 and y=x"], "correct": 3, "sol": "<p>Power differentiation gives f′(x)=1+x⁻²+2x⁻³=(x+1)(x²−x+2)/x³. The quadratic factor is positive, so the only stationary point is x=−1, f=−1. The derivative changes from positive to negative there, giving a maximum. As x→0 the −x⁻² term dominates, while f(x)−x→0 as |x|→∞. Therefore the asymptotes are x=0 and y=x.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper III, question 1(i). Catalogue: Supply.</a></p>", "topic": "Differentiation / Functions and Graphs", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S125", "stepSource": {"year": 2018, "paper": "III", "part": "1(i)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%203.pdf"}, "sourceGroup": "2018-3-1", "templateFamily": "2018-3-1"}, {"n": 8, "stem": "Let R rotate points anticlockwise through 60° about the origin, and let F reflect them in the line y=x. A transformation applies R, then F, then the inverse rotation \\(R^{-1}\\), in that order. What is the resulting transformation?", "opts": ["Reflection in the line making angle −15° with the positive x-axis", "Reflection in the line making angle 15° with the positive x-axis", "Reflection in the line making angle 75° with the positive x-axis", "Reflection in y=x", "Rotation anticlockwise through 30°", "Rotation clockwise through 120°"], "correct": 0, "sol": "<p>A point whose polar direction is θ is sent successively to θ+60°, 90°−(θ+60°), and 90°−θ−120°=−30°−θ. Reflection in a line of direction α sends θ to 2α−θ, so α=−15°. All three transformations preserve distance from the origin, and the origin is fixed. This determines the reflection, rather than only its effect on one ray.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 3(iii)(c). Catalogue: Supply.</a></p>", "topic": "Geometry / Trigonometry", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S022", "stepSource": {"year": 2024, "paper": "II", "part": "3(iii)(c)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-3", "templateFamily": "2024-2-3"}, {"n": 9, "stem": "A candidate chooses K uniformly from {0,1,2,3,4,5}, then guesses K questions of a five-question test with n≥2 options each. You are given that passing is impossible for K≤2, while the pass probabilities for K=3,4,5 are \\(1/n^3,(4n-3)/n^4,(5n-4)/n^5\\). If the probability K=4 conditional on passing is 1/2, what is n?", "opts": ["2", "4", "3", "5", "6"], "correct": 0, "sol": "<p>Equal prior probabilities of the six K values cancel in the conditional ratio. Thus P(K=4|pass)=n(4n−3)/[n²+n(4n−3)+(5n−4)]=(4n²−3n)/(5n²+2n−4). Setting this to 1/2 gives 3n²−8n+4=0, or (3n−2)(n−2)=0. The condition that n is an integer at least 2 leaves n=2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 13(ii). Catalogue: Supply.</a></p>", "topic": "Probability and Statistics / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S119", "stepSource": {"year": 2018, "paper": "I", "part": "13(ii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-13", "templateFamily": "2018-1-13"}, {"n": 10, "stem": "You may use \\[\\sin(2nt)=2\\sin t\\sum_{r=1}^n\\cos((2r-1)t)\\] for positive integers n. What is the exact value of \\[\\sin\\frac\\pi{14}-\\sin\\frac{3\\pi}{14}+\\sin\\frac{5\\pi}{14}?\\]", "opts": ["\\(\\sqrt3/2\\)", "\\(1/2\\)", "\\(1\\)", "\\((\\sqrt5-1)/4\\)", "\\(0\\)", "\\(\\sqrt2/2\\)"], "correct": 1, "sol": "<p>Apply the identity with n=3 and t=π/7. Since sin(6π/7)=sin(π/7), it gives cos(π/7)+cos(3π/7)+cos(5π/7)=1/2. Now cos(π/7)=sin(5π/14), cos(3π/7)=sin(π/14), and cos(5π/7)=-cos(2π/7)=-sin(3π/14). The cosine sum is therefore exactly the required alternating sine sum.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 8(iii). Catalogue: Supply.</a></p>", "topic": "Trigonometry", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S019", "stepSource": {"year": 2025, "paper": "III", "part": "8(iii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-8", "templateFamily": "2025-3-8"}, {"n": 11, "stem": "Let \\(\\alpha=\\sqrt2+\\sqrt3+\\sqrt5\\). You may use that \\(f(\\sqrt2+\\sqrt3)=0\\), where \\(f(t)=t^4-10t^2+1\\). Which polynomial has α as a root?", "opts": ["\\((x^4+20x^2-24)^2-20x^6\\)", "\\((x^4+20x^2-24)^2-80x^2\\)", "\\((x^4-20x^2-24)^2-80x^6\\)", "\\((x^4+20x^2-24)^2-80x^6\\)", "\\((x^4+20x^2+24)^2-80x^6\\)"], "correct": 3, "sol": "<p>Substitute t=x−√5 into f. Expansion gives \\(f(x-\\sqrt5)=x^4+20x^2-24-4\\sqrt5x^3\\). This vanishes at x=α. Isolate the surd term and square, obtaining \\((x^4+20x^2-24)^2=80x^6\\). Squaring may add roots, but the question asks only for a polynomial having α as a root, so that does not invalidate the construction.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 4(ii). Catalogue: Supply.</a></p>", "topic": "Surds / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S044", "stepSource": {"year": 2023, "paper": "II", "part": "4(ii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-4", "templateFamily": "polynomial-surds"}, {"n": 12, "stem": "How many distinct solutions does \\(|\\sin x|+|\\cos x|=6/5\\) have for 0≤x&lt;2π? You may use \\(\\sin2x=2\\sin x\\cos x\\).", "opts": ["2", "8", "4", "12", "6"], "correct": 1, "sol": "<p>Squaring gives 1+2|sin x cos x|=36/25, hence |sin2x|=11/25. Since 0&lt;11/25&lt;1, the equation |sin t|=11/25 has four solutions in every interval of length 2π. As t=2x ranges over [0,4π), there are eight. Squaring introduced no extraneous solutions because the original sum is nonnegative.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Trigonometry / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "O011", "stepSource": {"original": true}, "sourceGroup": "O011", "templateFamily": "O011"}, {"n": 13, "stem": "For n≥1, \\(w_{n+1}=(w_{n+2}+w_n)/2-an-b\\), where a≠0 and w₁=w₂=0. You are given that wₙ is a cubic polynomial in n. Which expression is wₙ?", "opts": ["\\((n-1)(n-2)(an/3+b/2)\\)", "\\((n-1)(n-2)(a(n-1)/3+b)\\)", "\\((n-1)(n-2)(an+b)\\)", "\\(n(n-1)(an/3+b)\\)", "\\((n-1)(n-2)(an/3+b)\\)"], "correct": 4, "sol": "<p>The zeros at 1 and 2 imply wₙ=(n−1)(n−2)(An+B). Its forward second difference is 6An+2B, as direct expansion verifies. The recurrence requires this to equal 2an+2b for every n. Hence A=a/3 and B=b, giving the formula. Since a≠0 the leading coefficient is nonzero.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 2(iii). Catalogue: Supply.</a></p>", "topic": "Sequences and Series / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S061", "stepSource": {"year": 2022, "paper": "II", "part": "2(iii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"}, "sourceGroup": "2022-2-2", "templateFamily": "2022-2-2"}, {"n": 14, "stem": "The sets \\(A=\\{1,4,6,7\\}\\) and \\(B=\\{2,3,5,8\\}\\) have equal sizes, equal sums and equal sums of squares. If two such sets are shifted by the same constant, expansion of \\((x+c)^3\\) shows that their difference of cube sums is unchanged. Which set C has the same sum, square sum and cube sum as its complement in \\(\\{1,\\ldots,16\\}\\)?", "opts": ["\\(\\{1,2,3,4,13,14,15,16\\}\\)", "\\(\\{1,4,6,7,9,12,14,15\\}\\)", "\\(\\{1,4,6,8,10,11,13,15\\}\\)", "\\(\\{1,3,5,7,10,12,14,16\\}\\)", "\\(\\{1,4,6,7,10,11,13,16\\}\\)"], "correct": 4, "sol": "<p>Take C=A∪(8+B) and its complement D=B∪(8+A). Equal sizes, sums and square sums ensure equality of the first two power sums after this construction. The cube-sum difference is [sum A³−sum B³]+[sum(8+B)³−sum(8+A)³]=0 by the supplied shift result. Thus C is {1,4,6,7,10,11,13,16}. The construction preserves all three required equalities.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 8(iii). Catalogue: Supply.</a></p>", "topic": "Sequences and Series / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S009", "stepSource": {"year": 2025, "paper": "II", "part": "8(iii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-8", "templateFamily": "2025-2-8"}, {"n": 15, "stem": "For which real a does \\(x^4+ax^3+(2a-2)x^2+ax+1=0\\) have exactly three distinct real roots?", "opts": ["a≤0 or a≥4", "0&lt;a&lt;4", "a&lt;−4 or a&gt;0", "a&lt;0 or a&gt;4", "Every a≠0"], "correct": 3, "sol": "<p>The quartic factors as (x+1)²[x²+(a−2)x+1]. The quadratic must supply two distinct real roots, neither equal to −1. Its discriminant is (a−2)²−4=a(a−4), positive exactly for a&lt;0 or a&gt;4. A root −1 would require a=4, excluded already. At a=0 the quadratic is (x−1)², giving only two distinct roots; at a=4 all roots coincide at −1.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 1(ii)–(iii). Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S120", "stepSource": {"year": 2018, "paper": "II", "part": "1(ii)–(iii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"}, "sourceGroup": "2018-2-1", "templateFamily": "2018-2-1"}, {"n": 16, "stem": "A gambler starts with one token and stops at zero or four tokens. Each independent bet wins with probability 3/5. A cautious strategy stakes one token each time, gaining or losing one. A bold strategy stakes all current tokens, either doubling them or losing them all. You may use that a cautious gambler starting at two tokens reaches four before zero with probability \\(p^2/[p^2+(1-p)^2]\\). Which gives the success probabilities (cautious, bold)?", "opts": ["(27/65,9/25)", "(9/13,9/25)", "(27/65,3/5)", "(9/25,27/65)", "(27/125,9/25)"], "correct": 0, "sol": "<p>The cautious gambler must win the first bet to reach two tokens, then succeeds with the supplied probability. This gives (3/5)·[(9/25)/(9/25+4/25)]=27/65. The bold gambler must win two successive bets, giving (3/5)²=9/25. In particular the cautious probability is larger, despite requiring more possible bets.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 12(iii). Catalogue: Supply.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S080", "stepSource": {"year": 2021, "paper": "II", "part": "12(iii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"}, "sourceGroup": "2021-2-12", "templateFamily": "coin-stopping"}, {"n": 17, "stem": "Define \\(g(x)=2\\min(x^2,x^3)-5x\\) for every real \\(x\\). Which option gives exactly the x-coordinates of its local maxima and local minima, respectively?", "opts": ["Maxima: \\(-\\sqrt{5/6},0,1\\); minima: \\(\\sqrt{5/6},5/4\\)", "Maxima: \\(1\\); minima: \\(\\sqrt{5/6},5/4\\)", "Maxima: \\(-\\sqrt{5/6}\\); minima: \\(\\sqrt{5/6},5/4\\)", "Maxima: \\(-\\sqrt{5/6},5/4\\); minima: \\(\\sqrt{5/6},1\\)", "Maxima: \\(-\\sqrt{5/6},1\\); minima: \\(\\sqrt{5/6},5/4\\)"], "correct": 4, "sol": "<p>Since \\(x^3-x^2=x^2(x-1)\\), the cubic is selected for x≤1 and the quadratic for x≥1. On the left, \\(g\\prime(x)=6x^2-5\\), giving a maximum at \\(-\\sqrt{5/6}\\) and a minimum at \\(\\sqrt{5/6}\\). On the right, \\(g\\prime(x)=4x-5\\), giving a minimum at 5/4. At x=1 the left gradient is positive and the right gradient negative, so this join is also a local maximum. At x=0 the same cubic formula applies on both sides, so there is no extra extremum.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 1(iv), extrema. Catalogue: Direct.</a></p>", "topic": "Differentiation / Functions and Graphs", "estimatedDifficulty": 7, "estimatedMinutes": 5, "selectionId": "S003", "stepSource": {"year": 2025, "paper": "II", "part": "1(iv), extrema", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-1", "templateFamily": "modulus-piecewise"}, {"n": 18, "stem": "For a positive integer x let d(x) be its decimal digit sum. You are given that every solution of x=44d(x) has at most four digits. Which is the complete set of solutions?", "opts": ["{396}", "{396,792,1188}", "{792}", "{198,396}", "{396,792}"], "correct": 2, "sol": "<p>The numbers x and d(x) have the same remainder modulo 9. Hence x=44d(x) forces 43d(x), and therefore d(x), to be divisible by 9. The four-digit bound gives d(x)≤36. The only possible x values are 396,792,1188,1584, corresponding to digit sums 9,18,27,36. Their actual digit sums are all 18. Thus only x=44·18=792 works.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 5(ii), digit equation. Catalogue: Supply.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 7, "estimatedMinutes": 5, "selectionId": "S086", "stepSource": {"year": 2020, "paper": "II", "part": "5(ii), digit equation", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-5", "templateFamily": "2020-2-5"}, {"n": 19, "stem": "Let \\(\\alpha=99/100\\), and for \\(1\\le r\\le200\\) set \\(u_r=(2-r)\\alpha^{r-1}+2(r-1)\\alpha^{r-2}\\). At which index is uᵣ largest?", "opts": ["101 only", "100 only", "99 only", "100 and 101", "99 and 100"], "correct": 1, "sol": "<p>Write uᵣ=α^(r−2)[(2−α)r+2α−2]. Subtraction gives uᵣ₊₁−uᵣ=α^(r−2)[(α−1)(2−α)r+α(2−α)+2(α−1)²]. Substituting α=99/100 makes the bracket (10001−101r)/10000. It is positive for integer r≤99 and negative for r≥100. Consequently the unique maximum is u₁₀₀.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 3(ii), maximum index. Catalogue: Supply.</a></p>", "topic": "Sequences and Series", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S083", "stepSource": {"year": 2020, "paper": "II", "part": "3(ii), maximum index", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-3", "templateFamily": "2020-2-3"}, {"n": 20, "stem": "Two distinct tangents to \\(x^2=4ay\\), a&gt;0, meet at (X,Y), where \\((Y+7a)^2=48a^2+3X^2\\). If their tangency parameters are p,q, you may use \\(p+q=2X\\), \\(pq=4aY\\), their gradients p/(2a),q/(2a), and \\(\\tan\\theta=|(m_1-m_2)/(1+m_1m_2)|\\). What is their acute angle θ?", "opts": ["45°", "60°", "75°", "30°", "15°", "It depends on X"], "correct": 3, "sol": "<p>The tangent formula gives \\(\\tan^2\\theta=(X^2-4aY)/(a+Y)^2\\). The locus equation rearranges to \\(3X^2=Y^2+14aY+a^2\\), hence \\(X^2-4aY=(Y+a)^2/3\\). There is no real locus point with Y=-a, since that would require X²=-4a². Thus division is legitimate and tan²θ=1/3. The acute angle is 30°.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 4(iii). Catalogue: Supply.</a></p>", "topic": "Geometry / Trigonometry", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S036", "stepSource": {"year": 2024, "paper": "III", "part": "4(iii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-4", "templateFamily": "2024-3-4"}], "standardMinutes": 75, "archived": true, "resumeArchived": true}, {"id": "steppractice05p1v1", "title": "STEP practice · Year 05 · Paper 1", "sub": "Applications of Mathematical Knowledge · STEP adaptations", "type": 1, "group": 6, "stepAdapted": true, "questions": [{"n": 1, "stem": "Positive integers c,n,k obey \\(2n^2+k=2ck+k^2\\). Which of the following values of k cannot occur?", "opts": ["5", "1", "6", "4", "3", "2"], "correct": 3, "sol": "<p>For k=4 the equation gives n²=4c+6, so n² leaves remainder 2 upon division by 4. An even square leaves remainder 0 and an odd square remainder 1, making this impossible. The other choices do occur: (k,n,c)=(1,1,1),(2,3,4),(3,3,2),(5,5,3),(6,9,11), respectively.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 1(iii). Catalogue: Supply.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S021", "stepSource": {"year": 2024, "paper": "II", "part": "1(iii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-1", "templateFamily": "2024-2-1"}, {"n": 2, "stem": "What is the coefficient of x⁶ in \\((1+x)^8(1-x)^6\\)?", "opts": ["−20", "15", "−5", "35", "5"], "correct": 2, "sol": "<p>Rewrite the product as (1−x²)⁶(1+x)². To produce x⁶, use the x⁶ term from the first factor with 1, or its x⁴ term with x². The term 2x cannot contribute since the first factor has only even powers. The coefficient is −C(6,3)+C(6,2)=−20+15=−5.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Sequences and Series / General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "O012", "stepSource": {"original": true}, "sourceGroup": "O012", "templateFamily": "O012"}, {"n": 3, "stem": "A and B independently toss a coin whose head probability is p, where 0&lt;p&lt;1. Each stops at their first head. For integer s≥2, what is the probability that their combined number of tosses is s?", "opts": ["\\((s-1)p(1-p)^{s-1}\\)", "\\((s-1)p^2(1-p)^s\\)", "\\((s-1)p^2(1-p)^{s-2}\\)", "\\(sp^2(1-p)^{s-2}\\)", "\\(p^2(1-p)^{s-2}\\)"], "correct": 2, "sol": "<p>If A takes i tosses, B must take s−i, with i=1,…,s−1. Each case has two final heads and s−2 preceding tails, of probability p²(1−p)^(s−2). These s−1 cases are disjoint, giving the stated product.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 12(i), S. Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S092", "stepSource": {"year": 2020, "paper": "III", "part": "12(i), S", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"}, "sourceGroup": "2020-3-12", "templateFamily": "2020-3-12"}, {"n": 4, "stem": "The trapezium rule with four equal strips approximates \\(\\int_0^2(x^2+1)\\,dx\\). By how much does the approximation exceed the exact integral?", "opts": ["1/6", "1/24", "1/12", "1/3", "0"], "correct": 2, "sol": "<p>The strip width is 1/2 and the five function values are 1,5/4,2,13/4,5. The trapezium estimate is (1/4)[1+2(5/4+2+13/4)+5]=19/4. The exact integral is [x³/3+x]₀²=14/3. The excess is 19/4−14/3=1/12.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Integration", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "O009", "stepSource": {"original": true}, "sourceGroup": "O009", "templateFamily": "O009"}, {"n": 5, "stem": "For every non-degenerate triangle with side lengths a,b,c, consider the triples \\[A:(a+1,b+1,c+1),\\quad B:(a/b,b/c,c/a),\\quad C:(|a-b|,|b-c|,|c-a|).\\] Classify each as always, sometimes but not always, or never giving a non-degenerate triangle.", "opts": ["A always; B sometimes; C never", "A sometimes; B sometimes; C never", "A always; B never; C never", "A always; B always; C never", "A always; B sometimes; C sometimes"], "correct": 0, "sol": "<p>Adding 1 to each side increases every triangle-inequality margin by 1, so A always works. B works for a=b=c; but (a,b,c)=(1,2,2) gives (1/2,1,2), which fails. For C, order the original side lengths: the largest pairwise difference equals the sum of the other two. Hence the strict triangle inequality always fails, including the cases with zero differences.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 4(iii)(A–C). Catalogue: Direct.</a></p>", "topic": "Geometry", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S084", "stepSource": {"year": 2020, "paper": "II", "part": "4(iii)(A–C)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-4", "templateFamily": "2020-2-4"}, {"n": 6, "stem": "For positive integer n, a polynomial is defined by \\[P(x)=1+\\sum_{r=0}^n\\binom{2n+1}{2r}x^{2n+1-2r}(x^2-1)^r.\\] What is the coefficient of x²ⁿ⁺¹?", "opts": ["\\((2n+1)2^{2n-1}\\)", "\\(2^{2n}-1\\)", "\\(1\\)", "\\(2^n\\)", "\\(2^{2n+1}\\)", "\\(2^{2n}\\)"], "correct": 5, "sol": "<p>Each summand contributes its binomial coefficient to the leading term. Their sum is the sum of the even-indexed coefficients in (1+t)^(2n+1). Adding the evaluations at t=1 and t=-1 gives twice this sum: 2^(2n+1)+0. Hence the desired coefficient is 2^(2n). The separate constant 1 does not affect it.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 4(ii). Catalogue: Supply.</a></p>", "topic": "Sequences and Series", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S053", "stepSource": {"year": 2023, "paper": "III", "part": "4(ii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-4", "templateFamily": "2023-3-4"}, {"n": 7, "stem": "Points O,A,B,C form a tetrahedron. Write \\(\\overrightarrow{OA}=\\mathbf a\\), \\(\\overrightarrow{OB}=\\mathbf b\\), \\(\\overrightarrow{OC}=\\mathbf c\\). A point P satisfies \\(\\overrightarrow{OP}=\\mathbf a/6+\\mathbf b/4+\\mathbf c/3\\). Points L on OA and X on BC are chosen so that L,P,X are collinear. What are \\(OL/OA\\) and \\(BX:XC\\)?", "opts": ["\\(2/5,\\ 3:4\\)", "\\(3/5,\\ 3:4\\)", "\\(2/7,\\ 4:3\\)", "\\(1/4,\\ 4:3\\)", "\\(1/6,\\ 4:3\\)", "\\(2/5,\\ 4:3\\)"], "correct": 5, "sol": "<p>Write X=(1-s)b+sc and L=ta. Then P=(1-u)L+uX. Comparing b,c coefficients gives u=1/4+1/3=7/12 and s=(1/3)/(7/12)=4/7. Thus BX:XC=s:(1-s)=4:3. Comparing a coefficients gives (5/12)t=1/6, so t=2/5. The non-coplanarity ensures these coefficient comparisons are valid.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 5(i). Catalogue: Direct.</a></p>", "topic": "Geometry", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S017", "stepSource": {"year": 2025, "paper": "III", "part": "5(i)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-5", "templateFamily": "2025-3-5"}, {"n": 8, "stem": "The curve C₁ is the union of the unit circles centred at (−1,0) and (1,0). A second curve C₂ has equation \\[(x^2+y^2-2x)(x^2+y^2+2x)=1/16.\\] You are given that at each highest point of C₂, \\(x^2=2-y^2\\). What are the height and distance from the y-axis of those points, and how does that distance compare with the highest points of C₁?", "opts": ["\\(3\\sqrt7/8,\\ \\sqrt{65}/8\\); farther", "\\(\\sqrt{63}/8,\\ \\sqrt{63}/8\\); closer", "\\(\\sqrt{65}/8,\\ \\sqrt{65}/8\\); farther", "\\(\\sqrt{65}/8,\\ 3\\sqrt7/8\\); closer", "\\(\\sqrt{65}/8,\\ 1\\); equal"], "correct": 3, "sol": "<p>The supplied relation gives x²+y²=2. Substitution in C₂ gives (2−2x)(2+2x)=1/16, hence x²=63/64 and y²=65/64. At a highest point y is positive by symmetry, so the height is √65/8 and the distance from the y-axis is √63/8=3√7/8. The highest points of C₁ are (±1,1), at distance 1. Since 63/64&lt;1, the highest points of C₂ are closer to the y-axis.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 7(ii)(b)–(c). Catalogue: Supply.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S027", "stepSource": {"year": 2024, "paper": "II", "part": "7(ii)(b)–(c)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-7", "templateFamily": "2024-2-7"}, {"n": 9, "stem": "A sequence satisfies \\[0\\le y_n-\\sqrt2\\le2\\left(\\frac{\\sqrt2-1}{2}\\right)^{2^n}\\quad(n\\ge1).\\] You may use \\(\\sqrt2-1&lt;1/2\\) and \\(2^{10}&gt;10^3\\). Which of the following bounds on y₁₀ follows from these estimates?", "opts": ["\\(\\sqrt2\\le y_{10}&lt;\\sqrt2+10^{-2400}\\)", "\\(\\sqrt2-10^{-600}&lt;y_{10}\\le\\sqrt2\\)", "\\(y_{10}=\\sqrt2\\)", "\\(\\sqrt2\\le y_{10}&lt;\\sqrt2+10^{-1200}\\)", "\\(\\sqrt2\\le y_{10}&lt;\\sqrt2+10^{-600}\\)"], "correct": 4, "sol": "<p>The error is less than 2(1/4)^1024=2^-2047. Since 2047&gt;2000, this is less than (2^10)^-200&lt;10^-600. The estimate is an upper error bound on the nonnegative side, not a lower-side enclosure or an equality. The powers 1200 and 2400 are not supported by the given bound.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 5(ii)(c). Catalogue: Supply.</a></p>", "topic": "Sequences and Series / Indices", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S048", "stepSource": {"year": 2023, "paper": "II", "part": "5(ii)(c)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-5", "templateFamily": "convergence-estimate"}, {"n": 10, "stem": "An aircraft has n≥3 passengers with distinct assigned seats. Passenger 1 chooses a seat uniformly at random. In order, each later passenger takes their assigned seat if free, otherwise chooses uniformly among free seats. What is the probability that passenger n−1 gets their assigned seat?", "opts": ["(n−1)/n", "1/2", "1/3", "2/3", "(n−2)/(n−1)"], "correct": 3, "sol": "<p>Consider the three distinguished seats numbered 1,n−1,n. Until one is chosen by the displacement chain, all three remain free and are symmetric. If seat 1 is reached first the chain ends; if seat n is reached first the chain pauses until the last passenger. Either case leaves seat n−1 free for its owner. If seat n−1 is reached first, its owner will be displaced. Symmetry between the three distinguished seats makes the three first-hit events equiprobable, giving 2/3.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 11(iv). Catalogue: Supply.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6, "estimatedMinutes": 4.5, "selectionId": "S078", "stepSource": {"year": 2021, "paper": "II", "part": "11(iv)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"}, "sourceGroup": "2021-2-11", "templateFamily": "coin-stopping"}, {"n": 11, "stem": "Let R&gt;0, 0&lt;w&lt;R and \\(\\pi/3\\le\\alpha\\le\\pi/2\\). A circle centred at (0,−d), where d&gt;0, has radius R+d and passes through \\(((R+w)\\sin\\alpha,(R+w)\\cos\\alpha)\\). What is d?", "opts": ["\\(\\dfrac{w(2R+w)}{2(R+w)(1-\\cos\\alpha)}\\)", "\\(\\dfrac{w(2R+w)}{2[R+(R+w)\\cos\\alpha]}\\)", "\\(\\dfrac{w^2}{2[R-(R+w)\\cos\\alpha]}\\)", "\\(\\dfrac{w(2R+w)}{R-(R+w)\\cos\\alpha}\\)", "\\(\\dfrac{w(2R+w)}{2[R-(R+w)\\cos\\alpha]}\\)"], "correct": 4, "sol": "<p>The squared distance to the centre equals (R+d)². Expanding and using sin²α+cos²α=1 gives (R+w)²+2d(R+w)cosα+d²=R²+2Rd+d². Hence 2d[R−(R+w)cosα]=w(2R+w). The denominator is positive because cosα≤1/2 and w&lt;R, so division gives the stated positive d.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 6(ii)(a). Catalogue: Direct.</a></p>", "topic": "Geometry", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S077", "stepSource": {"year": 2021, "paper": "II", "part": "6(ii)(a)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"}, "sourceGroup": "2021-2-6", "templateFamily": "2021-2-6"}, {"n": 12, "stem": "For which real k does \\(x^3-3kx+2=0\\) have three distinct real roots?", "opts": ["k&lt;−1 or k&gt;1", "k&gt;1", "k&gt;0", "k&lt;1", "k≥1"], "correct": 1, "sol": "<p>For k≤0 the derivative 3x²−3k is nonnegative, and the cubic is strictly increasing, so there is only one root. For k&gt;0 the local maximum at −√k has value 2+2k√k&gt;0; the local minimum at √k has value 2−2k√k. Three crossings require the minimum to be negative, equivalent to k√k&gt;1, hence k&gt;1. At k=1 one root is repeated, so the inequality is strict.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Differentiation / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "O005", "stepSource": {"original": true}, "sourceGroup": "O005", "templateFamily": "O005"}, {"n": 13, "stem": "How many ordered pairs of coprime positive integers (a,b) satisfy \\(a^4+b^4=10a^2b^2\\)?", "opts": ["0", "4", "Infinitely many", "2", "1"], "correct": 0, "sol": "<p>Modulo 3, a square is 0 or 1 and a fourth power has the same residue. If exactly one of a,b is divisible by 3, the two sides have residues 1 and 0. If neither is divisible by 3, the residues are 2 and 1. Thus both must be divisible by 3, contradicting coprimality. There are no such pairs.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 7(i). Catalogue: Direct.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S100", "stepSource": {"year": 2019, "paper": "I", "part": "7(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-7", "templateFamily": "integer-descent"}, {"n": 14, "stem": "Let \\(f(x)=7-2|x|\\), and \\(u_{n+1}=f(u_n)\\). You may use the three-cycle \\(1\\to5\\to-3\\to1\\). How many real starting values u₀ first enter this cycle at u₃, and what is the largest such starting value?", "opts": ["12 and 6", "8 and 7", "12 and 13/2", "6 and 6", "6 and 13/2", "24 and 13/2"], "correct": 2, "sol": "<p>The preimages of the three cycle members are ±1,±3,±5. Removing the cycle itself leaves −1,3,−5 as the values first entering after one step. Their preimages are ±4,±2,±6, six values first entering after two steps. Each has two distinct preimages, since solving 7−2|x|=b gives x=±(7−b)/2 and every listed b is less than 7. These twelve distinct values first enter after three steps. The largest comes from b=−6 and is (7+6)/2=13/2.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 2(ii)(c). Catalogue: Supply.</a></p>", "topic": "Functions and Graphs / Sequences and Series", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S014", "stepSource": {"year": 2025, "paper": "III", "part": "2(ii)(c)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-2", "templateFamily": "2025-3-2"}, {"n": 15, "stem": "Which straight lines \\(y=mx+c\\) satisfy \\[\\frac{dy}{dx}=x^2+y^2-2xy-4x+4y+3\\] for every real x?", "opts": ["\\(y=x-2+\\sqrt2\\) and \\(y=x-2-\\sqrt2\\)", "\\(y=-x-2\\) only", "\\(y=x+2+\\sqrt2\\) and \\(y=x+2-\\sqrt2\\)", "\\(y=x-1\\) and \\(y=x-3\\)", "\\(y=-x-2+\\sqrt2\\) and \\(y=-x-2-\\sqrt2\\)"], "correct": 0, "sol": "<p>Substitute y=mx+c and y′=m. The coefficient of x² on the right is (m−1)², which must be zero, giving m=1. The x coefficient then also vanishes. The constant equation is 1=c²+4c+3, or (c+2)²=2. Hence c=−2±√2. Only differentiation of a linear function and coefficient comparison are required.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 6(ii), straight-line solutions. Catalogue: Direct.</a></p>", "topic": "Differentiation / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S108", "stepSource": {"year": 2019, "paper": "II", "part": "6(ii), straight-line solutions", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"}, "sourceGroup": "2019-2-6", "templateFamily": "2019-2-6"}, {"n": 16, "stem": "For real \\(a,b\\), \\(\\min(a,b)\\) is their smaller value. Find all real \\(x\\) satisfying \\[\\min(x^2,2x)+\\min(x^3,4x)=2x.\\]", "opts": ["\\(\\{-2,0,1,2\\}\\)", "\\(\\{0,1\\}\\)", "\\(\\{-2,1\\}\\)", "\\(\\{-1,0,1\\}\\)", "\\(\\{-2,-1,0,1\\}\\)", "\\(\\{-2,0,1\\}\\)"], "correct": 1, "sol": "<p>The first minimum switches at 0 and 2; the second at -2, 0 and 2. For x&lt;-2 the equation becomes \\(2x+x^3=2x\\), with no root there. For -2≤x≤0 it becomes \\(6x=2x\\), giving 0, except at -2: direct substitution gives -12 versus -4, so -2 is not a root. For 0≤x≤2, \\(x^2+x^3=2x\\), giving \\(x(x+2)(x-1)=0\\), hence 0 and 1. For x≥2 the equation is \\(6x=2x\\), with no root. Thus the complete set is {0,1}.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 1(iii), either value of m. Catalogue: Direct.</a></p>", "topic": "General algebra / Functions and Graphs", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S002", "stepSource": {"year": 2025, "paper": "II", "part": "1(iii), either value of m", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-1", "templateFamily": "modulus-piecewise"}, {"n": 17, "stem": "For real \\(x\\), let \\[S(x)=\\sum_{k=0}^{\\infty}\\left\\lfloor\\frac{x+2^k}{2^{k+1}}\\right\\rfloor.\\] Here \\(\\lfloor t\\rfloor\\) is the greatest integer not exceeding \\(t\\); for each fixed x only finitely many summands are nonzero. You may use \\(\\lfloor t/2\\rfloor+\\lfloor(t+1)/2\\rfloor=\\lfloor t\\rfloor\\). Which formula holds for every real x?", "opts": ["\\(S(x)=\\lfloor x\\rfloor+1\\) for all x", "\\(S(x)=\\lfloor x\\rfloor\\) for \\(x\\ge0\\), and \\(S(x)=\\lfloor x\\rfloor+1\\) for \\(x&lt;0\\)", "\\(S(x)=\\lfloor |x|\\rfloor\\) for all x", "\\(S(x)=\\lceil x\\rceil\\) for all x", "\\(S(x)=0\\) for \\(|x|&lt;1\\), and \\(S(x)=\\lfloor x\\rfloor\\) otherwise", "\\(S(x)=\\lfloor x\\rfloor\\) for all x"], "correct": 1, "sol": "<p>Apply the identity with t=x/2^k. The kth term equals \\(\\lfloor x/2^k\\rfloor-\\lfloor x/2^{k+1}\\rfloor\\). Therefore the sum through k=N is \\(\\lfloor x\\rfloor-\\lfloor x/2^{N+1}\\rfloor\\). For x≥0 the last floor is eventually 0. For x&lt;0 it is eventually -1, even when x is a negative integer. This gives the two cases and explains why simply using the ceiling function fails at negative integers.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 4(iii)(b). Catalogue: Supply.</a></p>", "topic": "Sequences and Series / Number Theory", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S005", "stepSource": {"year": 2025, "paper": "II", "part": "4(iii)(b)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-4", "templateFamily": "floor-systems"}, {"n": 18, "stem": "Which ordered pairs of primes (p,q) make \\(p^2+pq+q^2\\) the square of an integer?", "opts": ["(2,3) and (3,2) only", "No pairs", "Infinitely many pairs", "(3,3) only", "(2,7) and (7,2) only", "(3,5) and (5,3) only"], "correct": 5, "sol": "<p>Write the square as n². Then max(p,q)&lt;n&lt;p+q, and \\((p+q-n)(p+q+n)=pq\\). The first positive integer factor is smaller than both primes, so it is 1. Hence n=p+q−1. Substituting and simplifying gives (p−2)(q−2)=3. Its positive integer factor pairs are (1,3),(3,1), giving (3,5),(5,3). Neither prime can be 2 since that would make the product zero. Both pairs give n=7.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 5(ii). Catalogue: Direct.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S056", "stepSource": {"year": 2023, "paper": "III", "part": "5(ii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-5", "templateFamily": "2023-3-5"}, {"n": 19, "stem": "The solution set of \\(|x^2+px+q|\\le mx+c\\) is \\([-5,1]\\cup[5,7]\\). Which quadruple \\((p,q,m,c)\\) has this property?", "opts": ["\\((-6,5,-2,20)\\)", "\\((-4,-15,2,20)\\)", "\\((-2,-35,-4,5)\\)", "\\((-4,15,-2,20)\\)", "\\((-4,-15,-2,20)\\)", "\\((-4,-15,-2,-20)\\)"], "correct": 4, "sol": "<p>For the stated coefficients, the upper inequality x²−4x−15≤−2x+20 is \\((x+5)(x-7)\\le0\\), giving [-5,7]. The lower inequality x²−4x−15≥2x−20 is \\((x-1)(x-5)\\ge0\\), giving x≤1 or x≥5. Their intersection is exactly the stated union. The right side is nonnegative there. These two bounding quadratics also recover the coefficients uniquely from the four simple endpoints.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 2(iv). Catalogue: Direct.</a></p>", "topic": "General algebra / Functions and Graphs", "estimatedDifficulty": 7, "estimatedMinutes": 5, "selectionId": "S034", "stepSource": {"year": 2024, "paper": "III", "part": "2(iv)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-2", "templateFamily": "2024-3-2"}, {"n": 20, "stem": "Two distinct circles have centres \\((0,a_1),(0,a_2)\\). Their common tangents are \\(y=c\\pm x\\). You are given \\[a_1+a_2=2c+4k,\\qquad a_1a_2=c^2+2k^2\\] with \\(k&gt;0\\). On circle i the contact points are \\((\\pm(a_i-c)/2,(a_i+c)/2)\\). A circle with centre \\((0,d)\\) and radius p passes through all four contact points. What are \\(d\\) and \\(p^2\\)?", "opts": ["\\(d=2c+4k,\\ p^2=4kc+6k^2\\)", "\\(d=c+2k,\\ p^2=2kc+4k^2\\)", "\\(d=c+2k,\\ p^2=c^2+2k^2\\)", "\\(d=c+2k,\\ p^2=2kc+3k^2\\)", "\\(d=c+k,\\ p^2=2kc+k^2\\)"], "correct": 3, "sol": "<p>The squared distance for circle i is \\(a_i^2/2-a_id+c^2/2-cd+d^2\\). Equality for i=1,2, followed by division by a1-a2, gives d=(a1+a2)/2=c+2k. Each ai satisfies \\(a_i^2-2da_i+c^2+2k^2=0\\). Substitution therefore gives \\(p^2=-k^2-cd+d^2=2kc+3k^2\\).</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 6(iii)(b). Catalogue: Supply.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 5, "selectionId": "S008", "stepSource": {"year": 2025, "paper": "II", "part": "6(iii)(b)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-6", "templateFamily": "2025-2-6"}], "standardMinutes": 75, "archived": true, "resumeArchived": true}, {"id": "steppractice06p1v1", "title": "STEP practice · Year 06 · Paper 1", "sub": "Applications of Mathematical Knowledge · STEP adaptations", "type": 1, "group": 6, "stepAdapted": true, "questions": [{"n": 1, "stem": "Every real root ω of \\(135x^5-135x^4-100x^3-91x^2-126x+135=0\\) satisfies \\(1/2\\le|\\omega|\\le2\\). Which is the complete set of integer roots?", "opts": ["{−2,−1}", "{1}", "{−1}", "{−1,1}", "{−1,2}"], "correct": 2, "sol": "<p>The bound restricts integer candidates to −2,−1,1,2. Substitution gives respectively −5657,0,−182,879 for the polynomial. Thus only −1 is an integer root. The supplied bound makes it unnecessary to solve or fully factor the quintic.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 3(ii). Catalogue: Supply.</a></p>", "topic": "General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S105", "stepSource": {"year": 2019, "paper": "II", "part": "3(ii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"}, "sourceGroup": "2019-2-3", "templateFamily": "2019-2-3"}, {"n": 2, "stem": "Write \\(\\lfloor t\\rfloor\\) for the greatest integer at most t and \\(\\{t\\}=t-\\lfloor t\\rfloor\\). Real x,y,z satisfy \\[x+\\lfloor y\\rfloor+\\{z\\}=3.9,\\quad\\{x\\}+y+\\lfloor z\\rfloor=5.3,\\quad\\lfloor x\\rfloor+\\{y\\}+z=5.\\] What is (x,y,z)?", "opts": ["(1.1,3.2,2.8)", "(1.1,2.2,3.8)", "(1.9,2.8,2.4)", "(2.1,1.2,3.8)", "(1.2,2.1,3.8)"], "correct": 1, "sol": "<p>Adding and halving gives x+y+z=7.1. Subtracting the first equation yields ⌊z⌋+{y}=3.2, so ⌊z⌋=3 and {y}=0.2. Similarly subtracting the second yields ⌊x⌋+{z}=1.8, while subtracting the third yields ⌊y⌋+{x}=2.1. Thus x=1.1,y=2.2,z=3.8.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 3(ii). Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S075", "stepSource": {"year": 2021, "paper": "II", "part": "3(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"}, "sourceGroup": "2021-2-3", "templateFamily": "floor-systems"}, {"n": 3, "stem": "A sequence satisfies \\(v_{n+1}=(v_{n+2}+v_n)/2-p\\) for n≥1, with p≠0 and v₁=v₂=0. Which formula gives vₙ?", "opts": ["\\(p(n-1)(n-2)\\)", "\\(pn(n-1)\\)", "\\(p(n^2-1)\\)", "\\(p(n-1)(n-2)/2\\)", "\\(-p(n-1)(n-2)\\)"], "correct": 0, "sol": "<p>Rearrange to vₙ₊₂−2vₙ₊₁+vₙ=2p. Thus the successive differences form an arithmetic sequence starting with v₂−v₁=0 and common difference 2p. Summing the first n−1 differences gives 2p[0+1+…+(n−2)]=p(n−1)(n−2). This also gives zero at n=1 and n=2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 2(ii). Catalogue: Direct.</a></p>", "topic": "Sequences and Series", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S060", "stepSource": {"year": 2022, "paper": "II", "part": "2(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"}, "sourceGroup": "2022-2-2", "templateFamily": "2022-2-2"}, {"n": 4, "stem": "Positive integers c,n,k satisfy the following condition: the sum of the n+k consecutive integers starting at c equals the sum of the next n integers. You may use the equivalent equation \\(2n^2+k=2ck+k^2\\). Which option describes all solutions when k=1 and when k=2?", "opts": ["k=1: any n≥1, c=n²−1; k=2: odd n≥3, c=(n²−1)/2", "k=1: odd n only, c=n²; k=2: odd n≥1, c=(n²−1)/2", "k=1: any n≥1, c=n²; k=2: even n≥2, c=(n²−1)/2", "k=1: any n≥1, c=n²; k=2: odd n≥3, c=(n²−1)/2", "k=1: any n≥1, c=n²; k=2: any n≥2, c=(n²−1)/2"], "correct": 3, "sol": "<p>For k=1 the equation reduces to c=n², which is positive for every positive n. For k=2 it becomes c=(n²−1)/2. This is integral exactly when n is odd. The value n=1 gives c=0 and is forbidden, so the odd values must start at 3. Both integrality and positivity are necessary.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 1(ii)(a)–(b). Catalogue: Supply.</a></p>", "topic": "Sequences and Series / Number Theory", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S020", "stepSource": {"year": 2024, "paper": "II", "part": "1(ii)(a)–(b)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-1", "templateFamily": "2024-2-1"}, {"n": 5, "stem": "For positive x,y with x+2y=6, what is the least possible value of \\(1/x+1/y\\)?", "opts": ["\\(2/3\\)", "\\(1\\)", "\\((3+2\\sqrt2)/6\\)", "\\(3/2\\)", "\\((3+\\sqrt2)/6\\)"], "correct": 2, "sol": "<p>Multiply by x+2y=6: 6(1/x+1/y)=3+x/y+2y/x. Put t=x/y&gt;0. Then t+2/t−2√2=(t−√2)²/t≥0. The bound (3+2√2)/6 is attained when x/y=√2, which is compatible with x+2y=6 and positivity.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "O013", "stepSource": {"original": true}, "sourceGroup": "O013", "templateFamily": "O013"}, {"n": 6, "stem": "Four people A,B,C,D stand in cyclic order. Starting at A, a parcel independently moves one place clockwise with probability 1/4, anticlockwise with probability 1/4, or stays put with probability 1/2 at each signal. You may use that after each positive number n of signals, the probabilities of being at B and D are both 1/4. What is the probability it is at A after n≥1 signals?", "opts": ["\\(1/4+2^{-n}\\)", "\\(1/4+2^{-n-1}\\)", "\\(1/4+(3/4)^n\\)", "\\(1/2+2^{-n-1}\\)", "\\(2^{-n}\\)"], "correct": 1, "sol": "<p>Let Aₙ be the required probability. For n≥1, Aₙ₊₁=Aₙ/2+(1/4)(1/4)+(1/4)(1/4)=Aₙ/2+1/8. Thus Aₙ₊₁−1/4=(Aₙ−1/4)/2. Since A₁=1/2, the differences form a geometric sequence with first term 1/4 and ratio 1/2, giving Aₙ=1/4+2⁻ⁿ⁻¹.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper II, question 13(ii). Catalogue: Supply.</a></p>", "topic": "Probability and Statistics / Sequences and Series", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S124", "stepSource": {"year": 2018, "paper": "II", "part": "13(ii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%202.pdf"}, "sourceGroup": "2018-2-13", "templateFamily": "2018-2-13"}, {"n": 7, "stem": "Let \\(f(x)=a+x+\\sqrt{x^2+b}\\), where b&gt;0 and a is real. We require f(x)≥0 and \\(\\int_{-t}^{t}1/(1+f(x))\\,dx=t\\) for every t≥0. You may use that this integral condition is equivalent to \\(f(x)f(-x)=1\\) for every x. Which (a,b) works?", "opts": ["(1,0)", "(0,2)", "(0,1)", "(1,1)", "(−1,1)", "(1,2)"], "correct": 2, "sol": "<p>The product is \\((a+\\sqrt{x^2+b})^2-x^2=a^2+b+2a\\sqrt{x^2+b}\\). To remain the constant 1 as x varies, a must be zero, then b=1. With these values √(x²+1)&gt;|x|, so f(x)&gt;0 for every real x. Thus both the nonnegativity condition and the supplied product criterion hold.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 5(ii). Catalogue: Supply.</a></p>", "topic": "General algebra / Surds", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S072", "stepSource": {"year": 2022, "paper": "III", "part": "5(ii)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"}, "sourceGroup": "2022-3-5", "templateFamily": "symmetric-integral"}, {"n": 8, "stem": "Both functions have domain the integers: \\(f(n)=n^2-2n-6\\) and \\(g(n)=n^2-4n+2\\). Which set is exactly the intersection of their ranges?", "opts": ["\\(\\{2\\}\\)", "The empty set", "Infinitely many integers", "\\(\\{-2,2\\}\\)", "\\(\\{0,2\\}\\)", "\\(\\{-7,-2,2\\}\\)"], "correct": 0, "sol": "<p>Complete squares: f(m)=(m−1)²−7 and g(n)=(n−2)²−2. A common value therefore requires u²−v²=5 for integers u,v. Thus (u−v)(u+v)=5. The integer factor pairs give |u|=3 and |v|=2. The common output is 9−7=4−2=2, and it is attained, for example by m=4,n=4. There are no other integer factor pairs.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 5(iii). Catalogue: Direct.</a></p>", "topic": "Number Theory / General algebra", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S024", "stepSource": {"year": 2024, "paper": "II", "part": "5(iii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-5", "templateFamily": "2024-2-5"}, {"n": 9, "stem": "Let u₁=1, \\(u_{2k}=u_k\\), and \\(u_{2k+1}=u_k+u_{k+1}\\) for k≥1. What is the greatest common divisor of u₂₀₂₀ and u₂₀₂₁?", "opts": ["2", "7", "3", "5", "1"], "correct": 4, "sol": "<p>For an even index, gcd(u₂ₖ,u₂ₖ₊₁)=gcd(uₖ,uₖ+uₖ₊₁)=gcd(uₖ,uₖ₊₁). For an odd index, gcd(u₂ₖ₊₁,u₂ₖ₊₂)=gcd(uₖ+uₖ₊₁,uₖ₊₁), with the same reduction. Repeating reduces any consecutive pair to (u₁,u₂)=(1,1). Therefore the requested greatest common divisor is 1, without needing to evaluate the large-index terms.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 8(ii). Catalogue: Direct.</a></p>", "topic": "Sequences and Series / Number Theory", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S091", "stepSource": {"year": 2020, "paper": "III", "part": "8(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"}, "sourceGroup": "2020-3-8", "templateFamily": "2020-3-8"}, {"n": 10, "stem": "What is the area between \\(y=3x^2-4x+1\\) and the x-axis for 0≤x≤1?", "opts": ["16/27", "8/27", "0", "4/27", "2/27"], "correct": 1, "sol": "<p>Factor the polynomial as (3x−1)(x−1). It is positive on [0,1/3] and negative on [1/3,1]. An antiderivative is F=x³−2x²+x, with F(0)=F(1)=0 and F(1/3)=4/27. The two unsigned pieces each have area 4/27, so the total is 8/27.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Integration", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "O002", "stepSource": {"original": true}, "sourceGroup": "O002", "templateFamily": "O002"}, {"n": 11, "stem": "A finite sequence of positive terms has property L when \\(u_{r-1}u_{r+1}\\le u_r^2\\) at every interior index. For which positive t does the sequence \\(1,t,6,t+1,2\\) have property L?", "opts": ["\\(\\sqrt6\\le t\\le(\\sqrt{145}-1)/2\\)", "\\(\\sqrt6\\le t\\le6\\)", "\\(0&lt;t\\le(\\sqrt{145}-1)/2\\)", "\\(2\\sqrt3-1\\le t\\le6\\)", "\\(2\\sqrt3-1\\le t\\le(\\sqrt{145}-1)/2\\)"], "correct": 4, "sol": "<p>The three conditions are t²≥6, t(t+1)≤36, and (t+1)²≥12. For t&gt;0 these require t≥√6, t≤(√145−1)/2, and t≥2√3−1. The latter lower bound is larger: (2√3−1)²−6=7−4√3&gt;0 since 49&gt;48. Intersecting the three intervals gives the answer.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper II, question 3(i). Catalogue: Direct.</a></p>", "topic": "Sequences and Series / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S082", "stepSource": {"year": 2020, "paper": "II", "part": "3(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%202.pdf"}, "sourceGroup": "2020-2-3", "templateFamily": "2020-2-3"}, {"n": 12, "stem": "Let F₁=F₂=1 and Fᵣ₊₂=Fᵣ₊₁+Fᵣ. You may use \\[\\sum_{r=1}^{\\infty}\\frac{F_r}{10^r}=\\frac{10}{89},\\qquad0&lt;\\sum_{r=7}^{\\infty}\\frac{F_r}{10^r}&lt;2\\cdot10^{-6}.\\] What are the first six digits after the decimal point in 1/89?", "opts": ["012358", "011234", "112358", "011236", "011238", "011235"], "correct": 5, "sol": "<p>The first six Fibonacci numbers are 1,1,2,3,5,8, so their weighted sum is 0.112358. The stated tail gives 0.112358&lt;10/89&lt;0.112360. Divide by ten: 0.0112358&lt;1/89&lt;0.0112360. Thus its first six decimal digits are 011235. The strict upper bound is important: the sixth digit does not round upwards when truncating.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 3(iii), digits. Catalogue: Supply.</a></p>", "topic": "Sequences and Series / Number Theory", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S062", "stepSource": {"year": 2022, "paper": "II", "part": "3(iii), digits", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"}, "sourceGroup": "2022-2-3", "templateFamily": "2022-2-3"}, {"n": 13, "stem": "A function equals 10x for x≤0, 2x² for 0≤x≤5, and 50 for x≥5. Which single formula represents it for every real x?", "opts": ["\\(x^2-|x(x-5)|-5|x-5|\\)", "\\(x^2-|x(x-5)|-5|x|+25\\)", "\\(x^2+|x(x-5)|-5|x-5|+25\\)", "\\(x^2-|x(x-5)|-5|x-5|+25\\)", "\\(x^2-|x(x-5)|+5|x-5|-25\\)"], "correct": 3, "sol": "<p>For the correct expression, when x≤0 the two moduli are x²−5x and 5−x, giving 10x. When 0≤x≤5 they are -x²+5x and 5−x, giving 2x². When x≥5 they are x²−5x and x−5, giving 50. Each requested formula is therefore recovered, including both endpoints.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper II, question 4(iv). Catalogue: Direct.</a></p>", "topic": "Functions and Graphs", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S064", "stepSource": {"year": 2022, "paper": "II", "part": "4(iv)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%202.pdf"}, "sourceGroup": "2022-2-4", "templateFamily": "modulus-piecewise"}, {"n": 14, "stem": "Real x,y,a satisfy \\[ay^3+2x^2y+3x=1,\\qquad4xy+3=0,\\qquad3ay^2+2x^2=0.\\] What is a?", "opts": ["\\(2/27\\)", "\\(-1/9\\)", "\\(-1/27\\)", "\\(-2/27\\)", "\\(-27/2\\)", "\\(-2/9\\)"], "correct": 3, "sol": "<p>The middle equation ensures x and y are nonzero and gives 2x²y=-3x/2. Multiplying the third by y gives ay³=−2x²y/3=x/2. Substitute both into the first: x/2−3x/2+3x=1, hence x=1/2. Then y=-3/2. Finally 3a·9/4+2·1/4=0, giving a=-2/27. This substitution also verifies existence, not merely a necessary coefficient relation.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 3(iii). Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S071", "stepSource": {"year": 2022, "paper": "III", "part": "3(iii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"}, "sourceGroup": "2022-3-3", "templateFamily": "2022-3-3"}, {"n": 15, "stem": "You are given \\[x^4-10x^2+12x-2=(x^2+\\sqrt2x-4-3\\sqrt2)(x^2-\\sqrt2x-4+3\\sqrt2).\\] What is the largest real root of the quartic?", "opts": ["\\((2\\sqrt3+\\sqrt6-\\sqrt2)/2\\)", "\\((\\sqrt6+\\sqrt2)/2\\)", "\\((2\\sqrt3+\\sqrt6+\\sqrt2)/2\\)", "\\((2\\sqrt3-\\sqrt6+\\sqrt2)/2\\)", "\\((3\\sqrt2+2)/2\\)"], "correct": 0, "sol": "<p>The first quadratic has discriminant 18+12√2=(2√3+√6)², and the second has discriminant 18−12√2=(2√3−√6)². Their larger roots are respectively (−√2+2√3+√6)/2 and (√2+2√3−√6)/2. The first exceeds the second by √6−√2&gt;0, so it is the largest of all four roots.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 4(ii), final solving stage. Catalogue: Supply.</a></p>", "topic": "General algebra / Surds", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S097", "stepSource": {"year": 2019, "paper": "I", "part": "4(ii), final solving stage", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-4", "templateFamily": "2019-1-4"}, {"n": 16, "stem": "A line of gradient m passes through (0,−1). For exactly which m does it meet y=x²+2x at two distinct points with positive x-coordinates?", "opts": ["m&gt;4", "m&lt;0 or m&gt;4", "m&gt;0", "m≥4", "0&lt;m&lt;4"], "correct": 0, "sol": "<p>Intersections satisfy x²+(2−m)x+1=0. Two distinct roots require (2−m)²−4=m(m−4)&gt;0. Their product is 1, so they have the same sign; both are positive exactly when their sum m−2 is positive. Combining m&lt;0 or m&gt;4 with m&gt;2 gives m&gt;4.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "O014", "stepSource": {"original": true}, "sourceGroup": "O014", "templateFamily": "O014"}, {"n": 17, "stem": "A horizontal line y=k, with k&gt;0, intersects a curve at precisely those real x satisfying \\[x^4+2(k^2-2)x^2+k^4-\\frac1{16}=0.\\] Let N(k) count distinct intersection points. For which positive k does N(k)=4?", "opts": ["\\(\\frac12\\le k&lt;\\frac{\\sqrt{65}}8\\)", "\\(\\frac12&lt;k\\le\\frac{\\sqrt{65}}8\\)", "\\(\\frac12&lt;k&lt;\\frac{\\sqrt{65}}8\\)", "\\(0&lt;k&lt;\\frac{\\sqrt{65}}8\\)", "\\(0&lt;k&lt;\\frac12\\)", "\\(k&gt;\\frac{\\sqrt{65}}8\\)"], "correct": 2, "sol": "<p>Set z=x². Four distinct x-values require two distinct positive roots in z. The quadratic discriminant is 4(65/16−4k²), so distinct roots require k²&lt;65/64. Their product is k⁴−1/16, which is positive exactly when k&gt;1/2. Their sum is 4−2k², positive throughout the resulting interval. At k=1/2 one z-root is zero, giving only three x-values; at the upper endpoint the z-roots coincide, giving two.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 7(ii)(a). Catalogue: Direct.</a></p>", "topic": "Functions and Graphs / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 5, "selectionId": "S026", "stepSource": {"year": 2024, "paper": "II", "part": "7(ii)(a)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-7", "templateFamily": "2024-2-7"}, {"n": 18, "stem": "How many ordered triples of positive integers satisfy \\(a^2+b^2+c^2=4abc\\)?", "opts": ["4", "1", "Infinitely many", "3", "0", "2"], "correct": 4, "sol": "<p>Modulo 4, each square is 0 or 1. Three such residues can sum to 0 modulo 4 only if all three are zero, so a,b,c are even. After writing a=2u,b=2v,c=2w, the equation becomes u²+v²+w²=8uvw. The same modulo-4 argument forces u,v,w even. Each repeated division doubles the coefficient on the right, which remains divisible by 4. A positive integer triple cannot undergo infinitely many such divisions, so none exists.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2022, Paper III, question 2(iv). Catalogue: Direct.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S070", "stepSource": {"year": 2022, "paper": "III", "part": "2(iv)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2022%20STEP%203.pdf"}, "sourceGroup": "2022-3-2", "templateFamily": "integer-descent"}, {"n": 19, "stem": "How many ordered pairs of primes (p,q) make \\(p^3+q^3+3pq^2\\) an integer cube? You may use that, if it equals n³, then \\(d=p+q-n\\) satisfies \\(0&lt;d&lt;\\min(p,q)\\). You may also use that an integer cube has the same remainder as its base on division by 3.", "opts": ["Infinitely many", "1", "2", "3", "0", "4"], "correct": 4, "sol": "<p>Reducing modulo 3 gives n≡p+q, so 3 divides d. Also \\((p+q)^3-n^3=3p^2q\\), so d divides 3p²q. Because d is smaller than both primes, the only possible value divisible by 3 is d=3, with p,q&gt;3. Substituting n=p+q−3 and expanding gives \\(p^2q=3[(p+q)^2-3(p+q)+3]\\). Thus 3 divides p²q, forcing one prime to be 3, a contradiction. If either prime is 2 or 3, the original bound on d already contradicts positive divisibility by 3.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 5(iii). Catalogue: Supply.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 7.5, "estimatedMinutes": 5, "selectionId": "S057", "stepSource": {"year": 2023, "paper": "III", "part": "5(iii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-5", "templateFamily": "2023-3-5"}, {"n": 20, "stem": "How many ordered quadruples of integers a&lt;b&lt;c&lt;d can satisfy \\(S(a)=S(b)=S(c)=S(d)=2001\\) and S(0)=2017 for some monic quartic S?", "opts": ["4", "5", "10", "8", "6"], "correct": 1, "sol": "<p>The factor theorem gives S(x)=2001+(x−a)(x−b)(x−c)(x−d), so abcd=16. All entries are nonzero signed powers of 2. Four distinct positive entries have product at least 1·2·4·8=64; the same holds for four negatives. Thus two are negative and two positive. The five increasing quadruples are (−8,−1,1,2), (−4,−2,1,2), (−4,−1,1,4), (−2,−1,1,8), (−2,−1,2,4). To see completeness, the absolute-value exponent pairs on each side are distinct nonnegative integers with total exponent 4; the possible splits are 1+3,2+2,3+1, giving 2+1+2 choices.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 5(iii)(b). Catalogue: Direct.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 6.5, "estimatedMinutes": 4.5, "selectionId": "S116", "stepSource": {"year": 2018, "paper": "I", "part": "5(iii)(b)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-5", "templateFamily": "2018-1-5"}], "standardMinutes": 75, "archived": true, "resumeArchived": true}, {"id": "steppractice07p1v1", "title": "STEP practice · Year 07 · Paper 1", "sub": "Applications of Mathematical Knowledge · STEP adaptations", "type": 1, "group": 6, "stepAdapted": true, "questions": [{"n": 1, "stem": "A bag contains 4 red and 3 blue counters. Three counters are drawn uniformly without replacement. Given that at least one is blue, what is the probability that exactly two are red?", "opts": ["24/31", "12/31", "3/5", "18/35", "18/31"], "correct": 4, "sol": "<p>There are 35 equally likely three-counter subsets. Four contain only red counters, so the conditioning event contains 31 subsets. Exactly two red and one blue can be chosen in C(4,2)·3=18 ways. Each is in the conditioning event, hence the conditional probability is 18/31.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Probability and Statistics", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "O008", "stepSource": {"original": true}, "sourceGroup": "O008", "templateFamily": "O008"}, {"n": 2, "stem": "Two people repeatedly toss independent coins, each with head probability p. They stop on the first round in which both show the same face. For a fixed positive integer n, what is the minimum, over 0≤p≤1, of the probability they have stopped by round n?", "opts": ["\\(2^{-n}\\)", "\\(1-2^{-n}\\)", "\\(1-(3/4)^n\\)", "\\(1-4^{-n}\\)", "\\(1/2\\)"], "correct": 1, "sol": "<p>A round fails to decide precisely when the coins differ, with probability 2p(1−p). Independence gives probability 1−[2p(1−p)]ⁿ of deciding by round n. Since 2p(1−p)=1/2−2(p−1/2)²≤1/2, this is at least 1−2⁻ⁿ. Equality occurs at p=1/2, proving it is the minimum.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 11(i). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S102", "stepSource": {"year": 2019, "paper": "I", "part": "11(i)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-11", "templateFamily": "2019-1-11"}, {"n": 3, "stem": "Five real numbers \\(a,b,1,-2,3\\) have sum zero and cube sum zero. If \\(a&gt;b\\), what are a and b?", "opts": ["\\(a=-1+\\sqrt5,\\ b=-1-\\sqrt5\\)", "\\(a=-1+\\sqrt2,\\ b=-1-\\sqrt2\\)", "\\(a=1+\\sqrt3,\\ b=1-\\sqrt3\\)", "\\(a=-1+\\sqrt3,\\ b=-1-\\sqrt3\\)", "\\(a=1,\\ b=-3\\)", "\\(a=2,\\ b=-4\\)"], "correct": 3, "sol": "<p>The linear condition gives a+b=-2. Since 1³+(-2)³+3³=20, we also have a³+b³=-20. Expand (a+b)³=a³+b³+3ab(a+b): -8=-20-6ab, so ab=-2. Hence a,b are the roots of t²+2t-2=0, namely -1±√3. The ordering chooses the plus sign for a. These satisfy both original sums.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper III, question 6(iv). Catalogue: Direct.</a></p>", "topic": "General algebra / Surds", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S018", "stepSource": {"year": 2025, "paper": "III", "part": "6(iv)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-3-6", "templateFamily": "2025-3-6"}, {"n": 4, "stem": "The line y=a²x and curve y=x(b−x)², where 0&lt;a&lt;b, have two nonzero intersections. What is the tangent to the curve at the one with smaller x-coordinate?", "opts": ["\\(y=a(2b-3a)x+2a(b-a)^2\\)", "\\(y=a(3a+2b)x-2a(b+a)^2\\)", "\\(y=a^2x\\)", "\\(y=a(3a-2b)x+2a(b-a)^2\\)", "\\(y=a(3a-2b)x+a(b-a)^2\\)"], "correct": 3, "sol": "<p>At a nonzero intersection (b−x)²=a², so the smaller x-coordinate is b−a and its y-coordinate is a²(b−a). Expand the curve as x³−2bx²+b²x, giving derivative 3x²−4bx+b². At x=b−a this is a(3a−2b). Substituting the point into y=mx+c gives c=2a(b−a)².</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 1, opening + tangent. Catalogue: Direct.</a></p>", "topic": "Differentiation / Geometry", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "S112", "stepSource": {"year": 2018, "paper": "I", "part": "1, opening + tangent", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-1", "templateFamily": "2018-1-1"}, {"n": 5, "stem": "For real numbers \\(a,b\\), \\(\\min(a,b)\\) denotes the smaller of them. What is the complete set of real solutions of \\[2\\min(x^2,2x)=5x-3?\\]", "opts": ["\\(\\{\\frac32,3\\}\\)", "\\(\\{1,3\\}\\)", "\\(\\{3\\}\\)", "\\(\\{1,\\frac32,3\\}\\)", "\\(\\{-1,\\frac32,3\\}\\)", "\\(\\{1,\\frac32\\}\\)"], "correct": 3, "sol": "<p>The quadratic is the smaller expression exactly when \\(x(x-2)\\le0\\), so \\(0\\le x\\le2\\). On this interval the equation is \\(2x^2-5x+3=(2x-3)(x-1)=0\\), giving 1 and 3/2. Outside it, the equation is \\(4x=5x-3\\), giving 3, which lies in the required region. All three values satisfy the original equation.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 1(ii). Catalogue: Direct.</a></p>", "topic": "General algebra / Functions and Graphs", "estimatedDifficulty": 5, "estimatedMinutes": 3, "selectionId": "S001", "stepSource": {"year": 2025, "paper": "II", "part": "1(ii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-1", "templateFamily": "modulus-piecewise"}, {"n": 6, "stem": "A and B play independent games, each won by A with probability p, where 0&lt;p&lt;1. They stop when one player has won two more games than the other. What is the probability that A wins the match?", "opts": ["\\(2p-p^2\\)", "\\(p^2\\)", "\\(p/(2-p)\\)", "\\(p\\)", "\\(p^2/[p^2+(1-p)^2]\\)"], "correct": 4, "sol": "<p>Group the games into consecutive pairs. AA ends the match for A, BB ends it for B, and either mixed pair restores equality. If P is A’s eventual winning probability, P=p²+2p(1−p)P. Thus P=p²/[1−2p(1−p)]=p²/[p²+(1−p)²]. Since the probability of a non-mixed pair is positive, the match ends with probability one.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 12(ii). Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 5.5, "estimatedMinutes": 3, "selectionId": "S079", "stepSource": {"year": 2021, "paper": "II", "part": "12(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"}, "sourceGroup": "2021-2-12", "templateFamily": "coin-stopping"}, {"n": 7, "stem": "How many distinct solutions does \\(4\\cos x\\cos2x\\cos3x=1\\) have in \\(0\\le x\\le\\pi\\)? You may use \\(2\\cos A\\cos B=\\cos(A+B)+\\cos(A-B)\\).", "opts": ["6", "4", "5", "8", "7"], "correct": 0, "sol": "<p>Twice applying the supplied identity gives the left side as 1+cos2x+cos4x+cos6x. Therefore cos4x(2cos2x+1)=0. The first factor gives π/8,3π/8,5π/8,7π/8; the second gives π/3,2π/3. These are six different values, with neither endpoint a solution.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2021, Paper II, question 1(i). Catalogue: Supply.</a></p>", "topic": "Trigonometry", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S074", "stepSource": {"year": 2021, "paper": "II", "part": "1(i)", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2021%20STEP%202.pdf"}, "sourceGroup": "2021-2-1", "templateFamily": "2021-2-1"}, {"n": 8, "stem": "Three positive consecutive terms of a geometric sequence have sum 13 and product 27. Which is the complete set of possible values of the next term?", "opts": ["{1/3,27}", "{27} only", "{1/9,81}", "{1,9}", "{3,27}"], "correct": 0, "sol": "<p>Write the terms a/r,a,ar with a,r&gt;0. Their product a³=27 gives a=3. Their sum gives r+1/r=10/3, so 3r²−10r+3=0 and r=3 or 1/3. The fourth term is ar²=3r², giving 27 or 1/3. Both orders of the first three terms are allowed.</p><p class=\"step-source\">Original TMUA-style completion question.</p>", "topic": "Sequences and Series", "estimatedDifficulty": 5.5, "estimatedMinutes": 3.5, "selectionId": "O006", "stepSource": {"original": true}, "sourceGroup": "O006", "templateFamily": "O006"}, {"n": 9, "stem": "You are given \\(109\\cdot9193=1002037=1001^2+6^2\\), \\(109=10^2+3^2\\), and \\[(ac+bd)^2+(ad-bc)^2=(a^2+b^2)(c^2+d^2).\\] Which pair of positive integers (t,u), t&lt;u, satisfies \\(t^2+u^2=9193\\)?", "opts": ["\\((37,88)\\)", "\\((17,94)\\)", "\\((27,92)\\)", "\\((47,84)\\)", "\\((28,91)\\)", "\\((26,93)\\)"], "correct": 2, "sol": "<p>Use a=1001,b=6,c=10,d=3. The identity gives 10028²+2943²=109²·9193. Both numbers are multiples of 109: 10028=109·92 and 2943=109·27. Divide by 109² to obtain 92²+27²=9193. Ordering gives (27,92). The supplied product structure avoids squaring every candidate from scratch.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 7(vi). Catalogue: Supply.</a></p>", "topic": "Number Theory / General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S049", "stepSource": {"year": 2023, "paper": "II", "part": "7(vi)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-7", "templateFamily": "2023-2-7"}, {"n": 10, "stem": "Consider \\(a^4+b^4=26a^2b^2\\). Let Nₘ be the number of ordered residue pairs (a mod m,b mod m) satisfying this congruence, with each residue in {0,…,m−1}. What is (N₃,N₅)?", "opts": ["(1,1)", "(5,5)", "(5,1)", "(1,5)", "(4,1)"], "correct": 2, "sol": "<p>Modulo 3, (0,0) works; a pair with exactly one zero fails. Every pair with neither zero works, since both sides are 2 modulo 3. Thus N₃=1+4=5. Modulo 5, each nonzero fourth power is 1. If both residues are nonzero, the left side is 2 while 26a²b² has residue 1 or 4, impossible. Exactly one zero also fails. Only (0,0) works, giving N₅=1.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper I, question 7(ii), divisibility issue. Catalogue: Supply.</a></p>", "topic": "Number Theory", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S101", "stepSource": {"year": 2019, "paper": "I", "part": "7(ii), divisibility issue", "catalogueType": "Supply", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%201.pdf"}, "sourceGroup": "2019-1-7", "templateFamily": "2019-1-7"}, {"n": 11, "stem": "Let a&gt;0. A line joins the distinct parabola points \\((2ap,ap^2)\\) and \\((2aq,aq^2)\\), where \\((p+q)^2=p^2q^2+6pq+5\\). A circle centred at (0,3a) is tangent to this line. What is its radius?", "opts": ["2a", "a√5", "3a", "It depends on p and q", "a√2", "a"], "correct": 0, "sol": "<p>The chord is y=(p+q)x/2−apq. Its distance from (0,3a) is \\(2a|pq+3|/\\sqrt{4+(p+q)^2}\\), found by a perpendicular line or right-triangle projection. The stated identity gives 4+(p+q)²=(pq+3)². The denominator is nonzero, so the distance simplifies to 2a, which is the tangent circle’s radius.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 1(i). Catalogue: Direct.</a></p>", "topic": "Geometry", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S051", "stepSource": {"year": 2023, "paper": "III", "part": "1(i)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-1", "templateFamily": "2023-3-1"}, {"n": 12, "stem": "Let m&gt;0 and c be real. The solution set of \\[\\sqrt{4x^2-5x+4}\\le|mx+c|\\] is exactly \\([3,\\infty)\\). What are m and c?", "opts": ["\\(m=2,c=-11\\)", "\\(m=2,c=11\\)", "\\(m=3,c=-2\\)", "\\(m=1,c=-2\\)", "\\(m=2,c=-1\\)", "\\(m=2,c=1\\)"], "correct": 4, "sol": "<p>The radicand is positive for all x because its discriminant is 25−64&lt;0. After squaring, \\((m^2-4)x^2+(2mc+5)x+c^2-4\\ge0\\). A nonzero quadratic cannot have exactly one half-line as its solution set, so m²=4 and m=2. To have boundary 3 requires 3(4c+5)+c²−4=0, or (c+1)(c+11)=0. For c=-1 the inequality is x−3≥0. For c=-11 it instead selects x≤3. Thus only c=-1 works.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper III, question 2(iii). Catalogue: Direct.</a></p>", "topic": "General algebra / Surds", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S033", "stepSource": {"year": 2024, "paper": "III", "part": "2(iii)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-3-2", "templateFamily": "2024-3-2"}, {"n": 13, "stem": "A continuous function g on [0,1] satisfies \\[\\int_0^1g(x)^2\\,dx=\\int_0^1g(\\sqrt x)\\,dx-\\frac13.\\] You may use \\(\\int_0^1g(\\sqrt x)\\,dx=2\\int_0^1xg(x)\\,dx\\). What is \\(\\int_0^1g(x)^3\\,dx\\)?", "opts": ["It is not determined", "1", "1/4", "1/3", "0", "1/2"], "correct": 2, "sol": "<p>Use the supplied identity and ∫₀¹x²dx=1/3 to obtain \\(\\int_0^1(g(x)-x)^2dx=0\\). The integrand is continuous and nonnegative. If it were positive at one point, continuity would make its integral positive over a small interval, a contradiction. Thus g(x)=x everywhere on [0,1]. The required integral is ∫₀¹x³dx=1/4.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper III, question 7(ii). Catalogue: Supply.</a></p>", "topic": "Integration", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S058", "stepSource": {"year": 2023, "paper": "III", "part": "7(ii)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-3-7", "templateFamily": "symmetric-integral"}, {"n": 14, "stem": "A polynomial P has degree N≥1, with P(1)=…=P(N)=1 and P(N+1)=2. What is P(N+2)+P(N+3)?", "opts": ["\\(2N+5\\)", "\\((N+2)(N+3)/2\\)", "\\((N^2+5N+4)/2\\)", "\\((N^2+5N+8)/2\\)", "\\((N^2+3N+4)/2\\)"], "correct": 3, "sol": "<p>By the factor theorem P(x)−1=c(x−1)…(x−N). At x=N+1 the product is N!, so c=1/N!. Hence P(N+2)=1+(N+1)=N+2 and P(N+3)=1+(N+2)(N+1)/2. Adding yields (N²+5N+8)/2.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2018, Paper I, question 5(ii). Catalogue: Direct.</a></p>", "topic": "General algebra", "estimatedDifficulty": 6, "estimatedMinutes": 3.5, "selectionId": "S114", "stepSource": {"year": 2018, "paper": "I", "part": "5(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2018%20STEP%201.pdf"}, "sourceGroup": "2018-1-5", "templateFamily": "2018-1-5"}, {"n": 15, "stem": "A and B independently toss a coin with head probability p until their first heads. Write q=1−p, where 0&lt;p&lt;1, and let U be the absolute difference between their toss counts. Which gives P(U=0) and P(U=u) for integer u≥1?", "opts": ["\\(p/(1+q),\\ pq^u/(1+q)\\)", "\\(p/(1+q),\\ 2pq^u/(1+q)\\)", "\\(p^2,\\ 2pq^u\\)", "\\(2p/(1+q),\\ 2pq^u/(1+q)\\)", "\\(p/(1-q),\\ 2pq^u/(1-q)\\)"], "correct": 1, "sol": "<p>For equality at count k the probability is p²q²ᵏ⁻². Summing the geometric series gives p²/(1−q²)=p/(1+q). For difference u&gt;0 there are two disjoint orders; each has sum p²qᵘ/(1−q²). Doubling gives 2pqᵘ/(1+q). At u=0 the two orders coincide and must not be doubled.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2020, Paper III, question 12(ii), U. Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S094", "stepSource": {"year": 2020, "paper": "III", "part": "12(ii), U", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2020%20STEP%203.pdf"}, "sourceGroup": "2020-3-12", "templateFamily": "2020-3-12"}, {"n": 16, "stem": "Four players independently choose a uniformly random integer from 1 to n, where n≥3. There is a winner only if one player’s number is strictly smaller than each of the other three. What is the probability that the game has a winner? You may use \\(\\sum_{r=1}^m r^3=m^2(m+1)^2/4\\).", "opts": ["\\((n-1)^2/(4n^2)\\)", "\\((n-1)^2/n^2\\)", "\\((n-1)/n\\)", "\\((n-1)(n-2)/n^2\\)", "\\((n-1)^3/n^3\\)", "\\(1-1/n^3\\)"], "correct": 1, "sol": "<p>For one named player to win with number a, its probability is (1/n)((n−a)/n)³. Sum over a=1,…,n−1. The events that the four players win are disjoint, so multiply this sum by 4. This gives \\(4n^{-4}\\sum_{r=1}^{n-1}r^3=4n^{-4}(n-1)^2n^2/4=(n-1)^2/n^2\\). Ties at the minimum correctly contribute no winner.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 12(i), four players. Catalogue: Direct.</a></p>", "topic": "Probability and Statistics", "estimatedDifficulty": 6, "estimatedMinutes": 4, "selectionId": "S029", "stepSource": {"year": 2024, "paper": "II", "part": "12(i), four players", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-12", "templateFamily": "2024-2-12"}, {"n": 17, "stem": "Real numbers x,y,z satisfy \\[y=\\frac{2x}{1-x^2},\\quad z=\\frac{2y}{1-y^2},\\quad x=\\frac{2z}{1-z^2},\\] with every denominator nonzero. You may use \\(\\tan(2t)=2\\tan t/(1-\\tan^2t)\\). How many ordered triples (x,y,z) satisfy the system?", "opts": ["6", "7", "9", "8", "14", "3"], "correct": 1, "sol": "<p>Write x=tan α, with -π/2&lt;α&lt;π/2. The equations give y=tan 2α,z=tan 4α and tan 8α=tan α. Thus 7α=kπ, with k=-3,…,3. None of these seven starting values or their iterates has tangent ±1: that would require a multiple of π/7 to be an odd multiple of π/4. The relevant tangents are finite as well. Each of the seven x-values determines exactly one ordered triple.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/707102-2023-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2023, Paper II, question 2(i). Catalogue: Supply.</a></p>", "topic": "Trigonometry / Sequences and Series", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S040", "stepSource": {"year": 2023, "paper": "II", "part": "2(i)", "catalogueType": "Supply", "url": "https://www.ocr.org.uk/Images/707102-2023-past-papers.zip"}, "sourceGroup": "2023-2-2", "templateFamily": "trig-iteration"}, {"n": 18, "stem": "Let \\(k&gt;0\\) and \\(r&gt;0\\). For which choices of \\(a,k,r\\) does the circle \\[x^2+(y-a)^2=r^2\\] touch the parabola \\(x^2=2ky\\) at two distinct points?", "opts": ["\\(a&lt;k\\) and \\(r^2=k(2a-k)\\)", "\\(a&gt;k/2\\) and \\(r^2=k(2a-k)\\)", "\\(a&gt;k\\) and \\(r^2=2ak\\)", "\\(a\\ge k\\) and \\(r^2=k(2a-k)\\)", "\\(a&gt;k\\) and \\(r^2=k(2a-k)\\)", "\\(a&gt;0\\) and \\(r^2=a^2+k^2\\)"], "correct": 4, "sol": "<p>Substituting x²=2ky gives \\(y^2+2(k-a)y+a^2-r^2=0\\). Two symmetric tangencies require one repeated y-value, so its discriminant vanishes: r²=2ak-k². The repeated value is y=a-k, with x²=2k(a-k). Thus two distinct points require a&gt;k; equality gives only the vertex. Conversely the substituted equation is then \\((y-a+k)^2=0\\), yielding two contacts, with matching tangent slopes from the circle radius or the repeated-intersection condition.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/750486-2025-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2025, Paper II, question 6(i). Catalogue: Direct.</a></p>", "topic": "Geometry / General algebra", "estimatedDifficulty": 6.5, "estimatedMinutes": 4, "selectionId": "S006", "stepSource": {"year": 2025, "paper": "II", "part": "6(i)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/750486-2025-past-papers.zip"}, "sourceGroup": "2025-2-6", "templateFamily": "2025-2-6"}, {"n": 19, "stem": "For integer inputs, define \\(f(n)=n^3-3n^2+7n\\) and \\(g(n)=n^3+4n-6\\). Which set consists of exactly the integers attained by both functions? You may use \\(u^2+uv+v^2\\ge0\\) for all real u,v.", "opts": ["\\(\\{-11,10\\}\\)", "\\(\\{10\\}\\)", "Infinitely many integers", "The empty set", "\\(\\{-11\\}\\)", "\\(\\{-6,5\\}\\)"], "correct": 0, "sol": "<p>Put u=m−1 and v=n. Then f(m)=u³+4u+5, so equality requires \\((v-u)(v^2+uv+u^2+4)=11\\). The second factor is an integer at least 4. As 11 is prime, the only possibility is v−u=1 and the second factor 11. Substituting v=u+1 gives 3u²+3u+5=11, hence u=1 or -2. The common outputs are 10 and -11. Both pairs are integral and satisfy the original equations.</p><p class=\"step-source\"><a href=\"https://www.ocr.org.uk/Images/725753-2024-past-papers.zip\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2024, Paper II, question 5(iv). Catalogue: Direct.</a></p>", "topic": "Number Theory / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 5, "selectionId": "S025", "stepSource": {"year": 2024, "paper": "II", "part": "5(iv)", "catalogueType": "Direct", "url": "https://www.ocr.org.uk/Images/725753-2024-past-papers.zip"}, "sourceGroup": "2024-2-5", "templateFamily": "2024-2-5"}, {"n": 20, "stem": "Let f(x)=x²−px+q, with real p,q. You may use \\[f(f(x))-x=[f(x)-x]\\,[x^2+(1-p)x+q-p+1].\\] For which p,q does iteration of f have at least one real constant sequence, but no real nonconstant sequence of period two?", "opts": ["\\((p+1)^2-4q&lt;0\\)", "\\((p+1)^2-4q&gt;4\\)", "\\(0\\le(p+1)^2-4q\\le4\\)", "\\(0&lt;(p-1)^2-4q&lt;4\\)", "\\((p+1)^2-4q=0\\) only"], "correct": 2, "sol": "<p>Fixed points solve x²−(p+1)x+q=0, so exist exactly when D=(p+1)²−4q≥0. The second factor has discriminant D−4. For D&lt;4 it has no real roots; at D=4 it has a repeated root which is also fixed. For D&gt;4 its two distinct roots are not fixed: a common root would be (p−1)/2, and substitution forces D=4. Thus nonconstant two-cycles exist exactly when D&gt;4. Combining the conditions gives 0≤D≤4.</p><p class=\"step-source\"><a href=\"https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Adapted from STEP 2019, Paper II, question 5(ii). Catalogue: Direct.</a></p>", "topic": "Sequences and Series / General algebra", "estimatedDifficulty": 7, "estimatedMinutes": 4.5, "selectionId": "S107", "stepSource": {"year": 2019, "paper": "II", "part": "5(ii)", "catalogueType": "Direct", "url": "https://pmt.physicsandmathstutor.com/download/Admissions/STEP/Papers/2019%20STEP%202.pdf"}, "sourceGroup": "2019-2-5", "templateFamily": "two-cycle"}], "standardMinutes": 75, "archived": true, "resumeArchived": true}];
