let count1 = 0;
const value = document.querySelector("#value");
const ccs = document.querySelectorAll(".cc");
ccs.forEach(function (cc) {
cc.addEventListener("click", function (e) {
const styles = e.currentTarget.classList;
if (styles.contains("decrease")) {
count1--;
} else if (styles.contains("increase")) {
count1++;
                                    } else {
                                    count1 = 0;
                                    }
                                    if (count1 > 0) {
                                    value.style.color = "black";
                                    }
                                    if (count1 < 0) {
                                    value.style.color = "black";
                                    }
                                    if (count1 === 0) {
                                    value.style.color = "#222";
                                    }
                                    value.textContent = count1;
                                    });
                                    }); 
                                    let count2 = 0;
                                    const value2 = document.querySelector("#value2");
                                    const bts = document.querySelectorAll(".bt");
                                    bts.forEach(function (bt) {
                                    bt.addEventListener("click", function (e) {
                                    const styles = e.currentTarget.classList;
                                    if (styles.contains("decrease")) {
                                    count2--;
                                    } else if (styles.contains("increase")) {
                                    count2++;
                                    } else {
                                    count2 = 0;
                                    }
                                    if (count2 > 0) {
                                    value2.style.color = "black";
                                    }
                                    if (count2 < 0) {
                                    value2.style.color = "black";
                                    }
                                    if (count2 === 0) {
                                    value2.style.color = "#222";
                                    }
                                    value2.textContent = count2;
                                    });
                                    });  
                                    let count3 = 0;
                                    const value3 = document.querySelector("#value3");
                                    const cts = document.querySelectorAll(".ct");
                                    cts.forEach(function (ct) {
                                    ct.addEventListener("click", function (e) {
                                    const styles = e.currentTarget.classList;
                                    if (styles.contains("decrease")) {
                                    count3--;
                                    } else if (styles.contains("increase")) {
                                    count3++;
                                    } else {
                                    count3 = 0;
                                    }
                                    if (count3 > 0) {
                                    value3.style.color = "black";
                                    }
                                    if (count3 < 0) {
                                    value3.style.color = "black";
                                    }
                                    if (count3 === 0) {
                                    value3.style.color = "#222";
                                    }
                                    value3.textContent = count3;
                                    });
                                    });