/* The MaintenanceRequestService class is a service that handles CRUD operations for maintenance
requests. */
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
    ////////////////////////////////* part -5 *////////////////////////////////
    ChangeReviewForperformed: string,
    ChangeReviewForSuccess: string,
    ActualDowntime: string,
    WorkExecutionStatus: string,
    /////////////////////////////////////

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
      //////////////
      // approvalStatus: 'Pending',
      // // supervisorStatus: pending,exe
      // cisoStatus: 'Pending',
      // HeadOfDivisionStatus: 'Pending',
      // submissionDateTime,
    });

    return this.repo.save(payment);
  }
  /**
   * The `findOne` function takes an `id` parameter and returns the result of calling `findOneBy` on the
   * `repo` object with the `id` as a filter.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
   * item you want to find.
   * @returns If the `id` parameter is falsy (e.g. `null`, `undefined`, `0`, etc.), then `null` is being
   * returned. Otherwise, the method `findOneBy` is being called on `this.repo` with the `id` as a
   * parameter, and the result of that method call is being returned.
   */
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  // async findAll(): Promise<ServiceRequest[]> {
  //   return await this.serviceRequestRepository.find();
  // }
  /**
   * The `findAll` function returns a promise that resolves to an array of `Maintenance` objects, with
   * their associated `user` objects included.
   * @returns The `findAll` method is returning a Promise that resolves to an array of `Maintenance`
   * objects.
   */
  async findAll(): Promise<Maintenance[]> {
    return this.repo.find({ relations: ['user'] });
  }
  /**
   * The function updates a service request with the provided attributes.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
   * service request that needs to be updated.
   * @param attrs - The `attrs` parameter is an object that contains partial data for updating a
   * `Maintenance` entity. It allows you to update only specific properties of the entity instead of
   * updating all properties at once.
   * @returns The updated service request object is being returned.
   */
  async update(id: number, attrs: Partial<Maintenance>) {
    const serviceRequest = await this.findOne(id);
    if (!serviceRequest) {
      throw new NotFoundException('Payment details not found');
    }
    Object.assign(serviceRequest, attrs);
    return this.repo.save(serviceRequest);
  }
  /**
   * The function removes a payment record from the repository based on the provided ID.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
   * payment that needs to be removed.
   * @returns The `remove` method is returning the result of the `remove` function from the repository.
   */
  async remove(id: number) {
    const payment = await this.findOne(id);
    if (!payment) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(payment);
  }
  ////////////////////////////////////////////
  async findAllreleasedForm(): Promise<Maintenance[]> {
    return this.repo.find({ where: { supervisorStatus: 'Released' } });
  }

  // Method to release a request
  async approve(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.approvalStatus = 'approve';
    return this.repo.save(request);
  }

  // Method to block a request
  async decline(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.approvalStatus = 'decline';
    return this.repo.save(request);
  }
  async revision(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.approvalStatus = 'revision';
    return this.repo.save(request);
  }
  ////////

  // Method to release a request
  async releaseRequest(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.supervisorStatus = 'Released';
    return this.repo.save(request);
  }

  // Method to block a request
  async blockRequest(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.supervisorStatus = 'Blocked';
    return this.repo.save(request);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////
  async findAllApproved(): Promise<Maintenance[]> {
    return this.repo.find({ where: { approvalStatus: 'approve' } });
  }

  // Method to release a request
  async approveed(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.cisoStatus = 'approveed';
    return this.repo.save(request);
  }

  // Method to block a request
  async reject(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.cisoStatus = 'decline';
    return this.repo.save(request);
  }
  // async (id: number) {
  //   const request = await this.findOne(id);
  //   if (!request) {
  //     throw new NotFoundException('Request not found');
  //   }
  //   // Update logic for blocking the request (e.g., changing its status)
  //   request.approvalStatus = 'revision';
  //   return this.repo.save(request);
  // }
  async findFinalApproved(): Promise<Maintenance[]> {
    return this.repo.find({ where: { cisoStatus: 'approveed' } });
  }

  // Method to release a request
  async confirm(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for releasing the request (e.g., changing its status)
    request.HeadOfDivisionStatus = 'confirm';
    return this.repo.save(request);
  }

  // Method to block a request
  async cancel(id: number) {
    const request = await this.findOne(id);
    if (!request) {
      throw new NotFoundException('Request not found');
    }
    // Update logic for blocking the request (e.g., changing its status)
    request.HeadOfDivisionStatus = 'cancel';
    return this.repo.save(request);
  }
  //find by department
  ////////////////////////////////////////////////////////////////////////
  async findAllFromAlternativeChannelsDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Alternative Channels' } });
  }
  async findAllFromApplicationUserManagementDepartment(): Promise<
    Maintenance[]
  > {
    return this.repo.find({
      where: { department: 'Application User Management' },
    });
  }
  async findAllFromCardsAndATMSystemDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Cards & ATM System' } });
  }
  async findAllFromCorporateApplicationDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Corporate Application' } });
  }
  async findAllFromDataCenterManagementDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Data Center Management' } });
  }
  async findAllFromDataCenterPassiveInfrastructureDepartment(): Promise<
    Maintenance[]
  > {
    return this.repo.find({
      where: { department: 'Data Center Passive Infrastructure' },
    });
  }
  async findAllFromDatabaseAdministrationDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Database Administration' } });
  }
  async findAllFromHelpDeskDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Help Desk' } });
  }
  async findAllITSecurityAndComplianceDepartment(): Promise<Maintenance[]> {
    return this.repo.find({
      where: { department: 'IT Security & Compliance' },
    });
  }
  async findAllFromMiddlewareAdministrationDepartment(): Promise<
    Maintenance[]
  > {
    return this.repo.find({
      where: { department: 'Middleware Administration' },
    });
  }
  async findAllNewInitiativesAndProjectsDepartment(): Promise<Maintenance[]> {
    return this.repo.find({
      where: { department: 'New Initiatives & Projects' },
    });
  }
  async findAllFromProcurementzzAndAssetManagementDepartment(): Promise<
    Maintenance[]
  > {
    return this.repo.find({
      where: { department: 'Procurement & Asset Management' },
    });
  }
  async findAllFromNetworkManagementDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Network Management' } });
  }
  async findAllFromRetailApplicationDepartment(): Promise<Maintenance[]> {
    return this.repo.find({ where: { department: 'Retail Application' } });
  }
  async findAllFromServerAndStorageManagementDepartment(): Promise<
    Maintenance[]
  > {
    return this.repo.find({
      where: { department: 'Server & Storage Management' },
    });
  }
  async findAllFromWindowsSystemManagementDepartment(): Promise<Maintenance[]> {
    return this.repo.find({
      where: { department: 'Windows System Management' },
    });
  }
  async findAllFromMISAndDataSupportDepartment(): Promise<Maintenance[]> {
    return this.repo.find({
      where: { department: 'MIS & Data Support' },
    });
  }
  async findAllFromSwiftDepartment(): Promise<Maintenance[]> {
    return this.repo.find({
      where: { department: 'Swift' },
    });
  }

  // async findRequestsByUser(requestedBy: string): Promise<Maintenance[]> {
  //   return this.repo.find({ where: { requestedBy } });
  // }
  // async findAllRequestNos(): Promise<string[]> {
  //   const requests = await this.repo.find({
  //     select: ['requestNo'], // Select only the requestNo field
  //   });

  //   // Extract just the requestNo values from the requests
  //   const requestNos = requests.map((request) => request.requestNo);
  //   return requestNos;
  // }
}
