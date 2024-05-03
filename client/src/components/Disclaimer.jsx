import React from "react";

const Disclaimer = () => {
  return (
    <div style={{ height: "100vh", marginTop: "20px" }}>
      <h1 className="text-center text-4xl font-medium mb-8 mt-8">Disclaimer</h1>
      <div
        className="content  align-items-center"
        style={{
          textAlign: "center",
        }}
      >
        <p>
          I’m Not VIOLATING Any COPYRIGHTED LAW. If Anything Is Against LAW,
          Please Notify Me So That It Can Be Removed.
        </p>

        <p>Contact us </p>

        <p>
          We remove postings as soon as we can, usually within 4 days. Thank you
          for your understanding.
        </p>

        <h3>Copyrighted Contents???</h3>
        <p>
          What to do if I want you to remove certain copyrighted comments from
          your website?
        </p>
        <p>
          What to do if I want you to remove certain copyrighted comments from
          your website? Please note that we do not host any copyrighted content
          on this website. The comments (text) contains only information shared
          by users that do not contain data that might be copyrighted in any
          way.
          <p>
            However, we offer a service to remove comments from our website if
            the copyright holder of the content requests so. These removal
            requests are only valid if:
          </p>
        </p>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            You are, or your company is, the copyright holder of the content in
            question.
          </li>
          <li>You provide the exact URLs to the comment.</li>
          <li>You provide the complete name(s) of the content in question.</li>
          <li>
            You send the removal request using a verifiable email address (e.g.
            address@yourname/yourcompany.com).
          </li>
        </ul>
        <p>
          If your request complies with all of these rules, send a mail with
          Contact us page. Please keep the correspondence polite.
        </p>
        <p>
          We remove postings as soon as we can, usually within 4 days. Keep in
          mind that we can only handle removal requests that comply with the
          above rules.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
