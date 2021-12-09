(function () {
    /*     https://www.youtube.com/watch?v=mAqYJF-yxO8 */
    class MyAszinkron {
        constructor() {}

        async getAdatok(apivegpont, tomb, myCallback, myCallbackhiba) {
            const response = await fetch(apivegpont, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                //body: JSON.stringify(data)
            }).catch((err) => {
                console.log(err.response.data);
            });
            console.log(response);
            if (response.ok) {
                tomb = await response.json();
                /* tomb = vmi.message; */
                console.log(tomb);
                myCallback(tomb);
            } else {
                myCallbackhiba();
            }            
        }
    }
    window.MyAszinkron = MyAszinkron;
})();
