import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const defaultTask = {
    title: '',
    description: '',
    status: 'todo',
};

const TaskModal = ({
    isOpen,
    onClose,
    onSave,
    task,
    defaultStatus,
}) => {
    const [formData, setFormData] = useState(defaultTask);
    const isEditing = !!task?.id;

    useEffect(() => {
        if (task) {
            setFormData(task);
        } else {
            setFormData({
                ...defaultTask,
                status: defaultStatus || 'todo',
            });
        }
    }, [task, defaultStatus, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title.trim()) {
            onSave(formData);
            onClose();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleStatusChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            status: value
        }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md animate-scale-in">
                <DialogHeader>
                    <DialogTitle className="text-center">
                        {isEditing ? 'Edit Task' : 'Add New Task'}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Task title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full"
                                autoFocus
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Task description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full min-h-[100px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={formData.status}
                                onValueChange={handleStatusChange}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todo">To-Do</SelectItem>
                                    <SelectItem value="in-progress">In-Progress</SelectItem>
                                    <SelectItem value="done">Done</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-primary text-white">
                            {isEditing ? 'Save Changes' : 'Add Task'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default TaskModal;