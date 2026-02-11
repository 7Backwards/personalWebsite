import './styles/index.css'
import './styles/components.css'
import './styles/animations.css'

import { setupNavigation } from './js/navigation.js'
import { setupAnimations } from './js/animations.js'
import { setupTypingEffect } from './js/typing.js'

document.addEventListener('DOMContentLoaded', () => {
    // Initialize modules
    setupNavigation();
    setupAnimations();
    setupTypingEffect();
    
    // Log init for debug
    console.log('Portfolio initialized');
});
