var nomnoml = require('nomnoml')
var src = `@startuml
#import: my-common-styles.nomnoml
#arrowSize: 1
#bendSize: 0.3
#direction: down | right
#gutter: 5
#edgeMargin: 0
#gravity: 1
#edges: hard | rounded
#background: transparent
#fill: #eee8d5; #fdf6e3
#fillArrows: false
#font: Calibri
#fontSize: 12
#leading: 1.25
#lineWidth: 3
#padding: 8
#spacing: 40
#stroke: #33322E
#title: filename
#zoom: 1
#acyclicer: greedy
#ranker: network-simplex | tight-tree | longest-path
@enduml`
console.log(nomnoml.renderSvg(src))