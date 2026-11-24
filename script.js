const questions = [
  {
    q: "The term psychology comes from the Greek words psyche and logos. Which interpretation best reflects its historical roots and its modern scientific meaning?",
    o: ["The study of the soul alone", "The scientific study of behavior and underlying mental processes", "The study of brain anatomy only", "The prediction of people's future actions"],
    a: 1,
    e: "Psyche historically referred to mind, soul, or spirit, while logos meant study or knowledge. Modern psychology is defined scientifically as the study of behavior and underlying mental processes."
  },
  {
    q: "A researcher records how often students arrive late, where lateness occurs, and under what circumstances. Which goal of psychology is being demonstrated most directly?",
    o: ["Explanation", "Prediction", "Description", "Control"],
    a: 2,
    e: "Description involves observing behavior and identifying what happens, where, to whom, and under what circumstances."
  },
  {
    q: "A psychologist discovers that students who sleep fewer hours tend to report greater difficulty concentrating. The psychologist investigates why this relationship exists. Which goal is central?",
    o: ["Description", "Explanation", "Control", "Classification"],
    a: 1,
    e: "Explanation seeks to identify the reasons or causes underlying behavior and mental processes."
  },
  {
    q: "After studying a pattern between examination anxiety and performance, a psychologist estimates which students may experience severe anxiety next semester. This is an example of:",
    o: ["Description", "Explanation", "Prediction", "Control"],
    a: 2,
    e: "Prediction uses observed patterns and explanations to anticipate future behavior or mental processes."
  },
  {
    q: "A psychologist develops and evaluates an intervention intended to reduce destructive classroom behavior. Which goal is most directly involved?",
    o: ["Description", "Explanation", "Prediction", "Control"],
    a: 3,
    e: "Control involves influencing, modifying, or changing behavior in a planned way."
  },
  {
    q: "Which statement best explains why psychology is considered a science rather than simply common sense?",
    o: ["It studies only things that can be seen directly", "It relies on systematic procedures and empirical evidence", "It accepts explanations based on personal experience", "It avoids testing ideas because behavior is complex"],
    a: 1,
    e: "Psychology uses scientific methods and empirical data rather than relying only on common sense or personal opinion."
  },
  {
    q: "A student says that thinking and remembering are behaviors because they are activities of the mind. According to the chapter's terminology, these are best classified as:",
    o: ["Overt actions", "External reactions", "Mental processes or covert activities", "Physiological structures"],
    a: 2,
    e: "Thinking, feeling, and remembering are internal, covert mental processes. Overt behavior refers to outward observable actions."
  },
  {
    q: "Which example is an overt behavior rather than a covert mental process?",
    o: ["Remembering a childhood event", "Feeling disappointed", "Planning an answer silently", "Raising a hand to ask a question"],
    a: 3,
    e: "Raising a hand is an outward, observable action. The other examples are internal mental activities."
  },
  {
    q: "Which historical figure is most closely associated with establishing the first psychology laboratory in Leipzig in 1879?",
    o: ["Sigmund Freud", "Wilhelm Wundt", "William James", "John B. Watson"],
    a: 1,
    e: "Wilhelm Wundt is associated with the establishment of the first psychology laboratory in Leipzig in 1879, a major milestone in psychology's development as a science."
  },
  {
    q: "A psychologist attempts to analyze conscious experience by breaking it into its basic elements. Which early school does this approach most closely represent?",
    o: ["Functionalism", "Structuralism", "Behaviorism", "Humanism"],
    a: 1,
    e: "Structuralism sought to analyze conscious experience into basic elements or components."
  },
  {
    q: "A researcher asks how remembering, attention, and perception help people adapt to everyday demands. Which early school is most consistent with this question?",
    o: ["Structuralism", "Functionalism", "Psychoanalysis", "Behaviorism"],
    a: 1,
    e: "Functionalism emphasized the functions of mental processes and how they help organisms adapt to their environments."
  },
  {
    q: "Which distinction between structuralism and functionalism is most accurate?",
    o: ["Structuralism studied unconscious conflicts; functionalism studied reinforcement", "Structuralism examined components of consciousness; functionalism examined the purposes of mental activity", "Structuralism focused on observable behavior; functionalism rejected adaptation", "Both schools focused exclusively on biological inheritance"],
    a: 1,
    e: "Structuralism emphasized the elements of conscious experience, while functionalism emphasized what mental processes do and how they aid adaptation."
  },
  {
    q: "A psychologist explains a person's behavior by examining unconscious conflicts and experiences from early childhood. Which perspective is being used?",
    o: ["Behavioral", "Psychoanalytic", "Humanistic", "Cognitive"],
    a: 1,
    e: "The psychoanalytic perspective, associated with Freud, emphasizes unconscious processes and conflicts, including the influence of early experiences."
  },
  {
    q: "A researcher studies how rewards and punishments influence a child's observable actions, without making assumptions about hidden thoughts. This approach is most consistent with:",
    o: ["Behaviorism", "Humanism", "Psychoanalysis", "Structuralism"],
    a: 0,
    e: "Behaviorism emphasizes observable behavior and the ways environmental consequences influence it."
  },
  {
    q: "A counselor emphasizes personal choice, individual potential, self-growth, and the ability to improve. Which perspective is most clearly reflected?",
    o: ["Biological", "Behavioral", "Humanistic", "Psychoanalytic"],
    a: 2,
    e: "Humanistic psychology emphasizes personal choice, conscious experience, individual potential, and self-development."
  },
  {
    q: "A psychologist investigates how students encode, organize, store, and retrieve information while studying. Which modern perspective is most relevant?",
    o: ["Cognitive", "Behavioral", "Psychoanalytic", "Structuralist"],
    a: 0,
    e: "The cognitive perspective focuses on mental processes such as attention, memory, thinking, language, and problem solving."
  },
  {
    q: "A psychologist explains aggressive behavior by investigating inherited characteristics, brain activity, and chemical processes. Which perspective is being emphasized?",
    o: ["Humanistic", "Biological", "Cognitive", "Functionalist"],
    a: 1,
    e: "The biological perspective examines how biological factors, including the brain and inherited characteristics, relate to behavior."
  },
  {
    q: "Two psychologists explain the same behavior differently: one emphasizes unconscious conflict, while the other emphasizes reinforcement. What best accounts for their disagreement?",
    o: ["They are studying different species", "They use different theoretical perspectives and assumptions", "One must be using an unscientific method", "Psychology has no shared subject matter"],
    a: 1,
    e: "Different perspectives use different assumptions and emphasize different explanations for behavior and mental processes."
  },
  {
    q: "A psychologist studies physical, cognitive, and psychological changes from infancy through old age. Which subfield is most directly involved?",
    o: ["Social psychology", "Developmental psychology", "Forensic psychology", "Industrial psychology"],
    a: 1,
    e: "Developmental psychology examines physical, cognitive, and psychological changes across the lifespan."
  },
  {
    q: "A researcher investigates stable characteristics that distinguish one individual from another across situations. Which subfield is the best fit?",
    o: ["Personality psychology", "Educational psychology", "Health psychology", "Cross-cultural psychology"],
    a: 0,
    e: "Personality psychology focuses on relatively enduring traits and characteristics of individuals."
  },
  {
    q: "A study examines how peer pressure, group membership, attitudes, and social perception influence an individual's decisions. Which field is most relevant?",
    o: ["Developmental psychology", "Social psychology", "Clinical psychology", "Biological psychology"],
    a: 1,
    e: "Social psychology deals with social interactions, relationships, social perception, and attitudes."
  },
  {
    q: "A researcher compares emotional expression and social attitudes across several cultures to determine which patterns are universal. This is primarily:",
    o: ["Industrial psychology", "Cross-cultural psychology", "Forensic psychology", "Personality psychology"],
    a: 1,
    e: "Cross-cultural psychology compares psychological processes across cultures and examines whether they are universal or culture-specific."
  },
  {
    q: "A company hires a psychologist to improve employee productivity, workplace conditions, and organizational performance. Which subfield is most directly applied?",
    o: ["Forensic psychology", "Industrial psychology", "Developmental psychology", "Clinical psychology"],
    a: 1,
    e: "Industrial psychology applies psychological principles in industries and organizations to improve productivity."
  },
  {
    q: "A psychologist helps improve the legal system by examining testimony, police procedures, and psychological evidence. Which subfield is involved?",
    o: ["Educational psychology", "Forensic psychology", "Health psychology", "Counseling psychology"],
    a: 1,
    e: "Forensic psychology applies psychological principles to the legal system, including areas such as police work and testimony."
  },
  {
    q: "A specialist applies psychological theories to curriculum design, teaching practices, and academic administration. Which field is this?",
    o: ["Educational psychology", "Social psychology", "Forensic psychology", "Personality psychology"],
    a: 0,
    e: "Educational psychology applies psychological principles to improve education, including curriculum, teaching, and administration."
  },
  {
    q: "Which distinction between clinical psychology and counseling psychology best matches the chapter?",
    o: ["Clinical psychology focuses only on children, while counseling psychology focuses only on adults", "Clinical psychology addresses prevention, diagnosis, and treatment of psychological disorders; counseling psychology generally helps with less severe problems", "Counseling psychology treats severe disorders, while clinical psychology avoids diagnosis", "They are described as having entirely unrelated concerns"],
    a: 1,
    e: "The chapter describes clinical psychology as concerned with prevention, diagnosis, and treatment of psychological disorders, while counseling psychology generally helps people with less severe problems."
  },
  {
    q: "A researcher observes one individual with an unusual behavior in great detail over an extended period. Which method is being used?",
    o: ["Survey", "Case study", "Experiment", "Correlational research"],
    a: 1,
    e: "A case study provides an in-depth investigation of an individual or a small number of cases."
  },
  {
    q: "A psychologist collects answers to the same carefully prepared questions from 1,000 university students. Which method is most appropriate?",
    o: ["Case study", "Survey", "Naturalistic observation", "Experiment"],
    a: 1,
    e: "Surveys collect information from large groups using common questions. Representative sampling is important."
  },
  {
    q: "A researcher watches children playing in a schoolyard without manipulating their environment. Which research approach is most consistent with this procedure?",
    o: ["Naturalistic observation", "Experimental research", "Correlational research", "Clinical diagnosis"],
    a: 0,
    e: "Naturalistic observation involves observing behavior in its usual setting without deliberately manipulating the situation."
  },
  {
    q: "A study finds that students who spend more time studying tend to achieve higher examination scores. What can the researcher safely conclude from a correlation alone?",
    o: ["Studying time definitely causes higher scores", "Higher scores definitely cause more studying", "The variables are related, but causation is not established", "There is no relationship between the variables"],
    a: 2,
    e: "Correlation describes the strength and direction of a relationship but does not, by itself, establish cause and effect."
  },
  {
    q: "A researcher manipulates the number of students in a class and measures their examination performance. What is the independent variable?",
    o: ["Examination performance", "Class size", "Students' motivation", "The research conclusion"],
    a: 1,
    e: "The independent variable is the factor manipulated by the researcher. Here, it is class size."
  },
  {
    q: "In the same experiment, students' examination scores are recorded after class size is changed. The scores are the:",
    o: ["Independent variable", "Dependent variable", "Control group", "Research hypothesis"],
    a: 1,
    e: "The dependent variable is the measured outcome. Here, it is students' examination performance."
  },
  {
    q: "In an experiment, one group receives a new teaching method while another group receives the usual method. The second group primarily serves as:",
    o: ["The independent variable", "The control group", "The dependent variable", "The research hypothesis"],
    a: 1,
    e: "The control group provides a comparison or baseline and does not receive the manipulated condition."
  },
  {
    q: "Why is random assignment to experimental and control groups useful?",
    o: ["It guarantees that every participant behaves identically", "It helps reduce systematic pre-existing differences between groups", "It proves the hypothesis before data are collected", "It removes the need to measure outcomes"],
    a: 1,
    e: "Random assignment helps distribute participant characteristics across groups, reducing the likelihood that group differences explain the results."
  },
  {
    q: "A researcher finds a strong relationship between two variables and claims that one causes the other. What is the main weakness in this conclusion?",
    o: ["Correlational research cannot measure relationships", "A relationship alone does not establish cause and effect", "Only surveys can identify variables", "Correlation is the same as random assignment"],
    a: 1,
    e: "A correlation does not prove causation. Other variables or alternative explanations may account for the relationship."
  },
  {
    q: "A researcher wants to investigate a sensitive private behavior that cannot easily be observed directly in public. Which method may be particularly useful?",
    o: ["Survey", "Laboratory observation only", "Case study of a public event", "Manipulation without measurement"],
    a: 0,
    e: "The chapter notes that surveys can be useful for obtaining information about private or covert behaviors."
  },
  {
    q: "A survey is sent only to students from one department, but the researcher uses the results to make claims about the entire university. What is the main methodological concern?",
    o: ["The sample may not represent the population", "The study has too many dependent variables", "The survey automatically proves causation", "The research must be an experiment"],
    a: 0,
    e: "A survey needs a carefully selected representative sample if its findings are to be generalized to a larger population."
  },
  {
    q: "A researcher develops a tentative, testable statement about the relationship between class size and performance before collecting data. This statement is a:",
    o: ["Conclusion", "Hypothesis", "Population", "Case study"],
    a: 1,
    e: "A hypothesis is a tentative, testable explanation or prediction that guides a scientific investigation."
  },
  {
    q: "Which sequence best represents the broad logic of scientific research?",
    o: ["Conclusion, hypothesis, question, data collection, observation", "Identify a problem or question, develop a hypothesis, collect data, analyze results, draw conclusions", "Collect data, select a conclusion, invent a hypothesis, identify a question", "Choose a result, manipulate the evidence, publish the claim"],
    a: 1,
    e: "Scientific research proceeds systematically from a question or problem to a hypothesis, evidence gathering, analysis, and conclusions."
  },
  {
    q: "A psychologist's expectations unintentionally influence how participants are treated, affecting their responses. This illustrates the importance of controlling:",
    o: ["Researcher and participant bias", "The chapter title", "The number of psychological subfields", "The historical meaning of psyche"],
    a: 0,
    e: "The chapter cautions that expectations and biases from researchers and participants can affect experimental results."
  },
  {
    q: "A researcher wants to establish whether a new study strategy causes improved performance rather than merely being associated with it. Which design is most suitable?",
    o: ["A correlational study only", "A survey without comparison groups", "An experiment with manipulated conditions and measured outcomes", "A descriptive report of one student's opinion"],
    a: 2,
    e: "Experimental research is designed to investigate cause-and-effect relationships by manipulating an independent variable and measuring a dependent variable."
  }
];

const questionsContainer = document.getElementById("questions");
const quizForm = document.getElementById("quizForm");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const results = document.getElementById("results");

let submitted = false;

function renderQuestions() {
  questionsContainer.innerHTML = "";

  questions.forEach((question, index) => {
    const card = document.createElement("section");
    card.className = "question-card";
    card.id = `question-${index}`;

    const heading = document.createElement("div");
    heading.className = "question-heading";

    const number = document.createElement("div");
    number.className = "question-number";
    number.textContent = index + 1;

    const questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.textContent = question.q;

    heading.append(number, questionText);
    card.appendChild(heading);

    const options = document.createElement("div");
    options.className = "options";

    question.o.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";
      label.dataset.option = optionIndex;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = optionIndex;

      const text = document.createElement("span");
      text.textContent = `${String.fromCharCode(65 + optionIndex)}. ${option}`;

      label.append(input, text);
      options.appendChild(label);
    });

    card.appendChild(options);
    questionsContainer.appendChild(card);
  });
}

function updateProgress() {
  const answered = questions.filter((_, index) =>
    document.querySelector(`input[name="question-${index}"]:checked`)
  ).length;

  progressText.textContent = `${answered} / ${questions.length} answered`;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;

  const message = document.getElementById("completionMessage");
  message.textContent = answered === questions.length
    ? "All questions answered. You are ready to submit!"
    : `${questions.length - answered} question(s) remaining.`;
}

function getSelectedAnswer(index) {
  const selected = document.querySelector(
    `input[name="question-${index}"]:checked`
  );
  return selected ? Number(selected.value) : null;
}

function submitExam(event) {
  event.preventDefault();

  if (submitted) return;

  const unanswered = questions.filter((_, index) =>
    getSelectedAnswer(index) === null
  ).length;

  if (unanswered > 0) {
    const proceed = confirm(
      `You have ${unanswered} unanswered question(s). Submit anyway?`
    );
    if (!proceed) return;
  }

  let score = 0;

  questions.forEach((question, index) => {
    const selected = getSelectedAnswer(index);
    const card = document.getElementById(`question-${index}`);
    const labels = card.querySelectorAll(".option");

    labels.forEach((label, optionIndex) => {
      const input = label.querySelector("input");
      input.disabled = true;

      if (optionIndex === question.a) {
        label.classList.add("correct-answer");
      }

      if (selected === optionIndex && selected !== question.a) {
        label.classList.add("wrong-answer");
      }
    });

    if (selected === question.a) score++;

    const feedback = document.createElement("div");
    feedback.className = `feedback ${
      selected === question.a ? "correct" : "incorrect"
    }`;

    const correctLetter = String.fromCharCode(65 + question.a);

    feedback.innerHTML = `
      <strong>${selected === question.a ? "Correct!" : "Incorrect."}</strong>
      <br>
      Correct answer: ${correctLetter}. ${question.o[question.a]}
      <br>
      ${question.e}
    `;

    card.appendChild(feedback);
  });

  submitted = true;

  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById("scorePercent").textContent = `${percentage}%`;
  document.getElementById("scoreDetails").textContent =
    `You scored ${score} out of ${questions.length} marks.`;

  let message;

  if (percentage >= 90) {
    message = "Outstanding performance!";
  } else if (percentage >= 75) {
    message = "Very good work!";
  } else if (percentage >= 60) {
    message = "Good effort. Keep improving!";
  } else if (percentage >= 50) {
    message = "You are making progress. Review the explanations.";
  } else {
    message = "More revision is recommended. Try again!";
  }

  document.getElementById("resultMessage").textContent = message;

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });

  document.querySelector(".primary-btn[type='submit']").disabled = true;
}

function resetExam() {
  const confirmed = confirm("Are you sure you want to reset the exam?");
  if (!confirmed) return;

  submitted = false;
  quizForm.reset();
  results.hidden = true;

  document.querySelectorAll(".feedback").forEach(element => element.remove());
  document.querySelectorAll(".option").forEach(label => {
    label.classList.remove("correct-answer", "wrong-answer");
  });
  document.querySelectorAll(".option input").forEach(input => {
    input.disabled = false;
  });

  document.querySelector(".primary-btn[type='submit']").disabled = false;

  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function reviewAnswers() {
  document.getElementById("question-0").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function retryExam() {
  resetExam();
}

quizForm.addEventListener("change", updateProgress);
quizForm.addEventListener("submit", submitExam);

document.getElementById("resetBtn").addEventListener("click", resetExam);
document.getElementById("reviewBtn").addEventListener("click", reviewAnswers);
document.getElementById("retryBtn").addEventListener("click", retryExam);

renderQuestions();
updateProgress();