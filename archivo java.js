const categories = [
    {
        name: ' ANALISIS DE RUTINA ',
        studies: ['Concurrir con 8 a 10 horas de ayuno, luego del reposo nocturno en el horario matinal.', ' No ingerir alimentos o bebidas en ese período.', ' Factores que afectan las condiciones basales:', '– Ejercicios previo.', '– Stress.', '– Ciertos fármacos.' ]
    },
    {
        name: 'TEST DE TOLERANCIA ORAL A LA GLUCOSA / GLUCOSA BASAL Y POST PRANDIAL / CURVAS DE GLUCOSA:',
        studies: ['Realizar una dieta rica en hidratos de carbono los tres días previos a la extracción. Comer pastas, dulces, pan, etc.', '– NO INGERIR ningún tipo de medicamento, salvo indicación médica.', '– NO REALIZAR ningún tipo de actividad física.', ' – NO FUMAR.', ' Concurrir al laboratorio con 8 horas de ayuno y la primera orina de la mañana. Deberá permanecer en el Laboratorio durante la realización de las extracciones seriadas sin realizar ningún tipo de actividad física.']
    },
    {
        name: 'ORINA COMPLETA (RECOLECCIÓN DELA PRIMERA ORINA DE LA MAÑANA)',
        studies: ['Limpiar cuidadosamente el área genital, especialmente el orificio uretral con agua (separando los labios genitales, en el caso de la mujer).' , ' Recolección: eliminar la primera porción de la micción y recolectar la porción media.', ' Utilizar un recipiente descartable, estéril, hermético, de boca ancha.', ' Remitir al laboratorio rotulado con nombre y apellido dentro de las 2 horas haber sido recolectada.']        
    },
    {
        name: 'RECOLECCIÓN DE ORINA DE 24 HS',
        studies: ['Orinar a las 8 hs. y descartar esa orina. A partir de ese momento, recolectar toda la orina hasta las 8 hs. del día siguiente inclusive.' , 'IMPORTANTE:', ' La orina remitida al laboratorio debe corresponder a la totalidad de las 24 horas. De la correcta recolección depende la exactitud del resultado.', ' Usar envases de recolección nuevos.', ' La contaminación con sustancias interferentes puede modificar los resultados. Conservarlo en heladera o lugar fresco.']
    },
    {
        name: 'UROCULTIVO',
        studies: ['Suspender cualquier tratamiento con antibiótico, por lo menos 5 días antes de la toma de la muestra, excepto expresa indicación del médico.', ' VARONES: Antes de la recolección de la muestra, con el prepucio retraído, realizar una meticulosa higiene genital (utilizar jabón – DG6). Enjuagar con abundante agua, secar con toallitas descartables. Recolectar la segunda porción del chorro miccional (20-30 ml), en frasco estéril, con retención urinaria de toda la noche, o como mínimo de 3hs.', ' MUJERES: Antes de la recolección de la muestra, colocarse un tampón vaginal, el cual debe quedar colocado hasta la finalización de la toma de la muestra. Realizar una meticulosa higiene genital, de adelante hacia atrás (utilizar jabón – DG6). Enjuagar con abundante agua y secar con gasa estéril. Se deben separar los labios vaginales y orinar, recolectando la porción media de la micción (20-30 ml) en un frasco estéril, con retención urinaria de toda la noche, o como mínimo de 3hs.', ' IMPORTANTE:' , ' Enviar la muestra rápidamente al laboratorio. Mantener refrigerado hasta que la muestra sea remitida al laboratorio. SEGUIR ESTRICTAMENTE ESTAS INDICACIONES, DE ESE MODO EVITARA CONTAMINACIONES DEL MATERIAL REMITIDO AL LABORATORIO Y EVITARA REPETICIONES DEL ESTUDIO']
    },
    {
        name: 'PROLACTINA',
        studies: ['Concurrir al laboratorio dentro de las 2 horas del despertar (sueño regular), con una ayuno de 8hs.', ' Realizar un reposo de 20 minutos antes de la extracción sanguínea.', ' El día anterior a la extracción NO mantener relaciones sexuales y evitar situaciones de stress.', ' De no existir indicación médica se sugiere realizar la extracción entre el 3 y 5 día del ciclo.']
    },
    {
        name: 'CORTISOL',
        studies: ['Concurrir al laboratorio con 8 horas de ayuno. La extracción deberá ser realizada entre las 8:00 y 08.30 hs.' , '• PERFIL TIROIDEO:', ' – TSH (Tirotrofina Ultrasensible)', ' – T3 (Triiodotironina)', ' – T3 libre', ' – T4 (Tiroxina)', ' – T4 libre', ' – ATPO (Ac. Antiperoxidasa)', ' – ATG Us (Ac. Antitiroglobulina ultrasensible)', ' – Ac. Antireceptor de TSH (TRAB)', ' Concurrir al laboratorio con 8 hs de ayuno,luego del reposo nocturno en el horario matinal. No ingerir alimentos o bebidas en ese período. Deberá tomar su medicación después de realizada la extracción.']
    },
    {
        name: 'MONITOREO DE DROGAS TERAPEUTICAS', 
        studies: ['Concurrir al laboratorio con un ayuno de 8 horas.', ' La extracción debe realizarse antes de la toma matinal de la medicación, salvo indicación médica.', ' Los días previos al estudio, seguir con la medicación habitual.']
    }, 
];

const categoryList = document.getElementById('categoryList');
const studyContent = document.getElementById('studyContent');

function createCategoryButtons() {
    categories.forEach(category => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = category.name;
        button.className = 'category-button';
        button.onclick = (event) => showStudies(event, category.name);
        li.appendChild(button);
        categoryList.appendChild(li);
    });
}

function showStudies(event, categoryName) {
    
    const selectedCategory = categories.find(cat => cat.name === categoryName);
    
    if (selectedCategory) {
        const buttons = document.querySelectorAll('.category-button');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        let content = '<ul class="study-list">';
        selectedCategory.studies.forEach(study => {
            content += `<li>${study}</li>`;
        });
        content += '</ul>';
        studyContent.innerHTML = content;
    } else {
        studyContent.innerHTML = '<p>Selecciona una categoría para ver las indicaciones.</p>';
    }
}

createCategoryButtons();
showStudies(null);