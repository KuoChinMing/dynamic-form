import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import OperationPanel from "@/components/OperationPanel.vue";

describe("Operation Panel", () => {
  it("find parent node", () => {
    const template = {
      type: "box",
      id: 0,
      contents: [
        {
          type: "box",
          id: 1,
          contents: [
            {
              type: "textField",
              id: 2,
              bindingKey: "textField1",
            },
            {
              type: "box",
              id: 3,
              contents: [
                {
                  type: "textField",
                  id: 4,
                  bindingKey: "textField2",
                },
              ],
            },
          ],
        },
        {
          type: "box",
          id: 5,
          contents: [
            {
              type: "textField",
              id: 6,
              bindingKey: "textField3",
            },
          ],
        },
      ],
    };
    const bindingData = {
      textField1: null,
      textField2: null,
      textField3: null,
    };
    const wrapper = shallowMount(OperationPanel, {
      propsData: { template, bindingData },
    });
    
    expect(wrapper.vm.findParentNode(template.contents[0])).to.equal(template);
  });
});
