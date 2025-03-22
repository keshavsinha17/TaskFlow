import { useState } from 'react';
const Dashboard = () => {
    return (
        <div>
            <body class="bg-gray-900 text-gray-100 font-[Inter] min-h-screen flex">
                <aside class="w-80 bg-gray-800 border-r border-gray-700 h-screen fixed left-0 flex flex-col">
                    <div class="p-6 border-b border-gray-700">
                        <div class="flex items-center gap-4">
                            <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="TaskSync Logo" class="h-8" />
                            <h1 class="text-xl font-semibold">TaskSync</h1>
                        </div>
                    </div>

                    <div class="p-6 border-b border-gray-700">
                        <div class="flex items-center gap-4">
                            <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20young%20business%20person%20with%20a%20friendly%20smile%20on%20neutral%20background&width=40&height=40&orientation=squarish&flag=a2920832-9421-46a1-afb5-794df5ca782a&flag=ab723606-f6df-4623-9379-2577439919ee" class="w-10 h-10 rounded-full" alt="Profile" />
                            <div>
                                <h3 class="font-medium">John Doe</h3>
                                <p class="text-sm text-gray-400">Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto">
                        <div class="p-6">
                            <button class="w-full bg-custom text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2">
                                <i class="fas fa-plus"></i>
                                Create Team
                            </button>

                            <div class="relative mb-4">
                                <input type="text" placeholder="Team Code" class="w-full bg-gray-700 border-0 !rounded-button py-2 px-4 text-gray-100 placeholder-gray-400" />
                                <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                            <div class="space-y-2">
                                <div class="bg-gray-700 p-4 !rounded-button hover:bg-gray-600 cursor-pointer">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h3 class="font-medium">Design Team</h3>
                                            <p class="text-sm text-gray-400">8 members</p>
                                        </div>
                                        <span class="h-2 w-2 bg-green-500 rounded-full"></span>
                                    </div>
                                </div>
                                <div class="bg-gray-700 p-4 !rounded-button hover:bg-gray-600 cursor-pointer">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h3 class="font-medium">Development Team</h3>
                                            <p class="text-sm text-gray-400">12 members</p>
                                        </div>
                                        <span class="h-2 w-2 bg-green-500 rounded-full"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <main class="ml-80 flex-1 min-h-screen">
                    <header class="bg-gray-800 border-b border-gray-700 p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-2xl font-semibold">Design Team</h2>
                                <p class="text-gray-400">8 team members · 24 active tasks</p>
                            </div>
                            <button class="bg-red-500 text-white py-2 px-4 !rounded-button hover:bg-red-600">
                                <i class="fas fa-sign-out-alt mr-2"></i>
                                Leave Team
                            </button>
                        </div>
                    </header>
                    <div class="p-6">
                        <div class="grid grid-cols-3 gap-6">
                            <div class="bg-gray-800 !rounded-button p-4">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-semibold">To Do</h3>
                                    <span class="bg-gray-700 text-sm py-1 px-2 rounded">4</span>
                                </div>
                                <div class="space-y-4"><button class="w-full bg-gray-900 text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2 hover:bg-gray-700"><i class="fas fa-plus"></i>Add Task</button>
                                    <div class="bg-gray-700 p-4 !rounded-button">
                                        <div class="flex items-center justify-between mb-2">
                                            <h4 class="font-medium">Design System Updates</h4>
                                            <div class="flex gap-2">
                                                <button class="text-gray-400 hover:text-white"><i class="fas fa-pencil"></i></button>
                                                <button class="text-gray-400 hover:text-white"><i class="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                        <p class="text-sm text-gray-400 mb-3">Update component library with new design tokens</p>
                                        <div class="flex items-center gap-2">
                                            <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20young%20designer%20with%20creative%20style%20on%20neutral%20background&width=24&height=24&orientation=squarish&flag=3a3442b2-e888-4fd3-a942-9a41b8bad0d7&flag=d61fd811-0ff6-43a0-ae6c-d74a653f3eac" class="w-6 h-6 rounded-full" alt="Avatar" />
                                            <span class="text-sm text-gray-400">Sarah Chen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-800 !rounded-button p-4">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-semibold">In Progress</h3>
                                    <span class="bg-gray-700 text-sm py-1 px-2 rounded">3</span>
                                </div>
                                <div class="space-y-4"><button class="w-full bg-gray-900 text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2 hover:bg-gray-700"><i class="fas fa-plus"></i>Add Task</button>
                                    <div class="bg-gray-700 p-4 !rounded-button">
                                        <div class="flex items-center justify-between mb-2">
                                            <h4 class="font-medium">User Research</h4>
                                            <div class="flex gap-2">
                                                <button class="text-gray-400 hover:text-white"><i class="fas fa-pencil"></i></button>
                                                <button class="text-gray-400 hover:text-white"><i class="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                        <p class="text-sm text-gray-400 mb-3">Conduct user interviews for new feature</p>
                                        <div class="flex items-center gap-2">
                                            <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20young%20researcher%20with%20glasses%20on%20neutral%20background&width=24&height=24&orientation=squarish&flag=abaf3311-835d-4045-a1c3-1d3432c8c3b4&flag=031fdafb-ae4e-44e4-b1fd-2df0326f6c2f" class="w-6 h-6 rounded-full" alt="Avatar" />
                                            <span class="text-sm text-gray-400">Mike Johnson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-800 !rounded-button p-4">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-semibold">Done</h3>
                                    <span class="bg-gray-700 text-sm py-1 px-2 rounded">2</span>
                                </div>
                                <div class="space-y-4"><button class="w-full bg-gray-900 text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2 hover:bg-gray-700"><i class="fas fa-plus"></i>Add Task</button>
                                    <div class="bg-gray-700 p-4 !rounded-button">
                                        <div class="flex items-center justify-between mb-2">
                                            <h4 class="font-medium">Wireframe Review</h4>
                                            <div class="flex gap-2">
                                                <button class="text-gray-400 hover:text-white"><i class="fas fa-pencil"></i></button>
                                                <button class="text-gray-400 hover:text-white"><i class="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                        <p class="text-sm text-gray-400 mb-3">Review and approve homepage wireframes</p>
                                        <div class="flex items-center gap-2">
                                            <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20senior%20designer%20with%20confident%20expression%20on%20neutral%20background&width=24&height=24&orientation=squarish&flag=d37a72a4-e382-4aa6-b9f4-ed4a99a9697e&flag=95691661-a489-477b-8b7c-be12b4ad31e3" class="w-6 h-6 rounded-full" alt="Avatar" />
                                            <span class="text-sm text-gray-400">Alex Wong</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div class="fixed bottom-4 right-4 bg-gray-800 text-white p-4 !rounded-button shadow-lg flex items-center gap-3">
                    <i class="fas fa-check-circle text-green-500"></i>
                    <p>Task &#34;Design System Updates&#34; moved to In Progress</p>
                </div>
            </body>
        </div>
    );
};
export default Dashboard;


// <!DOCTYPE html><html lang="en"><head>
//     <meta charset="UTF-8"/>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//     <title>TaskSync - Collaborative Task Management</title>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
//     <link href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css" rel="stylesheet"/>
//     <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
//     <script src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js" data-color="#000000" data-border-radius="medium"></script>
// </head>
<body class="bg-gray-900 text-gray-100 font-[Inter] min-h-screen flex">
    <aside class="w-80 bg-gray-800 border-r border-gray-700 h-screen fixed left-0 flex flex-col">
        <div class="p-6 border-b border-gray-700">
            <div class="flex items-center gap-4">
                <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="TaskSync Logo" class="h-8" />
                <h1 class="text-xl font-semibold">TaskSync</h1>
            </div>
        </div>

        <div class="p-6 border-b border-gray-700">
            <div class="flex items-center gap-4">
                <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20young%20business%20person%20with%20a%20friendly%20smile%20on%20neutral%20background&width=40&height=40&orientation=squarish&flag=a2920832-9421-46a1-afb5-794df5ca782a&flag=ab723606-f6df-4623-9379-2577439919ee" class="w-10 h-10 rounded-full" alt="Profile" />
                <div>
                    <h3 class="font-medium">John Doe</h3>
                    <p class="text-sm text-gray-400">Project Manager</p>
                </div>
            </div>
        </div>
        <div class="flex-1 overflow-y-auto">
            <div class="p-6">
                <button class="w-full bg-custom text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2">
                    <i class="fas fa-plus"></i>
                    Create Team
                </button>

                <div class="relative mb-4">
                    <input type="text" placeholder="Team Code" class="w-full bg-gray-700 border-0 !rounded-button py-2 px-4 text-gray-100 placeholder-gray-400" />
                    <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="space-y-2">
                    <div class="bg-gray-700 p-4 !rounded-button hover:bg-gray-600 cursor-pointer">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="font-medium">Design Team</h3>
                                <p class="text-sm text-gray-400">8 members</p>
                            </div>
                            <span class="h-2 w-2 bg-green-500 rounded-full"></span>
                        </div>
                    </div>
                    <div class="bg-gray-700 p-4 !rounded-button hover:bg-gray-600 cursor-pointer">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="font-medium">Development Team</h3>
                                <p class="text-sm text-gray-400">12 members</p>
                            </div>
                            <span class="h-2 w-2 bg-green-500 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
    <main class="ml-80 flex-1 min-h-screen">
        <header class="bg-gray-800 border-b border-gray-700 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-semibold">Design Team</h2>
                    <p class="text-gray-400">8 team members · 24 active tasks</p>
                </div>
                <button class="bg-red-500 text-white py-2 px-4 !rounded-button hover:bg-red-600">
                    <i class="fas fa-sign-out-alt mr-2"></i>
                    Leave Team
                </button>
            </div>
        </header>
        <div class="p-6">
            <div class="grid grid-cols-3 gap-6">
                <div class="bg-gray-800 !rounded-button p-4">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-semibold">To Do</h3>
                        <span class="bg-gray-700 text-sm py-1 px-2 rounded">4</span>
                    </div>
                    <div class="space-y-4"><button class="w-full bg-gray-900 text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2 hover:bg-gray-700"><i class="fas fa-plus"></i>Add Task</button>
                        <div class="bg-gray-700 p-4 !rounded-button">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="font-medium">Design System Updates</h4>
                                <div class="flex gap-2">
                                    <button class="text-gray-400 hover:text-white"><i class="fas fa-pencil"></i></button>
                                    <button class="text-gray-400 hover:text-white"><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <p class="text-sm text-gray-400 mb-3">Update component library with new design tokens</p>
                            <div class="flex items-center gap-2">
                                <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20young%20designer%20with%20creative%20style%20on%20neutral%20background&width=24&height=24&orientation=squarish&flag=3a3442b2-e888-4fd3-a942-9a41b8bad0d7&flag=d61fd811-0ff6-43a0-ae6c-d74a653f3eac" class="w-6 h-6 rounded-full" alt="Avatar" />
                                <span class="text-sm text-gray-400">Sarah Chen</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-800 !rounded-button p-4">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-semibold">In Progress</h3>
                        <span class="bg-gray-700 text-sm py-1 px-2 rounded">3</span>
                    </div>
                    <div class="space-y-4"><button class="w-full bg-gray-900 text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2 hover:bg-gray-700"><i class="fas fa-plus"></i>Add Task</button>
                        <div class="bg-gray-700 p-4 !rounded-button">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="font-medium">User Research</h4>
                                <div class="flex gap-2">
                                    <button class="text-gray-400 hover:text-white"><i class="fas fa-pencil"></i></button>
                                    <button class="text-gray-400 hover:text-white"><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <p class="text-sm text-gray-400 mb-3">Conduct user interviews for new feature</p>
                            <div class="flex items-center gap-2">
                                <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20young%20researcher%20with%20glasses%20on%20neutral%20background&width=24&height=24&orientation=squarish&flag=abaf3311-835d-4045-a1c3-1d3432c8c3b4&flag=031fdafb-ae4e-44e4-b1fd-2df0326f6c2f" class="w-6 h-6 rounded-full" alt="Avatar" />
                                <span class="text-sm text-gray-400">Mike Johnson</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-800 !rounded-button p-4">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-semibold">Done</h3>
                        <span class="bg-gray-700 text-sm py-1 px-2 rounded">2</span>
                    </div>
                    <div class="space-y-4"><button class="w-full bg-gray-900 text-white py-2 px-4 !rounded-button mb-4 flex items-center justify-center gap-2 hover:bg-gray-700"><i class="fas fa-plus"></i>Add Task</button>
                        <div class="bg-gray-700 p-4 !rounded-button">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="font-medium">Wireframe Review</h4>
                                <div class="flex gap-2">
                                    <button class="text-gray-400 hover:text-white"><i class="fas fa-pencil"></i></button>
                                    <button class="text-gray-400 hover:text-white"><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <p class="text-sm text-gray-400 mb-3">Review and approve homepage wireframes</p>
                            <div class="flex items-center gap-2">
                                <img src="https://creatie.ai/ai/api/search-image?query=professional%20headshot%20of%20a%20senior%20designer%20with%20confident%20expression%20on%20neutral%20background&width=24&height=24&orientation=squarish&flag=d37a72a4-e382-4aa6-b9f4-ed4a99a9697e&flag=95691661-a489-477b-8b7c-be12b4ad31e3" class="w-6 h-6 rounded-full" alt="Avatar" />
                                <span class="text-sm text-gray-400">Alex Wong</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="fixed bottom-4 right-4 bg-gray-800 text-white p-4 !rounded-button shadow-lg flex items-center gap-3">
        <i class="fas fa-check-circle text-green-500"></i>
        <p>Task &#34;Design System Updates&#34; moved to In Progress</p>
    </div>
</body>
