function toggleOptions(id) {
    const options = document.getElementById(id);
    if (options.style.display === "none" || options.style.display === "") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
}

function calculatePlanet() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const answers = {};
    let allQuestionsAnswered = true;

   
    for (let i = 1; i <= 5; i++) {
        const key = 'q' + i;
        if (!formData.has(key)) {
            allQuestionsAnswered = false;
            break;
        }
        answers[key] = formData.get(key);
    }

    if (!allQuestionsAnswered) {
        alert('Lütfen tüm soruları cevaplayınız.');
        return;
    }

    
    const planetCounts = {
        'mars': 0,
        'neptune': 0,
        'jupiter': 0,
        'earth': 0,
        'venus': 0,
        'mercury': 0,
        'saturn': 0,
        'pluto': 0
    };

   
    Object.values(answers).forEach(answer => {
        if (planetCounts.hasOwnProperty(answer)) {
            planetCounts[answer]++;
        }
    });

   
    const maxCount = Math.max(...Object.values(planetCounts));
    const topPlanets = Object.keys(planetCounts).filter(key => planetCounts[key] === maxCount);

    const randomIndex = Math.floor(Math.random() * topPlanets.length);
    const selectedPlanet = topPlanets[randomIndex];

    
    const planetNames = {
        'mars': 'Mars',
        'neptune': 'Neptün',
        'jupiter': 'Jüpiter',
        'earth': 'Dünya',
        'venus': 'Venüs',
        'mercury': 'Merkür',
        'saturn': 'Satürn',
        'pluto': 'Plüton'
    };

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Senin gezegenin: ${planetNames[selectedPlanet]}!`;
}
