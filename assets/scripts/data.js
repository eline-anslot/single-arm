const n = 25;
const radius = 5;
const width = 600;
const height = 350;
const marginRight = 20;
const marginLeft = 40;
const marginTop = 20;
const marginBottom = 30;
const constant_opacity = 0.1;
const constant_interim = xScale(0.5, marginLeft, width - (marginRight));
const n_1 = 8;
const baseline_color = "#117733";
const short_color = "#AA4499";
const long_color = "#332288";

function generate_data() {
    let data = new Array(n)
        .fill()
        .map((_, index) => {
            // Dus nu kan je hier code schrijven om je perfecte data te generen
            let short_wait = 80;
            let wait_time = 80;
            let recruitment_time = xScale(index / n, marginLeft, width - (marginRight + short_wait + wait_time));

            return {// Je moet geen variabelen per se gebruiken maar het kan wel mooi/duidelijk zijn zo
                recruitment_time: recruitment_time,
                short_time: recruitment_time + short_wait,
                long_time: recruitment_time + short_wait + wait_time
            };
        })
        .sort((a, b) => a.recruitment_time - b.recruitment_time);
    return data
}

function generate_data_stopped_recruitment(interim_n1) {
    let data = new Array(n)
        .fill()
        .map((_, index) => {
            // Dus nu kan je hier code schrijven om je perfecte data te generen
            let short_wait = 50;
            let wait_time = 50;
            let wait_results = 80;
            let recruitment_time;
            recruitment_time = xScale(index / n, marginLeft, width - (marginRight + (short_wait + wait_time) * 2 + wait_results));
            if (index >= n_1) {
                recruitment_time += short_wait + wait_time + wait_results;
            } 

            let recruitment_time_cont = 40 + 10.4 * index;

            return {// Je moet geen variabelen per se gebruiken maar het kan wel mooi/duidelijk zijn zo
                recruitment_time: recruitment_time,
                short_time: recruitment_time + short_wait,
                long_time: recruitment_time + short_wait + wait_time,
                recruitment_time_cont: recruitment_time_cont,
                short_time_cont: recruitment_time_cont + short_wait,
                long_time_cont: recruitment_time_cont + short_wait + wait_time
            };
        })
    let index = 0;
    for (const data_point of data) {
        data_point.recruitment_time_kunz_et_al = data_point.recruitment_time + (index >= n_1 ? -40 : 0)
        data_point.short_time_kunz_et_al = data_point.short_time + (index >= n_1 ? -40 : 0)
        data_point.long_time_kunz_et_al = data_point.long_time + (index >= n_1 ? -40 : 0)
        index += 1;
    }
    return data;
}


function generate_data_continuous_recruitment() {
    let data = new Array(n)
        .fill()
        .map((_, index) => {
            // Dus nu kan je hier code schrijven om je perfecte data te generen
            let short_wait = 60;
            let wait_time = 60;
            let recruitment_time = 40 + 8.8 * index;

            return {// Je moet geen variabelen per se gebruiken maar het kan wel mooi/duidelijk zijn zo
                recruitment_time: recruitment_time,
                short_time: recruitment_time + short_wait,
                long_time: recruitment_time + short_wait + wait_time
            };
        })
        .sort((a, b) => a.recruitment_time - b.recruitment_time);
    return data;
}