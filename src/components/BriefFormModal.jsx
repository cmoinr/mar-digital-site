import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import Modal from '@/components/ui/modal';
import {
  briefTypes,
  commonClientFields,
  briefSpecificFields,
  sectionsByBriefType
} from '@/utils/briefConfig';

const BriefFormModal = ({ isOpen, onClose, briefType }) => {
  const { t } = useTranslation('briefs');
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Get sections for this brief type
  const sections = sectionsByBriefType[briefType] || [];
  const totalSteps = sections.length;

  // Handle input change
  const handleChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
    // Clear error for this field
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (fieldId, option, checked) => {
    setFormData(prev => {
      const currentValues = prev[fieldId] || [];
      if (checked) {
        return { ...prev, [fieldId]: [...currentValues, option] };
      } else {
        return { ...prev, [fieldId]: currentValues.filter(v => v !== option) };
      }
    });
  };

  // Validate current step
  const validateStep = () => {
    const currentSection = sections[currentStep];
    const newErrors = {};
    
    // Get fields for current section
    let fieldsToValidate = [];
    if (currentSection === 'client') {
      fieldsToValidate = commonClientFields;
    } else {
      const specificFields = briefSpecificFields[briefType];
      fieldsToValidate = specificFields[currentSection] || [];
    }

    // Validate required fields
    fieldsToValidate.forEach(field => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = t(`form.validation.required`);
      }
      
      // Email validation
      if (field.type === 'email' && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.id])) {
          newErrors[field.id] = t(`form.validation.invalidEmail`);
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Next step
  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  // Previous step
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep()) {
      return;
    }

    try {
      // TODO: Implement API call to submit brief
      console.log('Brief Form Data:', { briefType, ...formData });
      
      toast({
        title: t('form.success.title'),
        description: t('form.success.description'),
      });
      
      // Reset form and close modal
      setFormData({});
      setCurrentStep(0);
      onClose();
    } catch (error) {
      toast({
        title: t('form.error.title'),
        description: t('form.error.description'),
        variant: 'destructive'
      });
    }
  };

  // Render field based on type
  const renderField = (field) => {
    const fieldId = field.id;
    const value = formData[fieldId] || '';
    const error = errors[fieldId];

    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <div key={fieldId} className="space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-semibold text-gray-300">
              {t(`form.fields.${fieldId}.label`)} {field.required && '*'}
            </Label>
            <Input
              id={fieldId}
              type={field.type}
              value={value}
              onChange={(e) => handleChange(fieldId, e.target.value)}
              placeholder={t(`form.fields.${fieldId}.placeholder`)}
              className={`mt-2 p-3 rounded-xl border-2 ${
                error ? 'border-red-500' : 'border-[#00d4ff]/20'
              } bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all`}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        );

      case 'textarea':
        return (
          <div key={fieldId} className="space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-semibold text-gray-300">
              {t(`form.fields.${fieldId}.label`)} {field.required && '*'}
            </Label>
            <Textarea
              id={fieldId}
              value={value}
              onChange={(e) => handleChange(fieldId, e.target.value)}
              placeholder={t(`form.fields.${fieldId}.placeholder`)}
              rows={field.rows || 4}
              className={`mt-2 p-3 rounded-xl border-2 ${
                error ? 'border-red-500' : 'border-[#00d4ff]/20'
              } bg-[#0a0a0f] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 resize-none transition-all`}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        );

      case 'select':
        return (
          <div key={fieldId} className="space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-semibold text-gray-300">
              {t(`form.fields.${fieldId}.label`)} {field.required && '*'}
            </Label>
            <select
              id={fieldId}
              value={value}
              onChange={(e) => handleChange(fieldId, e.target.value)}
              className={`mt-2 w-full px-4 py-3 rounded-xl border-2 ${
                error ? 'border-red-500' : 'border-[#00d4ff]/20'
              } bg-[#0a0a0f] text-white focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 transition-all outline-none`}
            >
              <option value="" className="bg-[#0a0a0f]">
                {t('form.selectPlaceholder')}
              </option>
              {field.options.map((option) => (
                <option key={option} value={option} className="bg-[#0a0a0f]">
                  {t(`form.fields.${fieldId}.options.${option}`)}
                </option>
              ))}
            </select>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        );

      case 'radio':
        return (
          <div key={fieldId} className="space-y-3">
            <Label className="text-sm font-semibold text-gray-300">
              {t(`form.fields.${fieldId}.label`)} {field.required && '*'}
            </Label>
            <div className="space-y-2">
              {field.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#00d4ff]/5 cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name={fieldId}
                    value={option}
                    checked={value === option}
                    onChange={(e) => handleChange(fieldId, e.target.value)}
                    className="w-4 h-4 text-[#00d4ff] bg-[#0a0a0f] border-[#00d4ff]/30 focus:ring-[#00d4ff] focus:ring-2"
                  />
                  <span className="text-gray-300">
                    {t(`form.fields.${fieldId}.options.${option}`)}
                  </span>
                </label>
              ))}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        );

      case 'checkbox':
        return (
          <div key={fieldId} className="space-y-3">
            <Label className="text-sm font-semibold text-gray-300">
              {t(`form.fields.${fieldId}.label`)} {field.required && '*'}
            </Label>
            <div className="space-y-2">
              {field.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#00d4ff]/5 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={(formData[fieldId] || []).includes(option)}
                    onChange={(e) => handleCheckboxChange(fieldId, option, e.target.checked)}
                    className="w-4 h-4 rounded text-[#00d4ff] bg-[#0a0a0f] border-[#00d4ff]/30 focus:ring-[#00d4ff] focus:ring-2"
                  />
                  <span className="text-gray-300">
                    {t(`form.fields.${fieldId}.options.${option}`)}
                  </span>
                </label>
              ))}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        );

      default:
        return null;
    }
  };

  // Render current step fields
  const renderStepFields = () => {
    const currentSection = sections[currentStep];
    
    if (currentSection === 'client') {
      return commonClientFields.map(field => renderField(field));
    } else {
      const specificFields = briefSpecificFields[briefType];
      const fields = specificFields[currentSection] || [];
      return fields.map(field => renderField(field));
    }
  };

  // Progress percentage
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`modalTitle.${briefType}`)}
      maxWidth="max-w-5xl"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-400">
            {t('form.step')} {currentStep + 1} {t('form.of')} {totalSteps}
          </span>
          <span className="text-sm font-semibold text-[#00d4ff]">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff]"
          />
        </div>
      </div>

      {/* Step Title */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          {t(`form.sections.${sections[currentStep]}.title`)}
        </h3>
        <p className="text-gray-400">
          {t(`form.sections.${sections[currentStep]}.description`)}
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 mb-8">
          {renderStepFields()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6 border-t border-[#00d4ff]/20">
          {currentStep > 0 && (
            <Button
              type="button"
              onClick={handlePrevious}
              variant="outline"
              className="flex-1 border-2 border-[#00d4ff]/30 bg-transparent text-white hover:bg-[#00d4ff]/10 py-3 rounded-xl"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              {t('form.previous')}
            </Button>
          )}
          
          {currentStep < totalSteps - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:opacity-90 text-white py-3 rounded-xl"
            >
              {t('form.next')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-400 hover:opacity-90 text-white py-3 rounded-xl"
            >
              {t('form.submit')}
              <Send className="ml-2 w-5 h-5" />
            </Button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default BriefFormModal;
