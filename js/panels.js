function build_desktop_panel()
{
    var panel = d3.select("#left_panel").style('display', 'flex').style('flex-direction', 'column')
	.style('justify-content', 'space-between')

    var header = panel.append('div').style('display', 'flex')
	.style('flex-direction', 'column')
    var footer = panel.append('div').style('display', 'flex').style('flex-direction', 'column')
    //.style('margin-top', "20px")

    header.append("div")
	.text("Unity 2020")
	.style("font-size", "30px")
	.style("text-align", 'center')

    header.append("div")
	.text("Outreach Areas")
	.style("font-size", "20px")
	.style("text-align", 'center')


    // Header
    header.append('a')
	.style('margin-top', '20px')
	.html("Welcome volunteers! Use this map to find areas near you that may have the highest possibility of supporting the Unity2020 message.")

    header.append('a')
	.style('margin-top', '20px')
	.html("<b>Step 1:</b> Zoom to your location or search for your city here:")

    // Geocoder
    header.append('div')
	.attr('id', 'custom-map-controls')



    // Legend
    header.append('a')
	.style('margin-top', '20px')
	.html("<b>Step 2:</b> Look for PURPLE areas - these are the areas that our team thinks is most likely to be open to our message. YELLOW regions are less likely to be interested. GREEN regions are unlikely, and GREY regions are very unlikely.")

    var legend_data = [[{name: "(5) Good Area", color: ""}, {name: null, color: "purple"}],
		       [{name: "(4) Possible Area", color: ""}, {name: null, color: "orange"}],
		       [{name: "(3) Possible Area", color: ""}, {name: null, color: "yellow"}],
		       [{name: "(2) Unlikely Area", color: ""}, {name: null, color: "green"}],
		       [{name: "(1) Least Likely", color: ""}, {name: null, color: "black"}],
		      ]

    header.append('table')
	.style('margin-top', '20px')
	.append('tbody')
	.selectAll('tr').data(legend_data).enter().append('tr')
	.selectAll('td').data(function(d) {return d})
	.enter().append('td')
	.style('width', function(d)
	       {
		   if (d.name) return "150px"
		   else return "50px"
	       })

	.style('opacity', function(d)
	       {
		   if (d.name) {return 1}
		   else return 0.5
	       })
	.text(function(d){return d.name})
	.style('background-color', function(d){return d.color})


    // Save
    header.append('a')
	.style('margin-top', '20px')
	.html("<b>Step 3:</b> Print your map here, or save an image to embed wheverever you want:")

    header.append('button')
	.style('margin-top', '20px')
	.text("Print / Save Map")
	.style('content-align', 'center')
	.style('margin-left', '10px')
	.style('margin-right', '10px')
	.style('margin-top', '30px')
	.on('click', function()
	    {
		var modeToUse = L.control.browserPrint.mode.auto();
		map.printControl.print(modeToUse);
	    })

    // Footer
    
    footer.append('div')
    	.text("Data Sources:")
    
    footer.append('a')
    	.html("Harvard Dataverse")
    	.attr("href", "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ")

    footer.append('a')
    	.html("")
    	.attr("href", "maps.stamen.com")

}


function build_mobile_panel()
{
    var panel = d3.select("#bottom_panel").style('display', 'flex').style('flex-direction', 'row')
	.style('justify-content', 'space-between')

    var legend_data = [[{name: "Good Area (5)", color: ""}, {name: null, color: "purple"}, {name: "Possible Area (4)", color: ""}, {name: null, color: "orange"}, {name: "Possible Area (3)", color: ""}, {name: null, color: "yellow"}, {name: "Unlikely Area (2)", color: ""}, {name: null, color: "green"}, {name: "Least Likely (1)", color: ""}, {name: null, color: "black"} ],
		      ]

    panel.append('table')
	.style('text-size', '8px')
	.append('tbody')
	.append('tr')
	.selectAll('tr').data(legend_data).enter().append('tr')
	.selectAll('td').data(function(d) {return d})
	.enter().append('td')
	.style('text-align', 'right')
	.style('width', function(d)
	       {
		   if (d.name) return "60px"
		   else return "20px"
	       })
	.style('opacity', function(d)
	       {
		   if (d.name) {return 1}
		   else return 0.5
	       })
	.text(function(d){return d.name})
	.style('background-color', function(d){return d.color})

    
}