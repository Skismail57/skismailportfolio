const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  location: {
    country: String,
    city: String
  },
  path: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const projectViewSchema = new mongoose.Schema({
  projectId: String,
  views: {
    type: Number,
    default: 0
  },
  lastViewed: {
    type: Date,
    default: Date.now
  }
});

const resumeDownloadSchema = new mongoose.Schema({
  ip: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'fas fa-code'
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const certificateSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  originalName: String,
  description: String,
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
  Visitor: mongoose.model('Visitor', visitorSchema),
  ProjectView: mongoose.model('ProjectView', projectViewSchema),
  ResumeDownload: mongoose.model('ResumeDownload', resumeDownloadSchema),
  Skill: mongoose.model('Skill', skillSchema),
  Certificate: mongoose.model('Certificate', certificateSchema)
};
