import FrustumCuller from './FrustumCuller';

/**
 * Culling manager
 *
 * @category Culling
 */
class CullingManager {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Cullers
         *
         * @type {Map<string, Culler>}
         * @private
         */
        this.cullers = new Map();

        // Add a Frustum Culler by default
        this.add('frustum', new FrustumCuller());
    }

    /**
     * Add a Culler instance
     *
     * @param {string} name Name to assign
     * @param {Culler} culler A Culler instance
     */
    add(name, culler) {
        this.cullers.set(name, culler);
    }

    /**
     * Enable/Disable a Culler
     *
     * @param {string} name Name of the Culler
     * @param {boolean} value True to enable, false to disable
     */
    enable(name, value) {
        const culler = this.cullers.get(name);
        if (culler) {
            culler.enable(value);
        }
    }

    /**
     * Execute culling
     *
     * @param {Scene} scene A Scene instance
     * @param {Camera} camera A Camera instance
     */
    execute(scene, camera) {
        let i = 0;
        for (const culler of this.cullers.values()) {
            culler.execute(scene, camera, (i === 0));
            i += 1;
        }
    }
}

export default CullingManager;
