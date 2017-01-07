/**
 * Created by zy on 16/12/19.
 */

describe("A suite of basic functions", function() {


	//document.getElementById("registerA").click();

    it("测试字母",function(){
        //expect("DCBA").toEqual(reverse("ABCD"));
        expect("ABCD").toEqual("ABCD");
    });

    it("数组",function(){
        expect(["red", "green"]).toEqual(["red", "green"]);
    });

});