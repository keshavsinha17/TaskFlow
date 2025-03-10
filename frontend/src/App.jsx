import React from "react";

const App = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen transition-colors duration-300">
      <nav className="border-b border-gray-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center space-x-4 py-3">
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>All Tasks</option>
              <option>High Priority</option>
              <option>Due Soon</option>
              <option>My Tasks</option>
            </select>
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>Sort by Date</option>
              <option>Sort by Priority</option>
              <option>Sort by Assignee</option>
            </select>
          </div> */}
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo"/>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="!rounded-button bg-gray-800 p-2 hover:bg-gray-700 mr-4" id="theme-toggle">
                <i className="fas fa-moon text-gray-400"></i>
              </button>
              <button className="!rounded-button bg-gray-800 p-2 hover:bg-gray-700">
                <i className="fas fa-bell text-gray-400"></i>
              </button>
              <button className="!rounded-button bg-gray-800 p-2 hover:bg-gray-700">
                <i className="fas fa-cog text-gray-400"></i>
              </button>
              <div className="flex items-center">
                <img className="h-8 w-8 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young business person with a friendly smile, wearing modern business attire, against a neutral background&width=100&height=100&orientation=squarish&flag=bc7d08a3-04ea-4bd0-b065-4643d40ce12a&flag=7fa5725b-aba5-42b1-9c4f-df267e1716a1&flag=989e8428-62f8-4add-9435-9297baceef1c&flag=cf927a14-d535-43e6-860c-34454ff62270" alt="User"/>
              </div>
            </div>
          </div>

          {/* this section is for cpoied section */}
          <div className="flex items-center space-x-4 py-3">
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>All Tasks</option>
              <option>High Priority</option>
              <option>Due Soon</option>
              <option>My Tasks</option>
            </select>
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>Sort by Date</option>
              <option>Sort by Priority</option>
              <option>Sort by Assignee</option>
            </select>


            <button className="bg-custom hover:bg-custom/90 text-gray-100 rounded-lg px-4 py-2 text-sm">
            <i className="fas fa-plus mr-2"></i>Add Column
          </button>
          </div>
          {/* <button className="bg-custom hover:bg-custom/90 text-white px-4 py-2 rounded-lg transition-colors mb-4" id="add-column-btn">
            <i className="fas fa-plus mr-2"></i>Add Column
          </button> */}
        </div>
      </nav>

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Project Progress</h2>
            <span className="text-sm text-gray-400">67% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-custom rounded-full h-2" style={{width: "67%"}}></div>
          </div>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="inline-flex space-x-6 min-w-full">
            {/* To Do Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">To Do</h2>
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">4</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-yellow-500 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg">
                    <h3 className="font-medium mb-2">Design new landing page</h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young creative designer with artistic style&flag=aab55676-6868-4377-b621-296bb0443b5f" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Sarah K.</span>
                      </div>
                      <span className="text-sm bg-red-500/20 text-red-400 px-2 py-0.5 rounded">Overdue</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      <i className="fas fa-comment-alt mr-1"></i> 3 comments
                    </div>
                    <div className="text-sm text-gray-400">
                      <i className="fas fa-at mr-1"></i> @mike.r, @lisa.m mentioned
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-red-500 cursor-pointer hover:bg-gray-800 transition-colors">
                    <h3 className="font-medium mb-2">Update API documentation</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a male developer with glasses, wearing a casual tech company t-shirt, against a neutral background&width=100&height=100&orientation=squarish&flag=1bc2e432-d545-4882-86b8-350904faec45&flag=9003f014-1ac0-4507-aa91-67cbdf84e78d&flag=51951358-b738-48e1-b3e4-7a3a4e692c39&flag=967dc329-1dbc-4ff2-9969-ec3ca940d017" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Mike R.</span>
                      </div>
                      <span className="text-sm text-gray-400">Due in 3 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">In Progress</h2>
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">3</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg">
                    <h3 className="font-medium mb-2">Implement user authentication</h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a female software engineer&flag=12814b89-ca14-4b13-8093-c645ce5b1a20" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Lisa M.</span>
                      </div>
                      <span className="text-sm bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">Due soon</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      <i className="fas fa-comment-alt mr-1"></i> 5 comments
                    </div>
                    <div className="text-sm text-gray-400">
                      <i className="fas fa-at mr-1"></i> @sarah.k mentioned
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Done Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Done</h2>
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">2</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg">
                    <h3 className="font-medium mb-2">Setup CI/CD pipeline</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a DevOps engineer with a technical background, wearing a casual tech company hoodie, against a neutral background&width=100&height=100&orientation=squarish&flag=0d8edf7e-fb73-4687-aadf-590d844862e0&flag=840273f2-bfe6-450b-9ba2-98b37b6693a9&flag=c5ee8d63-7041-4fa2-a92e-e6d8063b586e&flag=8f724674-9934-46ba-849d-6e7a84a4f889" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Alex W.</span>
                      </div>
                      <span className="text-sm text-gray-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Log Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Activity Log</h2>
                  <i className="fas fa-sync-alt text-gray-400 cursor-pointer hover:text-gray-200"></i>
                </div>
                <div className="space-y-4">
                  <div className="text-sm text-gray-300">
                    <div className="flex items-center space-x-2 mb-1">
                      <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=profile1&flag=9ee5ca11-2271-4f20-80da-ca0b8a66d667" alt="User"/>
                      <span className="font-medium">Sarah K.</span>
                      <span className="text-gray-400">moved</span>
                      <span className="font-medium">Design new landing page</span>
                    </div>
                    <span className="text-gray-400 text-xs">2 minutes ago</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <div className="flex items-center space-x-2 mb-1">
                      <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=profile2&flag=7ab4bbcc-595b-4a11-ab23-172251e9d279" alt="User"/>
                      <span className="font-medium">Mike R.</span>
                      <span className="text-gray-400">commented on</span>
                      <span className="font-medium">Update API documentation</span>
                    </div>
                    <span className="text-gray-400 text-xs">15 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button className="fixed bottom-8 right-8 !rounded-button bg-custom hover:bg-custom/90 text-white p-4 shadow-lg">
        <i className="fas fa-plus text-lg"></i>
      </button>

      {/* Task Modal */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input type="text" className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom" placeholder="Enter task title (@mention teammates)"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom" rows="3" placeholder="Enter task description (@mention teammates)"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Assignee</label>
                <select className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom">
                  <option>Select assignee</option>
                  <option>Sarah K.</option>
                  <option>Mike R.</option>
                  <option>Lisa M.</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Due Date</label>
                <input type="date" className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom"/>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button type="button" className="!rounded-button px-4 py-2 bg-gray-700 hover:bg-gray-600">Cancel</button>
              <button type="submit" className="!rounded-button px-4 py-2 bg-custom hover:bg-custom/90">Create Task</button>
            </div>
          </form>
        </div>
      </div>

      {/* Task Detail Modal */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" id="task-detail-modal">
        <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Task Details</h2>
            <button className="text-gray-400 hover:text-gray-200">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Subtasks</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2"/>
                  <span>Research competitor landing pages</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2"/>
                  <span>Create wireframes</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Comments</h3>
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <img className="h-8 w-8 rounded-full" src="https://creatie.ai/ai/api/search-image?query=profile&width=100&height=100&flag=71381104-261c-483d-af24-c6ec6ceda364&flag=2e8f6aea-9e4b-4729-a3dc-602302de47c5&flag=c103daf1-97f9-4560-b5a0-2956b681c4ef"/>
                  <div>
                    <p className="text-sm">Looking good! Let's review this together.</p>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <textarea className="w-full bg-gray-700 border-gray-600 rounded-lg" placeholder="Add a comment..."></textarea>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Attachments</h3>
              <div className="flex items-center space-x-2">
                <i className="fas fa-file-pdf text-red-400"></i>
                <span className="text-sm">design-brief.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;