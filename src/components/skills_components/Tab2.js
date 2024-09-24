import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg7 from "../../assets/img/project-img7.png";
import projImg8 from "../../assets/img/project-img8.png";
import projImg9 from "../../assets/img/project-img9.png";
import projImg10 from "../../assets/img/project-img10.png";
export default
[
  {
    title: "POS Tagging",
    technologies: "Python, Nlp Libraries, HMM & RNN",
    description:"This project is about Part-of-Speech (POS) tagging using Hidden Markov Models (HMM) for probabilistic tagging and Recurrent Neural Network (RNN) with Long Short-Term Memory (LSTM) for context analysis. The models exhibit remarkable accuracy, achieving 97% in assigning POS tags to words. HMM involves observations and hidden states with start and transition probabilities. In contrast, the RNN model, comprising Input, Embedding, LSTM, Dense, and Activation layers. Each sentence is padded and transformed into an np array for RNN input, emphasizing its ability to interpret words as separate inputs, enhancing contextual understanding.",
    imgUrl: projImg5,
    flag:0
  },
    {
      title: "Real-Time Object Detection",
      technologies: "Python & OpenCV",
      description:"This project focuses on a real-time video object detection system using Python and OpenCV, achieving a high accuracy of around 95%. The system adeptly identifies a diverse set of 72 object classes, including phones, cars, and persons, leveraging specific features like color, weight, shape, and size for precise detection. The implementation showcases the fusion of computer vision and machine learning to create a robust and versatile solution for object recognition in dynamic video streams.",
      imgUrl: projImg7,
      flag:0
    },
    {
      title: "SemEval 2010 - Task 8",
      technologies: "Python, Nlp Libraries & Bi-LSTM ",
      description:"This project employs a Bidirectional Long Short-Term Memory (Bi-LSTM) model for SemEval, involving text preparation via tokenization and padding. The model is trained on a dataset of 10,000 contextual sentences, with a focus on evaluating semantic analysis performance. Key challenges addressed include mitigating overfitting through hyperparameter tuning, determining optimal settings for embedding size, dropout, and vocabulary size. Despite occasional struggles in learning specific word relations resulting in a 10% misclassification rate, the Bi-LSTM demonstrates robust performance, achieving a notable 90% accuracy in classifying sentences based on semantic relations. ",
      imgUrl: projImg4,
      flag:0
    },
    {
      title: "OCR And Text Recognition For Assisting Visually Impaired People Using Android Smartphone",
      technologies: "Java & Android Studios",
      description:"This Java-based mobile application, developed in Android Studio, utilizes Google API for Optical Character Recognition (OCR) to seamlessly extract text from captured images. The extracted text then undergoes transformation through a text-to-speech engine, converting it into an audio format. This innovative integration of Google's OCR technology enhances the app's accuracy in reading text aloud, making it an invaluable tool for accessibility. By combining advanced image processing with a robust text conversion engine, the application provides an inclusive solution, catering to visually impaired users and exemplifying the potential of cutting-edge technologies in fostering a more accessible digital environment.",
      imgUrl: projImg8,
      flag:0
    },
    {
      title: "Tenzies App",
      technologies: "React, CSS & Node",
      description:"The Tenzies Games project, implemented in ReactJS, offers a thrilling and fast-paced gaming experience where players race to roll a specific combination using ten dice. Leveraging functional components and React Hooks, the application ensures efficient behavior management. Players can freeze dice, perform combinations, and track rolls and time dynamically. The game's conclusion is adorned with winning decorations using CSS styles. With a responsive and dynamic design, this ReactJS-powered project not only provides entertainment but also showcases the versatility and interactivity achievable through modern web development technologies.",
      imgUrl: projImg9,
      flag:0
    },
    {
      title: "Quiz App",
      technologies: "React, CSS & Node",
      description:"Quizzical, a React-based trivia application, elevates the Scrimba solo project with an intuitive start menu, enabling users to personalize quiz parameters. Utilizing styled-components, React, JSX, and CSS, the app seamlessly integrates these technologies. Overcoming challenges like synchronizing data for diverse configuration options, implementing a 'Play Again' feature, and leveraging the Fisher-Yates shuffle algorithm for answer randomization, the project showcases technical prowess. Beyond this, it enriches the user experience by offering various categories, difficulty levels, and the flexibility to display different question quantities (e.g., 5, 10, 15, or 20), enhancing its versatility and engagement.",
      imgUrl: projImg10,
      flag:0
    }

  ];