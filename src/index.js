import '../public/assets/stylesheet/application.scss';
import '@fortawesome/fontawesome-free/js/all';

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("../public/assets/javascript/controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
