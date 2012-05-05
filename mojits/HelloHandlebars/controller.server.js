/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HelloHandlebars', function(Y, NAME) {

/**
 * The HelloHandlebars module.
 *
 * @module HelloHandlebars
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.done({
                status: 'Template engine just works!',
                mojit_view_id: 'container',
                precompiled: ac.partial.compiler ('partials/foo')
            }, {
                view: {
                    "name": 'index',
                    "engine": 'hb'
                }
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-partial-addon', 'mojito-hb']});
