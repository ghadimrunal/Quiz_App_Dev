export const leaderboardStyles = {
  // Overall layout: a bit tighter
  pageContainer:
    'min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-8 px-4 sm:px-6 lg:px-8',
  container: 'max-w-5xl mx-auto',   // was 6/7xl → smaller & centered

  header: 'text-center mb-10',
  title:
    'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-3',
  subtitle: 'text-base sm:text-lg md:text-xl text-gray-600 font-medium',

  leaderboardContainer: 'mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start',
  sidebar: 'lg:col-span-1 space-y-4',
  main: 'lg:col-span-3',

  trophySection: 'text-center mb-4',
  trophyIcon:
    'w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-xl',

  // Your rank card smaller + slimmer
  yourRank:
    'bg-white/85 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-[0_14px_40px_rgba(15,23,42,0.14)] border border-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3',
  yourRankTitle: 'text-xl sm:text-2xl font-bold text-gray-800',
  rankBadge:
    'inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-sm sm:text-base shadow-md',

  top3Container: 'space-y-4',
  // Card less zoomy
  top3Card: 'group hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200',
  // Medal circle smaller, no fat border or big number
  top3Avatar:
    'relative w-16 h-16 sm:w-18 sm:h-18 mx-auto rounded-full shadow-[0_12px_25px_rgba(15,23,42,0.25)] flex items-center justify-center bg-white',
  rank1: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500',
  rank2: 'bg-gradient-to-br from-gray-300 via-gray-200 to-silver',
  rank3: 'bg-gradient-to-br from-amber-500 to-orange-400',

  // Use a tiny badge for the 1/2/3 INSIDE Top3Card (not text in circle)
  top3RankBadge:
    'absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white text-[10px] font-bold text-gray-700 flex items-center justify-center shadow',

  top3Name: 'text-base sm:text-lg font-bold text-gray-800 mt-2 mb-0.5 text-center',
  top3Score:
    'text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-center',

  fullList:
    'bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_18px_55px_rgba(15,23,42,0.16)] border border-white/70 overflow-hidden',
  tableHeader:
    'bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold',
  tableRow:
    'px-5 sm:px-6 py-3 sm:py-4 border-b border-gray-100 hover:bg-indigo-50/60 transition-all duration-150 even:bg-gray-50/60 text-xs sm:text-sm',

  rankCell: 'text-base sm:text-lg font-extrabold text-indigo-600 w-8 sm:w-10',
  userCell: 'font-semibold text-gray-800 truncate',
  scoreCell:
    'text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent',

  medalIcon: 'w-6 h-6 sm:w-7 sm:h-7',
  emptyState: 'text-center py-12 sm:py-14 text-gray-500 text-sm sm:text-base',

  responsive:
    '@media (max-width: 768px) { .grid-cols-1 { grid-template-columns: 1fr; } }',

  animations: `
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
    @keyframes glow { 0%, 100% { box-shadow: 0 0 14px rgba(99, 102, 241, 0.45); } 50% { box-shadow: 0 0 24px rgba(99, 102, 241, 0.85); } }
    .trophy-float { animation: float 3s ease-in-out infinite; }
    .glow { animation: glow 2s ease-in-out infinite; }
  `,
};



// export const leaderboardStyles = {
//   /* ===== PAGE ===== */
//   pageContainer:
//     'min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-8 px-4 sm:px-6 lg:px-8',

//   /* ⬅️ FULL WIDTH */
//   container: 'max-w-7xl mx-auto',

//   header: 'text-center mb-10',
//   title:
//     'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-3',
//   subtitle: 'text-base sm:text-lg md:text-xl text-gray-600 font-medium',

//   /* ===== LAYOUT ===== */
//   leaderboardContainer: 'mt-8',
//   main: 'w-full',

//   trophySection: 'text-center mb-4',
//   trophyIcon:
//     'w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-xl',

//   /* ===== YOUR RANK ===== */
//   yourRank:
//     'bg-white/85 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-[0_14px_40px_rgba(15,23,42,0.14)] border border-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3',
//   yourRankTitle: 'text-xl sm:text-2xl font-bold text-gray-800',
//   rankBadge:
//     'inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-sm sm:text-base shadow-md',

//   /* ===== TABLE ===== */
//   fullList:
//     'w-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_18px_55px_rgba(15,23,42,0.16)] border border-white/70 overflow-hidden',

//   tableHeader:
//     'bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-4 text-xs sm:text-sm font-semibold',

//   tableRow:
//     'px-6 py-4 border-b border-gray-100 hover:bg-indigo-50/60 transition-all duration-150 even:bg-gray-50/60 text-xs sm:text-sm',

//   /* ===== CELLS ===== */
//   rankCell: 'w-12 flex items-center justify-center',
//   userCell: 'font-semibold text-gray-800 truncate',
//   scoreCell:
//     'text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent',

//   /* ===== RANK STYLES ===== */

//   /* Medal base */
//   medalBase:
//     'relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg',

//   /* Gold */
//   medalGold:
//     'bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 ring-2 ring-yellow-900/40',

//   /* Silver */
//   medalSilver:
//     'bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 ring-2 ring-gray-700/40',

//   /* Bronze */
//   medalBronze:
//     'bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 ring-2 ring-amber-900/40',

//   /* Shine dot */
//   medalShine:
//     'absolute top-1 left-1 w-3 h-3 bg-white/40 rounded-full blur-sm',

//   /* Medal number */
//   medalTextDark: 'text-black font-extrabold text-sm z-10',
//   medalTextLight: 'text-white font-bold text-sm z-10',

//   /* Other ranks */
//   normalRank:
//     'text-blue-500 font-bold text-base sm:text-lg',

//   /* ===== EMPTY ===== */
//   emptyState:
//     'text-center py-12 sm:py-14 text-gray-500 text-sm sm:text-base',

//   /* ===== ANIMATIONS ===== */
//   animations: `
//     @keyframes float {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-6px); }
//     }
//     @keyframes glow {
//       0%, 100% { box-shadow: 0 0 14px rgba(99,102,241,0.45); }
//       50% { box-shadow: 0 0 24px rgba(99,102,241,0.85); }
//     }
//     .trophy-float { animation: float 3s ease-in-out infinite; }
//     .glow { animation: glow 2s ease-in-out infinite; }
//   `,
// };

