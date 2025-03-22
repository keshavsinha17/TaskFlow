import React from "react";
const LandingPage = () => {
    return (
        <div>
            <body class="bg-gray-900 text-gray-100 font-[&#39;Inter&#39;]">
                <nav class="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
                    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex">
                                <div class="flex-shrink-0 flex items-center">
                                    <img class="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="TaskFlow" />
                                </div>
                                <div class="hidden sm:ml-8 sm:flex sm:space-x-8">
                                    <a href="#features" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Features</a>
                                    <a href="#pricing" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Pricing</a>
                                    <a href="#testimonials" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Testimonials</a>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <button class="!rounded-button text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Sign in</button>
                                <button class="!rounded-button bg-custom hover:bg-custom/90 px-4 py-2 text-sm font-medium">Start Free Trial</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <main>
                    <section class="pt-40 pb-24 relative overflow-hidden"><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-custom/20 rounded-full blur-[128px] -z-10 opacity-50"></div>
                        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div class="text-center max-w-4xl mx-auto">
                                <h1 class="text-6xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Real-time Task Management That Moves With Your Team</h1>
                                <p class="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">Watch your team collaboration unfold in real-time. Boost productivity and stay in sync with instant updates.</p>
                                <div class="flex justify-center gap-4">
                                    <button class="!rounded-button bg-custom hover:bg-custom/90 px-8 py-4 text-lg font-medium shadow-lg shadow-custom/25 transition-all hover:scale-105">Start Free Trial</button>
                                    <button class="!rounded-button bg-gray-800/80 hover:bg-gray-700 px-8 py-4 text-lg font-medium flex items-center gap-2 backdrop-blur-sm transition-all hover:scale-105">
                                        <i class="fas fa-play-circle"></i>
                                        Watch Demo
                                    </button>
                                </div>
                            </div>
                            <div class="mt-20 relative"><div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                                <img src="https://creatie.ai/ai/api/search-image?query=A 3D vector-style image showing a modern task management dashboard interface with real-time collaboration features, floating elements, and a clean design. The interface displays task cards, team avatars, and live updates in a visually appealing way against a dark background with subtle gradients.&width=1200&height=600&orientation=landscape&removebg=true&flag=1b96ba4e-04ae-4725-82ab-61d94429b760&flag=ee3059dc-66f9-4d74-9b2d-af7f4c2a2c71" alt="TaskFlow Dashboard" class="rounded-xl shadow-2xl border border-gray-800 hover:scale-[1.02] transition-transform duration-500 relative z-0" />
                            </div>
                        </div>
                    </section>
                    <section id="features" class="py-20 bg-gray-800/50">
                        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="grid md:grid-cols-3 gap-8">
                                <div class="p-8 bg-gray-800 rounded-xl border border-gray-700">
                                    <div class="w-12 h-12 bg-custom/20 rounded-lg flex items-center justify-center mb-6">
                                        <i class="fas fa-bolt text-custom text-2xl"></i>
                                    </div>
                                    <h3 class="text-xl font-semibold mb-4">Live Task Updates</h3>
                                    <p class="text-gray-400">See changes as they happen. No more refresh needed. Keep your team aligned with real-time task status updates.</p>
                                </div>
                                <div class="p-8 bg-gray-800 rounded-xl border border-gray-700">
                                    <div class="w-12 h-12 bg-custom/20 rounded-lg flex items-center justify-center mb-6">
                                        <i class="fas fa-users text-custom text-2xl"></i>
                                    </div>
                                    <h3 class="text-xl font-semibold mb-4">Team Collaboration</h3>
                                    <p class="text-gray-400">Work together seamlessly. Comment, assign, and track progress in real-time. Perfect for remote teams.</p>
                                </div>
                                <div class="p-8 bg-gray-800 rounded-xl border border-gray-700">
                                    <div class="w-12 h-12 bg-custom/20 rounded-lg flex items-center justify-center mb-6">
                                        <i class="fas fa-chart-line text-custom text-2xl"></i>
                                    </div>
                                    <h3 class="text-xl font-semibold mb-4">Performance Analytics</h3>
                                    <p class="text-gray-400">Track productivity trends and team performance with detailed analytics and customizable dashboards.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-20">
                        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="text-center mb-16">
                                <h2 class="text-3xl font-bold mb-4">Trusted by 10,000+ Teams Worldwide</h2>
                                <p class="text-gray-400">Join industry leaders who&#39;ve transformed their workflow with TaskFlow</p>
                            </div>
                            <div class="glide">
                                <div class="glide__track" data-glide-el="track">
                                    <ul class="glide__slides">
                                        <li class="glide__slide">
                                            <div class="bg-gray-800 p-8 rounded-xl border border-gray-700">
                                                <p class="text-gray-300 mb-6">&#34;TaskFlow has revolutionized how our team collaborates. The real-time updates have increased our productivity by 40%.&#34;</p>
                                                <div class="flex items-center">
                                                    <img src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a confident female tech executive in her 40s, wearing business attire against a neutral background. The image should convey leadership and approachability.&width=100&height=100&orientation=squarish&flag=7828b667-430a-4b8e-bdfc-bb39602e3180&flag=7a5aa277-e6d0-430d-90f0-75cf756ad1e7" alt="Sarah Johnson" class="w-12 h-12 rounded-full mr-4" />
                                                    <div>
                                                        <h4 class="font-medium">Sarah Johnson</h4>
                                                        <p class="text-gray-400 text-sm">CTO at TechCorp</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="glide__bullets" data-glide-el="controls[nav]">
                                    <button class="glide__bullet" data-glide-dir="=0"></button>
                                    <button class="glide__bullet" data-glide-dir="=1"></button>
                                    <button class="glide__bullet" data-glide-dir="=2"></button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="pricing" class="py-20 bg-gray-800/50">
                        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="text-center mb-16">
                                <h2 class="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
                                <p class="text-gray-400">Choose the plan that best fits your team</p>
                            </div>
                            <div class="grid md:grid-cols-3 gap-8">
                                <div class="p-8 bg-gray-800 rounded-xl border border-gray-700">
                                    <h3 class="text-2xl font-bold mb-4">Starter</h3>
                                    <div class="mb-6">
                                        <span class="text-4xl font-bold">$9</span>
                                        <span class="text-gray-400">/user/month</span>
                                    </div>
                                    <ul class="space-y-4 mb-8">
                                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Up to 10 team members</li>
                                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Real-time updates</li>
                                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Basic analytics</li>
                                    </ul>
                                    <button class="!rounded-button w-full bg-gray-700 hover:bg-gray-600 py-3 font-medium">Get Started</button>
                                </div>
                                <div class="p-8 bg-custom rounded-xl border-2 border-custom relative">
                                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-custom px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
                                    <h3 class="text-2xl font-bold mb-4">Professional</h3>
                                    <div class="mb-6">
                                        <span class="text-4xl font-bold">$19</span>
                                        <span class="text-gray-200">/user/month</span>
                                    </div>
                                    <ul class="space-y-4 mb-8">
                                        <li class="flex items-center"><i class="fas fa-check text-white mr-2"></i> Unlimited team members</li>
                                        <li class="flex items-center"><i class="fas fa-check text-white mr-2"></i> Advanced analytics</li>
                                        <li class="flex items-center"><i class="fas fa-check text-white mr-2"></i> Priority support</li>
                                        <li class="flex items-center"><i class="fas fa-check text-white mr-2"></i> Custom integrations</li>
                                    </ul>
                                    <button class="!rounded-button w-full bg-white text-custom hover:bg-gray-100 py-3 font-medium">Get Started</button>
                                </div>
                                <div class="p-8 bg-gray-800 rounded-xl border border-gray-700">
                                    <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
                                    <div class="mb-6">
                                        <span class="text-4xl font-bold">Custom</span>
                                    </div>
                                    <ul class="space-y-4 mb-8">
                                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Dedicated support</li>
                                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Custom development</li>
                                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> SLA guarantee</li>
                                    </ul>
                                    <button class="!rounded-button w-full bg-gray-700 hover:bg-gray-600 py-3 font-medium">Contact Sales</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-20">
                        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 class="text-3xl font-bold mb-6">Transform Your Team&#39;s Productivity Today</h2>
                            <p class="text-gray-400 mb-8">Join thousands of teams already using TaskFlow to boost their productivity</p>
                            <button class="!rounded-button bg-custom hover:bg-custom/90 px-8 py-4 text-lg font-medium">Start Your Free Trial</button>
                            <p class="mt-4 text-sm text-gray-400">14-day free trial, no credit card required</p>
                        </div>
                    </section>
                </main>
                <footer class="bg-gray-800/50 py-12">
                    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="grid md:grid-cols-4 gap-8">
                            <div>
                                <img class="h-8 w-auto mb-4" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="TaskFlow" />
                                <p class="text-gray-400">Real-time task management for modern teams</p>
                            </div>
                            <div>
                                <h4 class="font-medium mb-4">Product</h4>
                                <ul class="space-y-2 text-gray-400">
                                    <li><a href="#" class="hover:text-white">Features</a></li>
                                    <li><a href="#" class="hover:text-white">Pricing</a></li>
                                    <li><a href="#" class="hover:text-white">Security</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-medium mb-4">Company</h4>
                                <ul class="space-y-2 text-gray-400">
                                    <li><a href="#" class="hover:text-white">About</a></li>
                                    <li><a href="#" class="hover:text-white">Blog</a></li>
                                    <li><a href="#" class="hover:text-white">Careers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-medium mb-4">Connect</h4>
                                <ul class="space-y-2 text-gray-400">
                                    <li><a href="#" class="hover:text-white">Twitter</a></li>
                                    <li><a href="#" class="hover:text-white">LinkedIn</a></li>
                                    <li><a href="#" class="hover:text-white">GitHub</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                            <p>© 2024 TaskFlow. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </body>
        </div>
    );
};
export default LandingPage;