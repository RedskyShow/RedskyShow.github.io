$(document).ready(function() {
	$.ajax({
		"cache": true,
		"dataType": "json",
		"url": "index.json",
		"error": function(a, b, c) {
			alert(a + b + c);
		},
		"success" : function(sections) {

			var sectionContainerElement = $("<ol />");
			
			$.each(sections, function(chapterName, chapter) {
				
				var subsectionContainerElement = $("<ul />");
				
				$.each(chapter, function(segmentName, segmentUrl) {

					var subsectionElement = $("<li />");
					subsectionElement.addClass("subsection");
					subsectionElement.append( $("<a />").attr("href", segmentUrl).text(segmentName) );
					subsectionContainerElement.append(subsectionElement);
				});

				var sectionElement = $("<li />");
				sectionElement.text(chapterName);
				sectionElement.addClass("section");
				sectionElement.append(subsectionContainerElement);

				sectionContainerElement.append(sectionElement);
			});

			var indexElement = $("#index");
			indexElement.text("");
			indexElement.append(sectionContainerElement);
			indexElement.css({
				"float":			"right",
				"display":			"block",
				"background-image":	"none",
				"background-color":	"white",
				"border-color":		"black",
				"border-width":		"3px",
				"border-radius":	"12px",
				"border-style":		"solid",
				"padding":			"1em",
				"margin":			"1em"
			});
		}
	});
});