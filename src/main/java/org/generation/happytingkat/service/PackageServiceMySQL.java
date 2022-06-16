package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.PackageRepository;
import org.generation.happytingkat.repository.entity.Customers;
import org.generation.happytingkat.repository.entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PackageServiceMySQL implements PackageService {

    private final PackageRepository packageRepository;
    public PackageServiceMySQL(@Autowired PackageRepository packageRepository)
    {
        this.packageRepository = packageRepository;
    }

    @Override
    public List<Package> all()
    {
        List<Package> result = new ArrayList<>();
        packageRepository.findAll().forEach( result :: add );
        return result;
    }

    @Override
    public void delete(int packageId) {
        packageRepository.deleteById(packageId);
    }

    @Override
    public Package findById(int packageId) {
        Optional<Package> aPackage = packageRepository.findById(packageId);   //Cannot be a null
        Package packageResponse = aPackage.get();
        return packageResponse;
    }
}
