function swap_data(plot) {
    let duration = 1000;
    let recruitment_time, long_time, short_time;
    let classes = plot.svg.attr("class")
    if (classes.includes("data2")) {
        recruitment_time = "recruitment_time";
        short_time = "short_time";
        long_time = "long_time";
        plot.svg.attr("class", classes.replace("data2", "data1"));
    } else {
        recruitment_time = "recruitment_time_cont";
        short_time = "short_time_cont";
        long_time = "long_time_cont";
        plot.svg.attr("class", classes.replace("data1", "data2"));
    }
    plot.connection_lines.transition().duration(duration)
        .attr("x1", (data_point) => data_point[recruitment_time] + radius)
        .attr("x2", (data_point) => data_point[long_time] - radius)
        .attr("y1", (_, index) => yScale(index))
        .attr("y2", (_, index) => yScale(index))
        .attr("stroke-width", 1)
        .attr("stroke", "black")
        .attr("class", "connection");

    plot.recruitment_time
        .transition()
        .duration(duration)
        .attr('r', radius)
        .attr("cx", data_point => data_point[recruitment_time])
        .style("color", baseline_color);
    plot.short_time
        .transition()
        .duration(duration)
        .attr('r', radius)
        .attr("cx", data_point => data_point[short_time])
        .style("color", short_color);
    plot.long_time // # filters on identifier (id)
        .transition()
        .duration(duration)
        .attr('r', radius)
        .attr("cx", data_point => data_point[long_time])
        .style("color", long_color);
    
    let interim = generate_data_stopped_recruitment()[n_1 - 1].long_time + 0.5
    plot.interim_line
        .transition()
        .duration(duration)
        .attr("x1", interim)//width - marginRight)
        .attr("x2", interim);//width - marginRight);

    move_transparent_shapes_and_lines(plot, "recruitment_time", "short_time", "long_time", duration);
    set_text(plot, interim, recruitment_time, short_time, long_time);
    clear_button(plot);
}


function simon_two_stage(plot) {
    let duration = 1000;
    reset_data_class(plot.svg);
    move_shapes_and_lines(
        plot,
        "recruitment_time",
        "short_time",
        "long_time",
        duration
    );
    move_transparent_shapes_and_lines(
        plot,
        "recruitment_time",
        "short_time",
        "long_time",
        duration
    );
    let interim = generate_data_stopped_recruitment()[n_1 - 1].long_time + 0.5
    all_interim(plot, interim, duration);

    let long = plot.long_time.filter(data => data.long_time < interim);
    clear_button(plot);
    add_pulse(long);
}

function reset(plot){
    let duration = 1000;
    reset_data_class(plot.svg);
    move_shapes_and_lines(
        plot,
        "recruitment_time",
        "short_time",
        "long_time",
        duration
    );
    move_transparent_shapes_and_lines(
        plot,
        "recruitment_time",
        "short_time",
        "long_time",
        duration
    );
    let interim = generate_data_stopped_recruitment()[n_1 - 1].long_time + 0.5
    all_interim(plot, interim, duration);

    let long = plot.long_time.filter(data => data.long_time < interim);
    clear_button(plot);
}

function kunz_et_al(plot) {
    let duration = 1000;
    reset_data_class(plot.svg);
    move_shapes_and_lines(
        plot,
        "recruitment_time_kunz_et_al",
        "short_time_kunz_et_al",
        "long_time_kunz_et_al",
        duration
    );
    move_transparent_shapes_and_lines(
        plot,
        "recruitment_time_kunz_et_al",
        "short_time_kunz_et_al",
        "long_time_kunz_et_al",
        duration
    );
    let interim = generate_data_stopped_recruitment()[n_1 - 1].short_time + 0.5
    all_interim(plot, interim, duration);

    let short = plot.short_time.filter(data => data.short_time < interim);
    clear_button(plot);
    add_pulse(short);
}

function zocholl_et_al(plot) {
    let duration = 1000;
    reset_data_class(plot.svg);
    move_shapes_and_lines(
        plot,
        "recruitment_time_kunz_et_al",
        "short_time_kunz_et_al",
        "long_time_kunz_et_al",
        duration
    );
    move_transparent_shapes_and_lines(
        plot,
        "recruitment_time_kunz_et_al",
        "short_time_kunz_et_al",
        "long_time_kunz_et_al",
        duration
    );
    let interim = generate_data_stopped_recruitment()[n_1 - 1].short_time + 0.5
    all_interim(plot, interim, duration);

    let short = plot.short_time.filter(data => data.short_time < interim);
    let long = plot.long_time.filter(data => data.long_time < interim);
    clear_button(plot);
    add_pulse(short);
    add_pulse(long);
}



function covariate_adj(plot) {
    let interim = plot.interim_line.attr("x1");
    let long = plot.long_time.filter(data => data.long_time < interim);
    let short = plot.short_time.filter(data => data.short_time < interim);
    let bas = plot.recruitment_time.filter(data => data.recruitment_time < interim);
    clear_button(plot);
    add_pulse(long);
    add_pulse(short);
    add_pulse(bas);
}

function unadj(plot) {
    let interim = plot.interim_line.attr("x1");
    let long = plot.long_time.filter(data => data.long_time < interim);
    clear_button(plot);
    add_pulse(long);
}

function clear_button({ long_time, recruitment_time, short_time, interim_line }) {
    let interim = interim_line.attr("x1");
    let long = long_time.filter(data => data.long_time < interim);
    let short = short_time.filter(data => data.short_time < interim);
    let bas = recruitment_time.filter(data => data.recruitment_time < interim);

    clear_pulse(long);
    clear_pulse(bas);
    clear_pulse(short);
}

function add_pulse(idem) {
    classes = idem.attr("class");
    classes = classes === "" ? "pulse" : (classes + " pulse");
    idem.attr("class", classes);
}

function clear_pulse(idem) {
    classes = idem.attr("class");
    idem.attr("class", classes.replace("pulse", ""));
}

