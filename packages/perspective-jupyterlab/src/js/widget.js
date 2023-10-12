/******************************************************************************
 *
 * Copyright (c) 2018, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { PerspectiveWidget } from "./psp_widget";

/**
 * PerspectiveJupyterWidget is the ipywidgets front-end for the Perspective Jupyterlab plugin.
 */
export class PerspectiveJupyterWidget extends PerspectiveWidget {
    constructor(name = "Perspective", view, server, client) {
        super(name, view.el, server, client);
        this._view = view;
    }

    /**
     * Process the lumino message.
     *
     * Any custom lumino widget used inside a Jupyter widget should override
     * the processMessage function like this.
     */

    processMessage(msg) {
        super.processMessage(msg);
        this._view.processLuminoMessage(msg);
    }

    /**
     * Dispose the widget.
     *
     * This causes the view to be destroyed as well with 'remove'
     */

    dispose() {
        if (this.isDisposed) {
            return;
        }

        super.dispose();
        if (this._view) {
            this._view.remove();
        }

        this._view = null;
    }
}
