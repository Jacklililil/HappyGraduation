const images = [
"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be0f9768bbbf4e1096cfe73858a92ab5~tplv-k3u1fbpfcp-watermark.image?",
"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/807d9294078b43d49c89c16b1276455b~tplv-k3u1fbpfcp-watermark.image?",
"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff91f27c7ca648bdb707dcedcf267906~tplv-k3u1fbpfcp-watermark.image?",
"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00c9e58ec9db43a5bfead680c188ebe7~tplv-k3u1fbpfcp-watermark.image?",
"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/431a8280de604f8f88fff3a3a743ec42~tplv-k3u1fbpfcp-watermark.image?",
"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a36a09d9e0264413afbf8bcd0c7c4502~tplv-k3u1fbpfcp-watermark.image?",
"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa1b6a6c924b4d8589bfc9f6d9178692~tplv-k3u1fbpfcp-watermark.image?",

    // "https://i.pinimg.com/originals/3d/22/45/3d224511a5e13317e46e37bee1d249dd.gif",
	// "https://data.whicdn.com/images/251238216/original.gif",
	
	// "https://i.pinimg.com/originals/b0/10/e9/b010e954f94acbd034917b2d6931bd79.gif",
	// "https://64.media.tumblr.com/5f4c0252b15dda55028536c5a8923c7d/b691a90722d7bbb5-c8/s500x750/34aac55dfd7302e41fec400ba9636edeadb1890a.gif",
	// "https://64.media.tumblr.com/746e848c8b0cf90bc7938599421e6b4e/tumblr_pbhfk0rEth1txe8seo1_500.gif",
	// "https://media2.giphy.com/media/Wm9XlKG2xIMiVcH4CP/giphy.gif"
];

// $(document).ready(function () {
//     alert("我的第一个jQuery代码!");
// });


$(document).ready(function () {
    let current = 0;
    $("#mirror-content").on("click", function () {
        $(this).css({
            "background-image": `url(${images[++current % images.length]})`
        });
    });
});


// $(function(){


    // $(".wall").ready(function () {
    //     let current = 0;
    //     $("#mirror-content").on("click", function () {
    //         $(this).css({
    //             "background-image": `url(${images[++current % images.length]})`
    //         });
    //     });
    // });


    // $(document).ready(function () {
    //     let current = 0;
    //     $("#mirror-content").on("click", function () {
    //         $(this).css({
    //             "background-image": `url(${images[++current % images.length]})`
    //         });
    //     });
    // });
    

// })
