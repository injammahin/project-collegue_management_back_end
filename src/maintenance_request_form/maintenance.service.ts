// src/service-request.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maintenance } from './maintetance.entity';
import { UpdateRequestDto } from 'src/dto/update-request.dto';

@Injectable()
export class MaintenanceRequestService {
  constructor(
    @InjectRepository(Maintenance) private repo: Repository<Maintenance>, // private emailService: EmailService,
  ) {}

  create(
    ////////////////////////////////* part -1 *////////////////////////////////

    requestNumber: string,

    subofChange: string,

    date: string,

    requesterName: string,

    EmployeeId: string,

    department: string,

    contractNo: string,

    MaintenanceType: string,

    purposeOfActivity: string,

    priority: string,

    impactLevel: string,

    requiredDowntime: string,

    mentionDowntime: string,

    startDate: string,

    startTime: string,

    endDate: string,

    endTime: string,
    ////////////////////////////////* part -2 *////////////////////////////////
    changeLocation: string,
    targetedSystemFor: string,
    IPaddress: string,
    ImpactedSystemform: string,
    DetailedDescriptionOfChange: string,
    DetailedWorkedPlanTask: string,
    DetailedWorkedPlanStartTime: string,
    DetailedWorkedPlanEndTime: string,
    RequirementTools: string,
    Implementationteam: string,
    Communication: string,
    RollBackPlan: string,
    checklistStatusOne: string,
    checklistStatusTwo: string,
    checklistStatusThree: string,
    checklistStatusFour: string,
    ////////////////////////////////* part -3 *////////////////////////////////
    ImpactedSystemfor: string,
    ActualPriority: string,
    Actualimpactlevel: string,
    ////////////////////////////////* part -4 *////////////////////////////////
    ExecusionTeamMenbers: string,
    ExecusionTeamleaders: string,
    ////////////////////////////////* part -4 *////////////////////////////////
    ChangeReviewForperformed: string,
    ChangeReviewForSuccess: string,
    ActualDowntime: string,
    WorkExecutionStatus: string,

    user: string,
  ) {
    const payment = this.repo.create({
      requestNumber,
      subofChange,
      date,
      requesterName,
      EmployeeId,
      department,
      contractNo,
      MaintenanceType,
      purposeOfActivity,
      priority,
      impactLevel,
      requiredDowntime,
      mentionDowntime,
      startDate,
      startTime,
      endDate,
      endTime,
      changeLocation,
      targetedSystemFor,
      IPaddress,
      ImpactedSystemform,
      DetailedDescriptionOfChange,
      DetailedWorkedPlanTask,
      DetailedWorkedPlanStartTime,
      DetailedWorkedPlanEndTime,
      RequirementTools,
      Implementationteam,
      Communication,
      RollBackPlan,
      checklistStatusOne,
      checklistStatusTwo,
      checklistStatusThree,
      checklistStatusFour,
      ////////////////////////////////* part -3 *////////////////////////////////
      ImpactedSystemfor,
      ActualPriority,
      Actualimpactlevel,
      ////////////////////////////////* part -4 *////////////////////////////////
      ExecusionTeamMenbers,
      ExecusionTeamleaders,
      ////////////////////////////////* part -4 *////////////////////////////////
      ChangeReviewForperformed,
      ChangeReviewForSuccess,
      ActualDowntime,
      WorkExecutionStatus,
      user,
    });

    return this.repo.save(payment);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  // async findAll(): Promise<ServiceRequest[]> {
  //   return await this.serviceRequestRepository.find();
  // }
  async findAll(): Promise<Maintenance[]> {
    return this.repo.find({ relations: ['user'] });
  }
  async update(id: number, attrs: Partial<Maintenance>) {
    const serviceRequest = await this.findOne(id);
    if (!serviceRequest) {
      throw new NotFoundException('Payment details not found');
    }
    Object.assign(serviceRequest, attrs);
    return this.repo.save(serviceRequest);
  }
  async remove(id: number) {
    const payment = await this.findOne(id);
    if (!payment) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(payment);
  }
}
