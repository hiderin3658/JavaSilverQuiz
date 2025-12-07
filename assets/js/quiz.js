/**
 * JavaSilver クイズ 共通JavaScript
 */

// グローバル変数
let totalQuestions = 0;
let currentQuestion = 0;
let correctCount = 0;
let answered = false;
const results = [];
let isPC = false;

/**
 * クイズの初期化
 */
function initQuiz() {
  const questionScreens = document.querySelectorAll('.question-screen');
  totalQuestions = questionScreens.length;
  isPC = window.innerWidth >= 1024;

  if (isPC) {
    document.body.classList.add('pc-mode');
    setupPCLayout();
  }

  updateProgress();
}

/**
 * PC用レイアウトのセットアップ
 */
function setupPCLayout() {
  const container = document.createElement('div');
  container.className = 'container-pc';
  const mainContent = document.getElementById('mainContent');
  mainContent.parentNode.insertBefore(container, mainContent);
  container.appendChild(mainContent);
}

/**
 * 進捗バーの更新
 */
function updateProgress() {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
  document.getElementById('progressText').textContent = `問題 ${currentQuestion + 1} / ${totalQuestions}`;
  document.getElementById('scoreBadge').textContent = `正解: ${correctCount}`;
}

/**
 * 回答選択時の処理
 */
function selectAnswer(element, questionIndex, choiceValue) {
  if (answered) return;

  const screen = document.querySelector(`[data-question="${questionIndex}"]`);
  const correctAnswer = parseInt(screen.dataset.answer);
  const isCorrect = choiceValue === correctAnswer;

  // 全ての選択肢を無効化
  const allChoices = screen.querySelectorAll('.choice');
  allChoices.forEach(c => c.classList.add('disabled'));

  // 選択した選択肢をマーク
  element.classList.add('selected');

  // 正誤判定
  setTimeout(() => {
    if (isCorrect) {
      element.classList.add('correct');
      correctCount++;
      showFeedback(questionIndex, true);
    } else {
      element.classList.add('incorrect');
      // 正解の選択肢も表示
      allChoices[correctAnswer].classList.add('correct');
      showFeedback(questionIndex, false);
    }

    // 解説を表示
    document.getElementById(`explanation${questionIndex}`).classList.add('show');

    // 結果を記録
    results.push({ question: questionIndex + 1, correct: isCorrect });

    answered = true;

    // 次へボタンを有効化
    const nextBtn = document.getElementById('nextBtn');
    if (currentQuestion < totalQuestions - 1) {
      nextBtn.textContent = '次の問題へ →';
      nextBtn.disabled = false;
    } else {
      nextBtn.textContent = '結果を見る';
      nextBtn.disabled = false;
    }

    updateProgress();
  }, 100);
}

/**
 * フィードバックバナーの表示
 */
function showFeedback(questionIndex, isCorrect) {
  const feedback = document.getElementById(`feedback${questionIndex}`);
  feedback.textContent = isCorrect ? '✓ 正解です！' : '✗ 不正解です';
  feedback.className = 'feedback-banner show ' + (isCorrect ? 'correct' : 'incorrect');
}

/**
 * 次の問題へ
 */
function nextQuestion() {
  if (!answered) return;

  if (currentQuestion < totalQuestions - 1) {
    // 次の問題へ
    if (!isPC) {
      document.querySelectorAll('.question-screen').forEach(s => s.classList.remove('active'));
      currentQuestion++;
      document.querySelectorAll('.question-screen')[currentQuestion].classList.add('active');
      window.scrollTo(0, 0);
    } else {
      currentQuestion++;
      // PCでは次の問題までスクロール
      const nextScreen = document.querySelectorAll('.question-screen')[currentQuestion];
      nextScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    answered = false;
    document.getElementById('nextBtn').textContent = '回答を選択してください';
    document.getElementById('nextBtn').disabled = true;
    updateProgress();
  } else {
    // 結果画面へ
    showResults();
  }
}

/**
 * 結果画面の表示
 */
function showResults() {
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // 評価を決定
  let emoji, message, scoreClass;
  if (percentage >= 90) {
    emoji = '🎉';
    message = '素晴らしい！';
    scoreClass = 'excellent';
  } else if (percentage >= 70) {
    emoji = '😊';
    message = 'よくできました！';
    scoreClass = 'good';
  } else if (percentage >= 50) {
    emoji = '📚';
    message = 'もう少し頑張りましょう';
    scoreClass = 'fair';
  } else {
    emoji = '💪';
    message = '復習が必要です';
    scoreClass = 'poor';
  }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultScore').textContent = `${correctCount} / ${totalQuestions}`;
  document.getElementById('resultScore').className = 'result-score ' + scoreClass;
  document.getElementById('resultMessage').textContent = message;
  document.getElementById('resultDetail').textContent = `正答率: ${percentage}%`;

  // サマリーリストを生成
  const summaryHTML = results.map(r => `
    <div class="summary-item ${r.correct ? 'correct' : 'incorrect'}">
      <div class="summary-icon">${r.correct ? '✓' : '✗'}</div>
      <div>問題 ${r.question}: ${r.correct ? '正解' : '不正解'}</div>
    </div>
  `).join('');
  document.getElementById('summaryList').innerHTML = summaryHTML;

  // 結果画面を表示
  if (!isPC) {
    document.querySelectorAll('.question-screen').forEach(s => s.classList.remove('active'));
    document.getElementById('resultScreen').classList.add('active');
  } else {
    document.getElementById('resultScreen').classList.add('active');
    document.getElementById('resultScreen').scrollIntoView({ behavior: 'smooth' });
  }
  document.querySelector('.navigation').style.display = 'none';
}

/**
 * ページ読み込み時の初期化
 */
document.addEventListener('DOMContentLoaded', function() {
  initQuiz();
});
