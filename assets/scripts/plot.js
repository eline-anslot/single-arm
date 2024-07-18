let simon_plot;
let single_arm_plot;

window.MathJax = {
    startup: {
        ready: () => {
            MathJax.startup.defaultReady();
            MathJax.startup.promise.then(() => {
                //simon_plot = init_plot("simon");
                swapdata3 = init_plot("simon", 
                    generate_data_stopped_recruitment(),
                    width - marginRight + 0.5)
                add_legend(swapdata3);

                interactivity_formula(swapdata3,
                    "outcome-simon",
                    swapdata3.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.long_time < interim;
                    },
                    "pulse");
                interactivity_formula(swapdata3,
                    "outcome-gsd",
                    swapdata3.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.long_time < interim;
                    },
                    "pulse");
                interactivity_formula(swapdata3,
                    "outcome-gsd2",
                    swapdata3.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.long_time < interim;
                    },
                    "pulse");
                swap_data(swapdata3)
                single_arm_plot = init_plot("single_arm", undefined, constant_interim);
                //initialise_reactivity(single_arm_plot)

                swapdata = init_plot("swap",
                    generate_data_stopped_recruitment(),
                    width - marginRight + 0.5);
                swap_data(swapdata)
                add_legend(swapdata)

                swapdata2 = init_plot("swap2", 
                    generate_data_stopped_recruitment(),
                    generate_data_stopped_recruitment()[7].long_time + 0.5)
                add_legend(swapdata2)

                reducing_trial_duration = init_plot("reducing",
                    generate_data_stopped_recruitment(),
                    generate_data_stopped_recruitment()[7].long_time + 0.5);
                add_legend(reducing_trial_duration)

                covariate_adj_plot = init_plot("cov_adj");
                add_legend(covariate_adj_plot)

                // gsb_plot = init_plot("gsb");
                // interactivity_formula(gsb_plot,
                //     "outcome-gsb",
                //     gsb_plot.long_time,
                //     (data_point) => {
                //         interim = constant_interim;
                //         return data_point.long_time < interim;
                //     },
                //     "pulse");

                proposed_plot = init_plot("proposed");
                add_legend(proposed_plot);
                interactivity_formula(proposed_plot,
                    "y_gr1",
                    proposed_plot.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.long_time < interim && data_point.long_time < interim;
                    },
                    "pulse");
                interactivity_formula(proposed_plot,
                    "x_gr1",
                    proposed_plot.recruitment_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.recruitment_time < interim && data_point.long_time < interim;
                    },
                    "pulse");
                interactivity_formula(proposed_plot,
                    "s_gr1",
                    proposed_plot.short_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.short_time < interim && data_point.long_time < interim;
                    },
                    "pulse");
                interactivity_formula(proposed_plot,
                    "x_gr1_2",
                    proposed_plot.recruitment_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.recruitment_time < interim && data_point.short_time < interim;
                    },
                    "pulse");
                interactivity_formula(proposed_plot,
                    "s_gr1_2",
                    proposed_plot.short_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.short_time < interim;
                    },
                    "pulse");
                interactivity_formula(proposed_plot,
                    "predY1",
                    proposed_plot.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.short_time < interim;
                    },
                    "pulse_ypred");
                interactivity_title(proposed_plot, "model1", 8, "cohort 1");
                interactivity_title(proposed_plot, "pred1", 13, "cohort 2");
                proposed_plot2 = init_plot("proposed2");
                add_legend(proposed_plot2);
                interactivity_formula(proposed_plot2,
                    "predY12",
                    proposed_plot2.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.short_time < interim;
                    },
                    "pulse_ypred");
                interactivity_formula(proposed_plot2,
                    "x_gr12",
                    proposed_plot2.recruitment_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.recruitment_time < interim && data_point.short_time < interim;
                    },
                    "pulse");
                interactivity_formula(proposed_plot2,
                    "x_gr123",
                    proposed_plot2.recruitment_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.recruitment_time < interim;
                    },
                    "pulse");
                interactivity_formula(proposed_plot2,
                    "predY123",
                    proposed_plot2.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.recruitment_time < interim;
                    },
                    "pulse_ypred");
                interactivity_formula(proposed_plot2,
                    "pred222",
                    proposed_plot2.long_time,
                    (data_point) => {
                        interim = constant_interim;
                        return data_point.recruitment_time < interim;
                    },
                    "pulse_ypred");
                interactivity_title(proposed_plot2, "model2", 8, "cohort 1");
                interactivity_title(proposed_plot2, "model2", 13, "cohort 2");
                interactivity_title(proposed_plot2, "pred2", 18, "cohort 3");
                // proposed_plot3 = init_plot("proposed3");
                // interactivity_formula(proposed_plot3,
                //     "outcome-proposed3",
                //     proposed_plot3.long_time,
                //     (data_point) => {
                //         interim = constant_interim;
                //         return data_point.long_time < interim;
                //     },
                //     "pulse");
                // interactivity_formula(proposed_plot3,
                //     "predY12-2",
                //     proposed_plot3.long_time,
                //     (data_point) => {
                //         interim = constant_interim;
                //         return data_point.short_time < interim;
                //     },
                //     "pulse_ypred");
                // interactivity_formula(proposed_plot3,
                //     "predY12-22",
                //     proposed_plot3.long_time,
                //     (data_point) => {
                //         interim = constant_interim;
                //         return data_point.short_time < interim;
                //     },
                //     "pulse_ypred");
                // interactivity_formula(proposed_plot3,
                //     "predY123-21",
                //     proposed_plot3.long_time,
                //     (data_point) => {
                //         interim = constant_interim;
                //         return data_point.recruitment_time < interim;
                //     },
                //     "pulse_ypred");
                // interactivity_formula(proposed_plot3,
                //     "predY123-22",
                //     proposed_plot3.long_time,
                //     (data_point) => {
                //         interim = constant_interim;
                //         return data_point.recruitment_time < interim;
                //     },
                //     "pulse_ypred");
                // interactivity_formula(proposed_plot3,
                //     "predY123-23",
                //     proposed_plot3.long_time,
                //     (data_point) => {
                //         interim = constant_interim;
                //         return data_point.recruitment_time < interim;
                //     },
                //     "pulse_ypred");
            })
        }
    }
};
script = document.createElement("script");
script.setAttribute("id", "MathJax-script");
script.setAttribute("src", "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js");
script.setAttribute("async", "");
document.head.appendChild(script);

function init_plot(svg_identifier, data, start_interim_line, opacity) {
    if (data === undefined) {
        data = generate_data();
    }

    if (start_interim_line === undefined) {
        start_interim_line = constant_interim;
    }

    if (opacity === undefined) {
        opacity = constant_opacity;
    }

    // Create the SVG container.
    let svg = d3.select("body")
        .select("section#" + svg_identifier)
        .select("div")
        .select("svg#" + svg_identifier)
        .attr("width", width)
        .attr("height", height);

    add_axis(svg);

    let interim_line = draw_interim_line(svg, start_interim_line);
    let connection_lines = draw_connection_lines(svg, data, opacity);

    let [recruitment_time, recruitment_time_transparent] = draw_shape(svg, data, "recruitment_time", baseline_color, d3.symbolCircle, opacity);
    let [short_time, short_time_transparent] = draw_shape(svg, data, "short_time", short_color, d3.symbolCircle, opacity);
    let [long_time, long_time_transparent] = draw_shape(svg, data, "long_time", long_color, triangle_shape(), opacity);

    let plot = {
        svg, interim_line, recruitment_time, short_time, long_time,
        recruitment_time_transparent, short_time_transparent, long_time_transparent,
        ...connection_lines
    };

    plot = draw_text_field(plot, start_interim_line);
    // initialise_reactivity(plot, data);
    all_interim(plot, start_interim_line, opacity);
    // interactivity_formula(plot, svg_identifier);
    // importMathJax(plot, svg_identifier);
    return plot;
}

function draw_interim_line(svg, interim) {
    let interim_line = svg.append("g")
        .append("line")
        .attr("x1", interim)
        .attr("x2", interim)
        .attr("y1", marginBottom)
        .attr("y2", height - marginTop)
        .attr("stroke", "black")
        .attr("id", "interim_line");
    return interim_line
}

function add_legend(plot) {
    let x = marginLeft + 15;
    let x_text = x + 10;
    let y = marginTop + 15;
    let offset = 20;
    plot.svg.append("circle").attr("cx", x).attr("cy", y).attr("r", radius).style("fill", baseline_color)
    plot.svg.append("circle").attr("cx", x).attr("cy", y + offset).attr("r", radius).style("fill", short_color)
    plot.svg.append("circle").attr("cx", x).attr("cy", y + 2*offset).attr("r", radius).style("fill", long_color)
    plot.svg.append("text").attr("x", x_text).attr("y", y + 3).text("X: baseline covariates").style("font-size", "15px").attr("alignment-baseline","middle")
    plot.svg.append("text").attr("x", x_text).attr("y", y + offset + 3).text("S: short-term endpoint").style("font-size", "15px").attr("alignment-baseline","middle")
    plot.svg.append("text").attr("x", x_text).attr("y", y + 2*offset+ 3).text("Y: long-term endpoint").style("font-size", "15px").attr("alignment-baseline","middle")
}

function draw_connection_lines(svg, data, opacity) {
    let connection_lines = svg.append("g")
        .selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", (data_point) => data_point.recruitment_time + radius)
        .attr("x2", (data_point) => data_point.long_time - radius)
        .attr("y1", (_, index) => yScale(index))
        .attr("y2", (_, index) => yScale(index))
        .attr("stroke-width", 1)
        .attr("stroke", "black")
        .attr("class", "connection");
    // transparent
    let transparent_connection_lines = svg.append("g")
        .selectAll("line#transparent")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", (data_point) => data_point.recruitment_time + radius)
        .attr("x2", (data_point) => data_point.long_time - radius)
        .attr("y1", (_, index) => yScale(index))
        .attr("y2", (_, index) => yScale(index))
        .attr("stroke-width", 1)
        .attr("opacity", opacity)
        .attr("stroke", "black")
        .attr("class", "connection")
        .attr("id", "transparent");
    return { transparent_connection_lines, connection_lines };
}

function draw_text_field(plot, interim) {
    plot.text = plot.svg.append("foreignObject")
        .attr("x", marginLeft + 130)
        .attr("y", -10)
        .attr("width", 350)
        .attr("height", 50)
        .append("xhtml:body").attr("style", "margin: 0;");
    set_text(plot, interim);
    return plot;
}

function initialise_reactivity(plot) {
    plot.svg.on("touchmove mousemove", (event) => {
        let interim = d3.pointer(event)[0];
        if (!plot.svg.classed("clicked")) {
            all_interim(plot, interim < marginLeft ? marginLeft - 0.1 : (
                interim > width - marginRight ? width - marginRight : interim
            ))
            set_text(plot, interim);
        };
    });

    plot.svg.on("click", () => on_click(plot));
}

function on_click(plot) {
    if (!plot.svg.classed("clicked")) {
        add_class(plot.svg, "clicked")
        all_interim(plot, constant_interim, 500)
        set_text(plot, constant_interim);
    } else {
        remove_class(plot.svg, "clicked")
    }
}

function set_text(plot, interim, recruitment_time, short_time, long_time) {
    recruitment_time = recruitment_time === undefined ? "recruitment_time" : recruitment_time;
    short_time = short_time === undefined ? "short_time" : short_time;
    long_time = long_time === undefined ? "long_time" : long_time
    let n_long = plot.recruitment_time
        .filter(data => data[long_time] < interim)
        .size();
    let n_short = plot.recruitment_time
        .filter(data => data[short_time] < interim)
        .size();
    let n_baseline = plot.recruitment_time
        .filter(data => data[recruitment_time] < interim)
        .size();
    plot.text.html(
        "<p style='font-size: large;'><span style='color: " + baseline_color + ";'>n<sub>baseline</sub> = " + n_baseline + "</span>" +
        "&emsp;<span style='color: " + short_color + ";'> n<sub>short</sub> = " + n_short + "</span>" +
        "&emsp;<span style='color: " + long_color + ";'>n<sub>long</sub> = " + n_long + "</span>" +
        "</p>")
}
// function change_interim_with_identifier(plot, identifier, radius, color) {
//     plot.svg.selectAll("circle#" + identifier) // # filters on identifier (id)
//         // while . filters on class
//         .transition()
//         .duration(1000)
//         .attr('r', data_point => data_point[identifier] < parseInt(plot.interim_line.attr("x1")) ? radius : 0)
//         .style('fill', color);
// }

function all_interim(plot, interim, duration) {
    interim = interim === undefined ? plot.interim_line.attr("x1") : interim;
    duration = duration === undefined ? 0 : duration;

    plot.long_time
        .transition()
        .duration(duration)
        .attr('r', data_point => data_point.long_time > interim ? 0 : radius);
    plot.short_time
        .transition()
        .duration(duration)
        .attr('r', data_point => data_point.short_time > interim ? 0 : radius);
    plot.recruitment_time
        .transition()
        .duration(duration)
        .attr('r', data_point => data_point.recruitment_time > interim ? 0 : radius);
    plot.connection_lines
        .transition()
        .duration(duration)
        .attr("stroke-width", data_point => data_point.recruitment_time > interim ? 0 : 1)
        .attr("x1", data_point => data_point.recruitment_time)
        .attr("x2", data_point => data_point.long_time > interim ? interim : data_point.long_time);
    plot.interim_line.transition().duration(duration).attr("x1", interim)
        .attr("x2", interim);
    set_text(plot, interim);
}


function all_interim_cont(plot, interim, duration) {
    interim = interim === undefined ? plot.interim_line.attr("x1") : interim;
    duration = duration === undefined ? 0 : duration;

    plot.long_time
        .transition()
        .duration(duration)
        .attr('r', data_point => data_point.long_time_cont > interim ? 0 : radius);
    plot.short_time
        .transition()
        .duration(duration)
        .attr('r', data_point => data_point.short_time_cont > interim ? 0 : radius);
    plot.recruitment_time
        .transition()
        .duration(duration)
        .attr('r', data_point => data_point.recruitment_time_cont > interim ? 0 : radius);
    plot.connection_lines
        .transition()
        .duration(duration)
        .attr("stroke-width", data_point => data_point.recruitment_time_cont > interim ? 0 : 1)
        .attr("x1", data_point => data_point.recruitment_time_cont)
        .attr("x2", data_point => data_point.long_time_cont > interim ? interim : data_point.long_time_cont);
}

function add_axis(svg) {
    // Declare the x (horizontal position) scale.
    const x = d3.scaleLinear()
        .range([marginLeft, width - marginRight]);


    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
        .range([height - marginBottom, marginTop]);

    // Add the x-axis.
    svg.append("g")
        .attr("transform", `translate(0, ${height - marginBottom})`)
        .call(d3.axisBottom(x)
            .tickFormat((domain) => "")
            .ticks(0));

    // X-as label
    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height - 15)
        .text("Calendar time");

    // Add the y-axis.
    svg.append("g")
        .attr("transform", `translate(${marginLeft}, 0)`)
        .call(d3.axisLeft(y)
            .tickFormat((domain) => "")
            .ticks(0));

    // Y-as label
    svg.append("text")
        .attr("text-anchor", "begin")
        .attr("x", 0)
        .attr("y", 15)
        .text("Start recruitment");
}

function draw_shape(svg, data, field, fill_color, interim, opacity, shape) {
    let shapes = svg.selectAll("circle#" + field)
        .data(data)
        .enter()
        .append("circle");
    shapes //.attr("d", d3.symbolsFill(shape))
        .attr('cx', data_point => data_point[field])
        .attr('cy', (_, index) => yScale(index))
        .attr('id', field)
        .attr('class', (data_point) => {
            if (data_point[field] > interim) {
                return "interim";
            } else {
                return "";
            }
        })
        .attr('r', radius)
        .style('fill', fill_color);
    let transparent_shape = svg.selectAll("circle#" + field + "-transparent")
        .data(data)
        .enter()
        .append("circle")
        .attr('cx', data_point => data_point[field])
        .attr('cy', (_, index) => yScale(index))
        .attr('id', field + "-transparent")
        .attr('class', (data_point) => {
            if (data_point[field] > interim) {
                return "interim";
            } else {
                return "";
            }
        })
        .attr('r', radius)
        .style('fill', "black")
        .attr("opacity", opacity);
    return [shapes, transparent_shape];
}

var last_event = new Date().getTime();
function interactivity_formula(plot, id, item, callable, class2add) {
    y_one = document.getElementById(id);
    if (y_one !== null) {
        y_one.addEventListener("mouseenter", (event) => {
            if (last_event + 2000 < new Date().getTime()) {
                let circles = item.filter(callable);
                classes = circles.attr("class");
                classes = classes === "" ? class2add : (classes + " " + class2add);
                circles.attr("class", classes).attr("r", radius);
                timestamp = new Date().getTime();
            }
        });
        y_one.addEventListener("mouseleave", (event) => {
            if (last_event + 2000 < new Date().getTime()) {
                classes = item.attr("class").replace(class2add, "");
                item.attr("class", classes);
                if (!["outcome-simon", "outcome-gsd", "outcome-gsd2"].includes(id)){
                    all_interim(plot, constant_interim, 0);
                }
                timestamp = new Date().getTime();
            }
        });
    }
}

function interactivity_title(plot, id, n, line_name) {
    let y_one = document.getElementById(id);
    let line = plot.svg.append("line");
    let text = plot.svg.append("text"); 
    let rect_height = rectHeight(n);
    line
        .attr('x1', marginLeft)
        .attr('x2', width - marginRight)
        .attr('y1', height - rect_height - marginBottom)
        .attr('y2', height - rect_height - marginBottom)
        .attr('width', constant_interim - marginLeft + 5)
        .attr('height', rect_height)
        .attr('stroke', 'black')
        .attr('stroke-width', '0px')
        .attr('stroke-dasharray', '5')
        .attr("class", "cohort");
    text
        .transition().duration(500)
        .text()
        .attr("x", width - marginBottom - 50)
        .attr("y", height - rect_height - marginBottom + 15)
        .style("font-size", "13px")
    if (y_one !== null) {
        y_one.addEventListener("mouseenter", (event) => {
            if (last_event + 2000 < new Date().getTime()) {
                line
                    .transition().duration(500)
                    .attr('stroke-width', '2px')
                text
                    .transition().duration(500)
                    .text(line_name)
                timestamp = new Date().getTime();
            }
        });
        y_one.addEventListener("mouseleave", (event) => {
            if (last_event + 2000 < new Date().getTime()) {
                line.transition().duration(500).attr("stroke-width", "0");
                text.transition().duration(500).text("");
                timestamp = new Date().getTime();
            }
        });
    }
}

function triangle_shape() {
    // let color = "green";
    let triangleSize = 25;
    // let verticalTransform = midHeight + Math.sqrt(triangleSize);

    let triangle = d3.symbol()
        .type(d3.symbolTriangle)
        .size(triangleSize)
    return triangle
}

function move_shapes_and_lines(plot, recruitment_time, short_time, long_time, duration) {
    plot.connection_lines.transition().duration(duration)
        .attr("x1", (data_point) => data_point[recruitment_time] + radius)
        .attr("x2", (data_point) => data_point[long_time] - radius)
        .attr("y1", (_, index) => yScale(index))
        .attr("y2", (_, index) => yScale(index))
        .attr("stroke-width", 1)
        .attr("stroke", "black")
        .attr("class", "connection");

    plot.recruitment_time.transition().duration(duration)
        .attr("cx", data_point => data_point[recruitment_time]);
    plot.short_time.transition().duration(duration)
        .attr("cx", data_point => data_point[short_time]);
    plot.long_time.transition().duration(duration)
        .attr("cx", data_point => data_point[long_time]);
}


function move_transparent_shapes_and_lines(plot, recruitment_time, short_time, long_time, duration) {
    plot.transparent_connection_lines.transition().duration(duration)
        .attr("x1", (data_point) => data_point[recruitment_time] + radius)
        .attr("x2", (data_point) => data_point[long_time] - radius)
        .attr("y1", (_, index) => yScale(index))
        .attr("y2", (_, index) => yScale(index))
        .attr("stroke-width", 1)
        .attr("stroke", "black")
        .attr("class", "connection");

    plot.recruitment_time_transparent.transition().duration(duration)
        .attr("cx", data_point => data_point[recruitment_time]);
    plot.short_time_transparent.transition().duration(duration)
        .attr("cx", data_point => data_point[short_time]);
    plot.long_time_transparent.transition().duration(duration)
        .attr("cx", data_point => data_point[long_time]);
}