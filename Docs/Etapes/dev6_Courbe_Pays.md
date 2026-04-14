# dev6_Courbe_Pays.md

ça fonctionne maintenant l'accès à l'url http://localhost:4200/country/France. 
Par contre au niveau, il manque le tracé de la courbe ( deux lignes obliques ) pour les Pays ( ici France ) . 
Voir schéma joint.

Ton graphique s’affiche mais la courbe n’est pas dessinée. On voit seulement les axes et la légende Medals.
Ce problème vient presque toujours d’un mauvais type de données envoyé à Chart.js après la refactorisation.

Dans ton ancien code, les médailles étaient des strings, mais Chart.js pour un graphique line attend des nombres.

1️⃣ Vérifier les types envoyés au graphique :
Dans ton country.component.ts, tu dois envoyer :

      years: number[]
      medals: number[]
   (Vérification Ok)

et non :

    medals: string[]

Corrige si nécessaire :

    this.years = participations.map(p => p.year);
    this.medals = participations.map(p => p.medalsCount);

2️⃣ Corriger le type dans le composant graphique
Dans country-chart.component.ts :
❌ Mauvais :
    
    @Input() medals!: string[];

✔ Correct :

    @Input() medals!: number[];

3️⃣ Corriger la configuration Chart.js
Dans buildChart() :

this.chart = new Chart("countryChart", {
type: 'line',
data: {
labels: this.years,
datasets: [{
label: "Medals",
data: this.medals,
borderColor: '#0b868f',
backgroundColor: '#0b868f',
tension: 0.3
}]
},
options: {
responsive: true,
maintainAspectRatio: false
}
});

La solution qui fonctionne :
3️⃣ Corriger le cycle de vie du graphique
Même si les données arrivent, ngOnInit() peut être exécuté avant que les @Input soient définis.
La solution Angular propre est d’utiliser ngOnChanges().
voir fichier : country-chart.component.ts
