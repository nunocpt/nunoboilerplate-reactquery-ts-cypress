import { mount } from "cypress/react";

import "@cypress/code-coverage/support";
import "./commands";

Cypress.Commands.add("mount", mount);