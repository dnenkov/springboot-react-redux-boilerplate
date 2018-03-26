import React from 'react';
import BaseTestUtils from "../BaseTestUtils";
import TestUtils from "react-dom/test-utils";
import Footer from "components/Footer";
import {Link} from "react-router-dom";

describe("FooterTest", () => {
  it("should have links to all, active and completed", () => {
    const footer = BaseTestUtils.renderWithRouter(<Footer />);

    const links = TestUtils.scryRenderedComponentsWithType(footer, Link);

    expect(links.length).toEqual(3);
    expect(links[0].props.to).toEqual("/");
    expect(links[1].props.to).toEqual("/ACTIVE");
    expect(links[2].props.to).toEqual("/COMPLETED");

    expect(links[0].props.children).toEqual("All");
    expect(links[1].props.children).toEqual("Active");
    expect(links[2].props.children).toEqual("Completed");
  });
});