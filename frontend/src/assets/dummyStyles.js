// src/assets/dummyStyles.js

// ---------------- NAVBAR STYLES ----------------

export const navbarStyles = {
  // Main nav container
  nav: "w-full bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_rgba(15,23,42,0.12)] border-b border-white/30 py-3 sm:py-4 px-4 sm:px-6 sticky top-0 z-50",

  // Decorative gradient strip (actual gradient set inline in Navbar.jsx)
  decorativePattern: "absolute inset-0 opacity-100 pointer-events-none",

  // Floating bubbles
  bubble1:
    "hidden md:block absolute top-10 left-1/4 w-36 h-36 sm:w-40 sm:h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slow",
  bubble2:
    "hidden lg:block absolute bottom-5 right-20 w-28 h-28 lg:w-32 lg:h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slower",
  bubble3:
    "hidden md:block absolute top-1/3 left-20 w-20 h-20 md:w-24 md:h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slowest",

  // Main container
  container:
    "max-w-6xl mx-auto flex items-center justify-between gap-3 relative z-10",

  // Brand / title – bigger white text
  titleContainer: "flex items-center gap-2 sm:gap-3",
  titleText:
    "text-xl sm:text-2xl md:text-3xl font-bold font-[pacifico] tracking-wide text-white drop-shadow-[0_1px_3px_rgba(15,23,42,0.55)]",

  // Desktop buttons
  desktopButtonsContainer:
    "hidden md:flex items-center flex-shrink-0 space-x-3",
  spacer: "w-4",

  resultsButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/70 text-white text-sm font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.45)] hover:bg-emerald-500 hover:text-white hover:translate-y-[-1px] hover:shadow-[0_16px_45px_rgba(16,185,129,0.7)] transition-all duration-200",

  logoutButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/70 text-white text-sm font-semibold shadow-[0_10px_30px_rgba(244,63,94,0.45)] hover:bg-rose-500 hover:text-white hover:translate-y-[-1px] hover:shadow-[0_16px_45px_rgba(244,63,94,0.7)] transition-all duration-200",

  loginButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/70 text-white text-sm font-semibold shadow-[0_10px_30px_rgba(79,70,229,0.45)] hover:bg-indigo-500 hover:text-white hover:translate-y-[-1px] hover:shadow-[0_16px_45px_rgba(79,70,229,0.7)] transition-all duration-200",

  buttonIcon: "h-4 w-4 flex-shrink-0",

  // Mobile menu
  mobileMenuContainer: "md:hidden flex items-center",
  menuToggleButton:
    "p-2 rounded-xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_25px_rgba(15,23,42,0.18)] hover:scale-110 active:scale-95 transition",
  menuIcon: "h-5 w-5 text-slate-700",
  mobileMenuPanel:
    "absolute right-4 top-full mt-3 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.25)] border border-white/80 z-50 overflow-hidden",
  mobileMenuList: "divide-y divide-gray-100",
  mobileMenuItem:
    "w-full text-left px-4 py-3 flex items-center gap-2 text-sm text-slate-700 hover:bg-indigo-50/80 transition",
  mobileMenuIcon: "h-4 w-4 text-indigo-500",

  // Animations and utility styles
  animations: `
    @keyframes float-slow {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-16px); }
      100% { transform: translateY(0px); }
    }
    @keyframes float-slower {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes float-slowest {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0px); }
    }
    .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
    .animate-float-slower { animation: float-slower 9s ease-in-out infinite; }
    .animate-float-slowest { animation: float-slowest 11s ease-in-out infinite; }

    @media (max-width: 420px) {
      nav { padding-left: 12px; padding-right: 12px; }
    }
  `,
};

// ---------------- LOGIN STYLES ----------------

export const loginStyles = {
  pageContainer:
    "min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden",
  bubble1:
    "pointer-events-none hidden md:block absolute -top-10 -left-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30 animate-float-slow",
  bubble2:
    "pointer-events-none hidden md:block absolute bottom-10 right-10 w-56 h-56 bg-purple-100 rounded-full blur-3xl opacity-30 animate-float-slower",
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-gray-700 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",
  formContainer:
    "w-full max-w-sm pt-10 sm:max-w-md md:max-w-lg lg:max-w-lg relative z-20",
  form: "w-full",
  formWrapper: "relative",
  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 animate-border",
  formContent: "bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",
  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5 sm:mb-6",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-indigo-700",
  subtitle: "text-sm text-gray-600 mb-5 sm:mb-6",
  label: "block mb-4",
  labelText: "text-sm font-medium text-gray-700",
  inputContainer: "mt-2 relative",
  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:shadow-md bg-white",
  inputNormal: "border-gray-200",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-gray-600",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex items-center cursor-pointer justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg transform transition disabled:opacity-60",
  submitButtonIcon: "w-4 h-4",
  submitButtonText: "text-sm sm:text-base",
  signupContainer: "mt-6",
  signupContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow",
  signupText: "text-sm text-gray-700",
  signupLink: "text-indigo-700 font-semibold hover:underline",
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');:root{--card-radius:24px;}@keyframes gradient-anim{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animate-border{border-radius:var(--card-radius);padding:2px;background:linear-gradient(90deg,rgba(99,102,241,0.95),rgba(139,92,246,0.9),rgba(96,165,250,0.95));background-size:200% 200%;animation:gradient-anim 6s ease infinite}@keyframes float-slow{0%{transform:translateY(0px)}50%{transform:translateY(-18px)}100%{transform:translateY(0px)}}@keyframes float-slower{0%{transform:translateY(0px)}50%{transform:translateY(-10px)}100%{transform:translateY(0px)}}.animate-float-slow{animation:float-slow 8s ease-in-out infinite}.animate-float-slower{animation:float-slower 10s ease-in-out infinite}#login-heading,form,input,button,a,p,label,span{font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}@media(max-width:360px){.rounded-3xl{border-radius:14px}}@media(min-width:1024px){.rounded-3xl{border-radius:24px}}`,
};

// ---------------- SIGNUP STYLES ----------------

export const signupStyles = {
  pageContainer:
    "min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 relative",
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",
  formContainer: "w-full max-w-sm pt-15 sm:max-w-md md:max-w-lg relative z-10",
  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 animate-border",
  formContent: "bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",
  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-indigo-700",
  subtitle: "text-sm text-gray-600 mb-5 sm:mb-6",
  label: "block mb-3 sm:mb-4",
  labelText: "text-sm font-medium text-gray-700",
  inputContainer: "mt-2 relative",
  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:shadow-md bg-white",
  inputNormal: "border-gray-200",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-gray-600",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex cursor-pointer items-center justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg transform transition hover:scale-[1.02] disabled:opacity-60",
  loginPromptContainer: "mt-5 sm:mt-6",
  loginPromptContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-3 sm:px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow",
  loginPromptText: "text-sm text-gray-700",
  loginPromptLink: "text-indigo-700 font-semibold hover:underline",
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');:root{--card-radius:24px;}@keyframes gradient-anim{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animate-border{border-radius:var(--card-radius);padding:2px;background:linear-gradient(90deg,rgba(99,102,241,0.95),rgba(139,92,246,0.9),rgba(96,165,250,0.95));background-size:200% 200%;animation:gradient-anim 6s ease infinite}@keyframes float-slow{0%{transform:translateY(0px)}50%{transform:translateY(-18px)}100%{transform:translateY(0px)}}.animate-float-slow{animation:float-slow 8s ease-in-out infinite}#signup-heading,form,input,button,a,p,label,span{font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}@media(max-width:360px){.rounded-3xl{border-radius:14px}}@media(min-width:1024px){.rounded-3xl{border-radius:24px}.bg-white\\/95{padding:2.5rem}}`,
};

// ---------------- SIDEBAR STYLES ----------------

export const sidebarStyles = {
  pageContainer: "min-h-screen bg-gradient-to-br from-slate-50 to-gray-100",
  mobileOverlay: "fixed inset-0 bg-black/30 z-30 md:hidden",
  mainContainer: "flex xl:h-screen xl:overflow-y-hidden",
  sidebar:
    "fixed h-screen z-40 top-0 left-0 w-80 transform transition-transform duration-300 ease-in-out bg-white shadow-lg rounded-r-2xl overflow-y-auto border-r border-gray-200 md:relative md:translate-x-0 md:flex md:flex-col",
  sidebarHeader:
    "top-0 z-20 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-800 relative overflow-hidden",
  headerDecoration1:
    "absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-white opacity-20 rounded-full",
  headerDecoration2:
    "absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-blue-200 opacity-40 rounded-full",
  headerContent: "flex font-[pacifico] items-center justify-between relative z-10",
  logoContainer: "flex items-center space-x-3",
  logoIcon: "p-2 bg-white/40 rounded-xl backdrop-blur-sm border border-white",
  logoTitle: "text-2xl font-bold",
  logoSubtitle: "mt-1 text-slate-600 text-sm",
  closeButton: "md:hidden p-2 rounded-md hover:bg-white/50",
  sidebarContent: "sidebar-content flex-1 overflow-y-auto p-4",
  technologiesHeader: "mb-4 flex items-center justify-between",
  technologiesTitle: "text-lg font-semibold text-slate-700",
  technologiesCount: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full",
  techItem: "mb-3",
  techButton:
    "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border",
  techButtonSelected: "border-current shadow-md transform scale-[1.02]",
  techButtonNormal: "border-gray-100 hover:border-gray-300 hover:bg-gray-50",
  techButtonContent: "flex items-center space-x-3",
  techIcon: "p-2 rounded-lg border",
  techName: "font-medium",
  levelsContainer: "mt-3 ml-2 p-3 bg-gray-50 rounded-xl border border-gray-100",
  levelsTitle: "text-sm font-medium text-slate-700 mb-2 flex items-center",
  techBadge: "ml-2 text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full",
  levelButton:
    "w-full flex items-center gap-3 cursor-pointer p-3 my-2 rounded-lg border transition-all",
  levelButtonSelected: "border-current shadow-sm font-bold",
  levelButtonNormal: "border-gray-100 hover:bg-white",
  levelButtonContent: "flex items-center space-x-2",
  levelIcon: "p-1.5 rounded-md",
  levelQuestions: "text-xs bg-gray-200 text-slate-700 px-2 py-1 rounded-full",
  sidebarFooter: "sticky bottom-0 z-20 p-4 border-t border-gray-100 bg-white",
  footerContent: "flex items-center justify-center text-slate-500",
  footerContentCenter: "text-center text-xs",
  footerHighlight: "mt-1 text-blue-600 font-medium",

  mainContent: "flex-1 min-h-screen p-4 md:p-8 ml-0 md:ml-0",
  mobileHeader: "flex items-center justify-between mb-4 md:hidden",
  menuButton: "p-2 rounded-md bg-white shadow-sm",
  mobileTitle: "flex-1 mx-3",
  mobileTechInfo: "flex items-center font-[pacifico] justify-center space-x-3",
  mobileTechIcon: "p-2 rounded-md border",
  mobileTechText: "text-center",
  mobileTechName: "text-sm font-semibold",
  mobileTechLevel: "text-xs text-slate-600",
  mobilePlaceholder: "text-center text-sm text-slate-600",

  mobileLevels: "md:hidden mb-4",
  mobileLevelsContainer: "flex gap-2 overflow-x-auto",
  mobileLevelButton:
    "flex-none px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm text-sm font-medium",

  welcomeContainer: "min-h-screen flex items-center justify-center font-[pacifico] p-4",
  welcomeContent:
    "text-center font-[pacifico] max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border border-white",
  welcomeIcon:
    "inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full shadow mb-6",
  welcomeTitle:
    "text-2xl md:text-4xl font-bold text-slate-800 mb-4 font-[pacifico]",
  welcomeDescription:
    "text-sm md:text-lg text-slate-700 mb-6 max-w-md mx-auto",

  featuresGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6",
  featureCard:
    "bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-5 rounded-2xl border border-blue-100 text-center",
  featureIcon:
    "inline-flex items-center justify-center p-3 bg-green-100 text-green-600 rounded-full mb-3",
  featureTitle: "font-semibold text-slate-800 mb-2",
  featureDescription: "text-xs md:text-sm text-slate-600",

  welcomePrompt:
    "bg-gradient-to-r from-blue-100 to-indigo-100 p-3 md:p-4 rounded-2xl border border-blue-200 shadow-inner",
  welcomePromptText:
    "text-blue-700 font-medium flex items-center justify-center",

  levelSelectionContainer:
    "h-full xl:mt-60 md:pb-200 pb-30 flex items-center justify-center",
  levelSelectionContent:
    "text-center bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-md",
  techSelectionIcon: "p-5 rounded-2xl inline-flex mb-6 shadow-sm",
  techSelectionTitle: "text-2xl md:text-3xl font-bold text-slate-800 mb-2",
  techSelectionDescription: "text-slate-600 mb-6",
  techSelectionPrompt:
    "bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl border border-blue-200",
  techSelectionPromptText: "text-blue-700 font-medium",

  resultsContainer: "h-full flex items-center justify-center w-full px-6",
  resultsContent:
    "bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-4xl w-full",
  resultsHeader: "text-center",
  performanceIcon: "p-4 rounded-2xl inline-flex mb-6 shadow-sm",
  resultsTitle:
    "text-2xl md:text-4xl font-bold text-slate-800 mb-2 font-[pacifico]",
  resultsSubtitle: "text-slate-600 mb-2",
  performanceBadge:
    "inline-block text-slate-800 px-4 py-1 rounded-full text-sm font-medium mb-6",

  scoreGrid: "grid grid-cols-2 gap-4 mb-6",
  scoreCard:
    "bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200 text-center",
  scoreIcon:
    "inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3 shadow-inner",
  scoreNumber: "text-2xl font-bold text-green-600",
  scoreLabel: "text-green-700 font-medium",

  scoreProgress:
    "bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-2xl border border-indigo-200 mb-6",
  scoreProgressHeader: "flex items-center justify-between mb-4",
  scoreProgressTitle: "text-indigo-700 font-semibold",
  scoreProgressPercentage: "text-indigo-700 font-bold",
  scoreProgressBar: "w-full bg-gray-200 rounded-full h-4",
  scoreProgressFill: "h-4 rounded-full transition-all duration-500",

  quizContainer: "max-w-3xl mx-auto",
  quizHeader:
    "mb-4 bg-white p-4 md:p-6 rounded-2xl shadow-md border border-gray-100",
  quizTitleContainer: "flex items-center justify-between mb-2",
  quizTitle: "text-xl md:text-2xl font-bold text-slate-800",
  quizCounter:
    "text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium",
  progressBar: "w-full bg-gray-200 rounded-full h-2.5 mb-2",
  progressFill:
    "bg-gradient-to-r from-blue-300 to-indigo-300 h-2.5 rounded-full transition-all duration-500",

  questionContainer:
    "bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100",
  questionHeader: "flex items-center mb-2",
  questionIcon: "bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3",
  questionText: "text-lg md:text-xl font-semibold text-slate-800",

  optionsContainer: "space-y-4 mt-6",
  optionButton:
    "w-full cursor-pointer text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300",
  optionNormal:
    "border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm",
  optionCorrect: "bg-green-50 border-green-300 text-green-700 shadow-sm",
  optionIncorrect: "bg-red-50 border-red-300 text-red-700 shadow-sm",
  optionContent: "flex items-center",
  optionIconCorrect: "mr-3 text-green-500 flex-shrink-0",
  optionIconIncorrect: "mr-3 text-red-500 flex-shrink-0",
  optionIconEmpty:
    "w-5 h-5 rounded-full border-2 border-gray-200 mr-3 flex-shrink-0",
  optionText: "text-sm md:text-lg",

  loadingContainer: "h-full flex items-center justify-center",
  loadingContent:
    "text-center bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100",
  loadingSpinner:
    "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400 mx-auto mb-4",
  loadingTitle: "text-lg md:text-xl font-semibold text-slate-800 mb-2",
  loadingDescription: "text-sm md:text-base text-slate-600",

  customStyles: `
    .sidebar-content {
      -webkit-overflow-scrolling: touch;
    }

    aside .sidebar-content::-webkit-scrollbar {
      width: 10px;
    }
    aside .sidebar-content::-webkit-scrollbar-track {
      background: transparent;
    }
    aside .sidebar-content::-webkit-scrollbar-thumb {
      background-color: rgba(99,102,241,0.12);
      border-radius: 999px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    aside .sidebar-content::-webkit-scrollbar-thumb:hover {
      background-color: rgba(99,102,241,0.18);
    }

    aside .sidebar-content {
      scrollbar-width: thin;
      scrollbar-color: rgba(99,102,241,0.12) transparent;
    }
  `,
};

// ---------------- RESULTS STYLES ----------------

// ---------------- RESULTS STYLES ----------------

export const resultStyles = {
  // Page shell
  pageContainer:
    "min-h-screen bg-gradient-to-b from-indigo-50 via-slate-50 to-white px-4 sm:px-6 py-6 sm:py-8",
  container:
    "max-w-6xl mx-auto font-[Poppins,system-ui] relative",

  // Header
  header:
    "mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
  title:
    "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900",
  subtitle:
    "mt-1 text-sm sm:text-base text-slate-500",
  headerControls: "flex items-center gap-3",

  // Filter bar
  filterContainer: "mb-6 sm:mb-8",
  filterContent:
    "flex flex-wrap items-center justify-between gap-3 bg-white/80 backdrop-blur-2xl px-4 sm:px-6 py-3.5 rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.10)] border border-white/80",
  filterButtons: "flex flex-wrap items-center gap-2",
  filterLabel:
    "text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-500",
  filterButton:
    "px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 shadow-sm cursor-pointer",
  filterButtonActive:
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-transparent shadow-[0_10px_30px_rgba(129,140,248,0.7)] scale-100",
  filterButtonInactive:
    "bg-white/90 text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-[1px]",
  filterStatus:
    "text-xs sm:text-sm text-slate-500",

  // Loading / empty
  loadingContainer: "py-16 sm:py-20 flex flex-col items-center justify-center",
  loadingSpinner:
    "inline-block animate-spin rounded-full h-12 w-12 border-2 border-indigo-400 border-t-transparent mb-4",
  loadingText: "text-slate-600 text-sm sm:text-base",
  emptyState:
    "py-16 sm:py-20 text-center text-slate-500 text-sm sm:text-base",

  // Sections
  trackSection: "mb-8 sm:mb-10",
  trackTitle:
    "mb-3 sm:mb-4 inline-flex items-center gap-2 text-lg sm:text-xl font-semibold text-slate-900",
  resultsGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5",

  // BADGES (performance chip)
  badgeExcellent:
    "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold text-emerald-50 bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-[0_10px_28px_rgba(16,185,129,0.55)]",
  badgeGood:
    "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold text-indigo-50 bg-gradient-to-r from-indigo-400 to-purple-500 shadow-[0_10px_28px_rgba(79,70,229,0.55)]",
  badgeAverage:
    "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold text-amber-50 bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_10px_28px_rgba(245,158,11,0.55)]",
  badgeNeedsWork:
    "inline-flex items-center justify-center px-3.5 py-1 rounded-full text-[11px] font-semibold text-rose-50 bg-gradient-to-r from-rose-400 to-red-500 shadow-[0_10px_28px_rgba(239,68,68,0.55)] whitespace-nowrap",

  // Card shell – glassy, animated
  card:
    "relative group bg-white/90 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_18px_40px_rgba(148,163,184,0.32)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(129,140,248,0.45)]",
  cardAccent:
    "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[rgba(129,140,248,0.25)] via-[rgba(139,92,246,0.20)] to-[rgba(244,114,182,0.25)]",
  cardContent:
    "relative z-10 p-5 sm:p-6 flex flex-col h-full",

  // Card header
  cardHeader:
    "flex items-start justify-between gap-3",
  cardInfo:
    "flex items-center gap-3 min-w-0",
  levelAvatar:
    "flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl font-semibold text-sm sm:text-base bg-indigo-50 text-indigo-700 shadow-[0_8px_20px_rgba(129,140,248,0.35)]",
  levelBasic: "bg-indigo-50 text-indigo-700",
  levelIntermediate: "bg-purple-50 text-purple-700",
  levelAdvanced: "bg-pink-50 text-pink-700",

  cardText: "min-w-0",
  cardTitle:
    "text-sm sm:text-base font-semibold text-slate-900 truncate transition-colors duration-300 group-hover:text-slate-900",
  cardMeta:
    "mt-0.5 text-xs sm:text-[13px] text-slate-500",

  // Performance area
  cardPerformance:
    "text-right flex flex-col items-end",
  performanceLabel:
    "text-[11px] uppercase tracking-wide text-slate-400 mb-1",
  badgeContainer: "mt-0.5",

  // Stats section
  cardStats:
    "mt-4 space-y-2 text-xs sm:text-sm",
  statItem:
    "text-slate-600 flex items-center justify-between gap-2",
  statNumber:
    "font-semibold text-base sm:text-lg text-slate-900",

  // Correct / incorrect chips
  correctBox:
    "inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs sm:text-sm font-semibold shadow-[0_6px_18px_rgba(16,185,129,0.30)]",
  incorrectBox:
    "inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 text-xs sm:text-sm font-semibold shadow-[0_6px_18px_rgba(239,68,68,0.30)]",
};
